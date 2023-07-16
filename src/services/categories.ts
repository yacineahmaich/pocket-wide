import supabase from './supabase';

export const getExpensesPerCategory = async () => {
  const { data, error } = await supabase
    .from('expenses')
    .select<'*', Expense>('*');

  if (error) throw new Error(error.message);

  return data;
};
