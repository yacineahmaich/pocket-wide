import { formatDate, getDateFromStartDate } from '../utils/helpers';
import supabase from './supabase';

export const getStats = async () => {
  const currentDate = new Date();
  const firstDayOfPrevMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() - 1,
    1
  ).toLocaleDateString('en-CA');
  const firstDayOfCurMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).toLocaleDateString('en-CA');

  const { data: expensesCurMonth, error: expensesCurMonthError } =
    await supabase
      .from('expenses')
      .select<any, Expense>('*')
      .gte('date', firstDayOfCurMonth);
  const { data: expensesPrevMonth, error: expensesPrevMonthError } =
    await supabase
      .from('expenses')
      .select<any, Expense>('*')
      .gte('date', firstDayOfPrevMonth)
      .lt('date', firstDayOfCurMonth);

  if (expensesCurMonthError || expensesPrevMonthError)
    throw new Error('Could not get Expenses stats');

  const { data: incomesCurMonth, error: incomesCurMonthError } = await supabase
    .from('incomes')
    .select<any, Income>('*')
    .gte('date', firstDayOfCurMonth);
  const { data: incomesPrevMonth, error: incomesPrevMonthError } =
    await supabase
      .from('incomes')
      .select<any, Income>('*')
      .gte('date', firstDayOfPrevMonth)
      .lt('date', firstDayOfCurMonth);

  if (incomesCurMonthError || incomesPrevMonthError)
    throw new Error('Could not get Expenses stats');

  const expensesTotalCurrentMonth = expensesCurMonth.reduce(
    (total, exp) => total + exp.amount,
    0
  );
  const expensesTotalPrevMonth = expensesPrevMonth.reduce(
    (total, exp) => total + exp.amount,
    0
  );
  const incomesTotalCurrentMonth = incomesCurMonth.reduce(
    (total, exp) => total + exp.amount,
    0
  );
  const incomesTotalPrevMonth = incomesPrevMonth.reduce(
    (total, exp) => total + exp.amount,
    0
  );

  return {
    expenses: {
      current: expensesTotalCurrentMonth ?? 0,
      prev: expensesTotalPrevMonth ?? 0,
    },
    incomes: {
      current: incomesTotalCurrentMonth ?? 0,
      prev: incomesTotalPrevMonth ?? 0,
    },
  };
};

export const getPerformance = async (): Promise<{
  expenses: { [key: string]: number }[];
  incomes: { [key: string]: number }[];
}> => {
  const date = formatDate(getDateFromStartDate(new Date()));

  const { data: expensesData, error: expensesError } = await supabase
    .from('expenses')
    .select('*')
    .gte('date', date);

  if (expensesError) {
    throw new Error(expensesError.message);
  }
  const { data: incomesData, error: incomesError } = await supabase
    .from('incomes')
    .select('*')
    .gte('date', date);

  if (incomesError) {
    throw new Error(incomesError.message);
  }
  const expenses = expensesData?.reduce((acc, exp) => {
    if (!acc[exp.date]) {
      acc[exp.date] = exp.amount;
    } else {
      acc[exp.date] += exp.amount;
    }

    return acc;
  }, {} as { [key: string]: number });

  const incomes = incomesData?.reduce((acc, exp) => {
    if (!acc[exp.date]) {
      acc[exp.date] = exp.amount;
    } else {
      acc[exp.date] += exp.amount;
    }

    return acc;
  }, {} as { [key: string]: number });

  return { expenses, incomes } ?? {};
};
