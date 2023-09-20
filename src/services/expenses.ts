import { formatDate } from '../utils/helpers';
import supabase from '../lib/supabase';

type Params = {
  pagination: { from: number; to: number };
  filter: { [key: string]: string };
};

export const getExpenses = async ({
  pagination: { from, to },
  filter,
}: Params): Promise<{ data: Expense[]; count: number | null }> => {
  let query = supabase.from('expenses').select('*', { count: 'exact' });

  if (filter.from) {
    query = query.gte('date', formatDate(filter.from));
  }
  if (filter.to) {
    query = query.lte('date', formatDate(filter.to));
  }
  if (filter.search) {
    query = query.ilike('title', `%${filter.search}%`);
  }
  if (filter['min-amount']) {
    query = query.gte('amount', filter['min-amount']);
  }
  if (filter['max-amount']) {
    query = query.lte('amount', filter['max-amount']);
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

export const createExpense = async ({
  attachement,
  ...expense
}: CreateEditExpense) => {
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

export const updateExpense = async ({
  id,
  expense,
}: {
  id: number;
  expense: CreateEditExpense;
}) => {
  const { error } = await supabase
    .from('expenses')
    .update(expense)
    .eq('id', id);

  if (error) throw new Error(error.message);
};

export const deleteExpense = async ({ id }: { id: number }) => {
  const { error } = await supabase.from('expenses').delete().eq('id', id);

  if (error) throw new Error(error.message);
};
