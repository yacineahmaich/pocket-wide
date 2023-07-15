import { number } from 'yup';
import { formatCurrency, formatDate } from '../utils/helpers';
import supabase from './supabase';
import { categories } from '../utils/constants';
import { FaBolt } from 'react-icons/fa';

export const getExpensesPerCategory = async () => {
  const { data, error } = await supabase
    .from('expenses')
    .select<any, Expense>('*');

  if (error) throw new Error(error.message);

  // calculte total  expenses per each category

  const expensesPerCategory = data.reduce((acc, expense) => {
    acc[expense.category] = acc[expense.category]
      ? acc[expense.category] + expense.amount
      : expense.amount;

    return acc;
  }, {} as { [key: string]: number });

  return expensesPerCategory;
};

export const getCategoriesOverview = async () => {
  const date = new Date();
  date.setDate(1);
  const { data: expenses, error: expensesError } = await supabase
    .from('expenses')
    .select<'*', Expense>('*')
    .gte('date', formatDate(date));

  if (expensesError) throw new Error(expensesError.message);

  const { data: incomes, error: incomesError } = await supabase
    .from('incomes')
    .select<'*', Income>('*')
    .gte('date', formatDate(date));

  if (incomesError) throw new Error(incomesError.message);

  const expensesPerCategory = expenses.reduce((acc, exp) => {
    acc[exp.category] = acc[exp.category]
      ? acc[exp.category] + exp.amount
      : exp.amount;
    return acc;
  }, {} as { [key: string]: number });

  const incomesPerCategory = incomes.reduce((acc, inc) => {
    acc[inc.category] = acc[inc.category]
      ? acc[inc.category] + inc.amount
      : inc.amount;
    return acc;
  }, {} as { [key: string]: number });

  console.log(expensesPerCategory);
  console.log(incomesPerCategory);

  const transformedExpenses = Object.entries(expensesPerCategory).map(
    ([name, value]) => ({
      name,
      value: formatCurrency(value, 'USD'),
      icon: categories.find(c => c.key === name)?.Icon,
    })
  );
  const transformedIncomes = Object.entries(incomesPerCategory).map(
    ([name, value]) => ({
      name,
      value: formatCurrency(value, 'USD'),
      icon: categories.find(c => c.key === name)?.Icon,
    })
  );

  return {
    expenses: transformedExpenses,
    incomes: transformedIncomes,
  };
};
