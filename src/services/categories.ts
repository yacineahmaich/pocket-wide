import supabase from './supabase';

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
