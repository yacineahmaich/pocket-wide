import { PAGE_SIZE } from './config';

export const formatCurrency = (price: number, currency = 'USD') => {
  return new Intl.NumberFormat(navigator.language, {
    style: 'currency',
    currency,
  }).format(price);
};

export const formatDate = (date?: string | Date, format = 'short') => {
  if (!date) return;

  // @ts-ignore
  return new Date(date).toLocaleDateString('en-CA', { dateStyle: format });
};

export const getDateFromStartDate = (date: Date | string) => {
  const transformedDate = new Date(date);
  transformedDate.setDate(1);
  return transformedDate;
};

export const getPaginationParams = (page: number) => {
  const from = page * PAGE_SIZE - PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  return { from, to };
};
