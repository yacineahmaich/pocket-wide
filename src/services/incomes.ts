import { formatDate } from '../utils/helpers';
import supabase from './supabase';

type Params = {
  pagination: { from: number; to: number };
  filter: { [key: string]: string };
};

export const getIncomes = async ({
  pagination: { from, to },
  filter,
}: Params): Promise<{ data: Income[]; count: number | null }> => {
  let query = supabase.from('incomes').select('*', { count: 'exact' });

  if (filter.from) {
    query = query.gte('date', formatDate(filter.from));
  }
  if (filter.to) {
    query = query.lte('date', formatDate(filter.to));
  }
  if (filter.search) {
    query = query.ilike('title', `%${filter.search}%`);
  }
  if (filter.minAmount) {
    query = query.gte('amount', filter.minAmount);
  }
  if (filter.maxAmount) {
    query = query.lte('amount', filter.maxAmount);
  }
  if (filter.category) {
    query = query.eq('category', filter.category);
  }
  if (filter.tag) {
    query = query.ilike('tags', `%${filter.tag}%`);
  }

  const { data, count, error } = await query.range(from, to);

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
