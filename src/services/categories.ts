import supabase from '../lib/supabase';

export const getAllExpenses = async () => {
  const { data, error } = await supabase
    .from('expenses')
    .select<'*', Expense>('*');

  if (error) throw new Error(error.message);

  return data;
};
