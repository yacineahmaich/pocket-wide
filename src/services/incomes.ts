import supabase from './supabase';

export const getIncomes = async ({
  from,
  to,
}: {
  from: number;
  to: number;
}): Promise<{ data: Income[]; count: number | null }> => {
  const { data, count, error } = await supabase
    .from('incomes')
    .select('*', { count: 'exact' })
    .range(from, to);

  if (error) throw new Error(error.message);

  count as number;

  return {
    data,
    count,
  };
};

export const createIncome = async ({
  attachement,
  ...expense
}: CreateEditIncome) => {
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

  const { data, error } = await supabase.from('incomes').insert([
    {
      ...expense,
      attachement: attachementPath,
    },
  ]);

  if (error) throw new Error(error.message);

  return data as Income | null;
};

export const updateIncome = async ({
  id,
  income,
}: {
  id: number;
  income: CreateEditIncome;
}) => {
  const { error } = await supabase.from('incomes').update(income).eq('id', id);

  if (error) throw new Error(error.message);
};

export const deleteIncome = async ({ id }: { id: number }) => {
  const { error } = await supabase.from('incomes').delete().eq('id', id);

  if (error) throw new Error(error.message);
};
