import { DateRangePickerValue } from '@tremor/react';
import { categories, incomeCategories } from '../utils/constants';
import { formatDate } from '../utils/helpers';
import supabase from '../lib/supabase';

export const getStats = async () => {
  const currentDate = new Date();
  const firstDayOfPrevMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() - 1,
    1,
  ).toLocaleDateString('en-CA');
  const firstDayOfCurMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1,
  ).toLocaleDateString('en-CA');

  const { data: expensesCurMonth, error: expensesCurMonthError } =
    await supabase
      .from('expenses')
      .select<'*', Expense>('*')
      .gte('date', firstDayOfCurMonth);
  const { data: expensesPrevMonth, error: expensesPrevMonthError } =
    await supabase
      .from('expenses')
      .select<'*', Expense>('*')
      .gte('date', firstDayOfPrevMonth)
      .lt('date', firstDayOfCurMonth);

  if (expensesCurMonthError || expensesPrevMonthError)
    throw new Error('Could not get Expenses stats');

  const { data: incomesCurMonth, error: incomesCurMonthError } = await supabase
    .from('incomes')
    .select<'*', Income>('*')
    .gte('date', firstDayOfCurMonth);
  const { data: incomesPrevMonth, error: incomesPrevMonthError } =
    await supabase
      .from('incomes')
      .select<'*', Income>('*')
      .gte('date', firstDayOfPrevMonth)
      .lt('date', firstDayOfCurMonth);

  if (incomesCurMonthError || incomesPrevMonthError)
    throw new Error('Could not get Expenses stats');

  const expensesTotalCurrentMonth = expensesCurMonth.reduce(
    (total, exp) => total + exp.amount,
    0,
  );
  const expensesTotalPrevMonth = expensesPrevMonth.reduce(
    (total, exp) => total + exp.amount,
    0,
  );
  const incomesTotalCurrentMonth = incomesCurMonth.reduce(
    (total, exp) => total + exp.amount,
    0,
  );
  const incomesTotalPrevMonth = incomesPrevMonth.reduce(
    (total, exp) => total + exp.amount,
    0,
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

export const getPerformance = async (
  dateRange: DateRangePickerValue,
): Promise<{ date: string; expenses: number; incomes: number }[]> => {
  const from = dateRange.from
    ? formatDate(dateRange.from)
    : formatDate(new Date('01,01,2023'));
  const to = dateRange.to ? formatDate(dateRange.to) : formatDate(new Date());

  const { data: expensesData, error: expensesError } = await supabase
    .from('expenses')
    .select('*')
    .gte('date', from)
    .lte('date', to);

  if (expensesError) {
    throw new Error(expensesError.message);
  }
  const { data: incomesData, error: incomesError } = await supabase
    .from('incomes')
    .select('*')
    .gte('date', from)
    .lte('date', to);

  if (incomesError) {
    throw new Error(incomesError.message);
  }

  const res: { [key: string]: { expenses: number; incomes: number } } = {};

  expensesData?.forEach(exp => {
    if (!res[exp.date]?.expenses) {
      res[exp.date] = { ...res[exp.date], expenses: exp.amount };
    } else {
      res[exp.date].expenses += exp.amount;
    }
  });

  incomesData?.forEach(inc => {
    if (!res[inc.date]?.incomes) {
      res[inc.date] = { ...res[inc.date], incomes: inc.amount };
    } else {
      res[inc.date].incomes += inc.amount;
    }
  });

  const x = Object.entries(res).reduce(
    (acc, [date, { expenses, incomes }]) => [
      ...acc,
      { date, expenses: expenses ?? 0, incomes: incomes ?? 0 },
    ],
    [] as { date: string; expenses: number; incomes: number }[],
  );

  return x;
};

export const getCategoriesOverview = async ({
  dateRange,
  type,
}: {
  dateRange: DateRangePickerValue;
  type: 'incomes' | 'expenses';
}) => {
  const startDate = dateRange.from
    ? formatDate(dateRange.from)
    : formatDate(new Date('01,01,2023'));
  const endDate = dateRange.to
    ? formatDate(dateRange.to)
    : formatDate(new Date());

  const { data: expenses, error: expensesError } = await supabase
    .from('expenses')
    .select<'*', Expense>('*')
    .gte('date', startDate)
    .lte('date', endDate);

  if (expensesError) throw new Error(expensesError.message);

  const { data: incomes, error: incomesError } = await supabase
    .from('incomes')
    .select<'*', Income>('*')
    .gte('date', startDate)
    .lte('date', endDate);

  if (incomesError) throw new Error(incomesError.message);

  const expensesPerCategory = expenses.reduce(
    (acc, exp) => {
      acc[exp.category] = acc[exp.category]
        ? acc[exp.category] + exp.amount
        : exp.amount;
      return acc;
    },
    {} as { [key: string]: number },
  );

  const incomesPerCategory = incomes.reduce(
    (acc, inc) => {
      acc[inc.category] = acc[inc.category]
        ? acc[inc.category] + inc.amount
        : inc.amount;
      return acc;
    },
    {} as { [key: string]: number },
  );

  const categoriesList = type === 'expenses' ? categories : incomeCategories;
  const transformedExpenses = Object.entries(expensesPerCategory).map(
    ([name, value]) => ({
      name,
      value,
      icon: categoriesList.find(c => c.key === name)?.Icon,
    }),
  );
  const transformedIncomes = Object.entries(incomesPerCategory).map(
    ([name, value]) => ({
      name,
      value,
      icon: categoriesList.find(c => c.key === name)?.Icon,
    }),
  );

  return {
    expenses: transformedExpenses,
    incomes: transformedIncomes,
  };
};
