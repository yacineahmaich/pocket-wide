import { PAGE_SIZE } from './config';

export const formatCurrency = (price: number, currency: string) => {
  return new Intl.NumberFormat(navigator.language, {
    style: 'currency',
    currency,
  }).format(price);
};

export const formatDate = (date: string | Date) => {
  return new Date(date).toLocaleDateString('en-CA');
};

export const getDateFromStartDate = (date: Date | string) => {
  const transformedDate = new Date(date);
  transformedDate.setMonth(new Date().getMonth() - 1);
  return transformedDate;
};

export const getPaginationParams = (page: number) => {
  const from = page * PAGE_SIZE - PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  return { from, to };
};
