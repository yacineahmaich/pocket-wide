import { Filters } from '../types/filter';
import { formatDate } from '../utils/helpers';
import supabase from './supabase';

type Params = {
  pagination: { from: number; to: number };
  filters: Filters;
};

export const getExpenses = async ({
  pagination: { from, to },
  filters,
}: Params): Promise<{ data: Expense[]; count: number | null }> => {
  let query = supabase.from('expenses').select('*', { count: 'exact' });

  if (filters.date.from) {
    query = query.gte('date', formatDate(filters.date.from));
  }
  if (filters.date.to) {
    query = query.lte('date', formatDate(filters.date.to));
  }
  if (filters.search) {
    query = query.ilike('title', `%${filters.search}%`);
    // query = query.ilike('description', `%${filters.search}%`);
  }
  if (filters.minAmount) {
    query = query.gte('amount', filters.minAmount);
  }
  if (filters.maxAmount) {
    query = query.lte('amount', filters.maxAmount);
  }
  if (filters.category) {
    query = query.eq('category', filters.category);
  }
  if (filters.tag) {
    query = query.ilike('tags', `%${filters.tag}%`);
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
