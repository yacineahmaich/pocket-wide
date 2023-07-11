import supabase from './supabase';

export const getExpenses = async ({
  from,
  to,
}: {
  from: number;
  to: number;
}): Promise<{ data: Expense[]; count: number | null }> => {
  const { data, count, error } = await supabase
    .from('expenses')
    .select('*', { count: 'exact' })
    .range(from, to);

  if (error) throw new Error(error.message);

  count as number;

  return {
    data,
    count,
  };
};

export const createExpense = async ({ attachement, ...expense }: Expense) => {
  let attachementPath = '';
  if (attachement) {
    const imageName = new Date().getTime();

    const { error } = await supabase.storage
      .from('pocket-wide')
      .upload('attachements/' + imageName, attachement);

    if (error) throw new Error(error.message);

    const {
      data: { publicUrl },
    } = supabase.storage
      .from('pocket-wide')
      .getPublicUrl(`attachements/${imageName}`);

    attachementPath = publicUrl;
  }

  const { data, error } = await supabase.from('expenses').insert([
    {
      ...expense,
      attachement: attachementPath,
    },
  ]);

  if (error) throw new Error(error.message);

  console.log(data);

  return data as Expense | null;
};

export const deleteExpense = async ({ id }: { id: number }) => {
  const { error } = await supabase.from('expenses').delete().eq('id', id);

  if (error) throw new Error(error.message);
};
