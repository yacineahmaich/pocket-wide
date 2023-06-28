import { PAGE_SIZE } from './config';

export const formatCurrency = (price: number, currency: string) => {
  return new Intl.NumberFormat(navigator.language, {
    style: 'currency',
    currency,
  }).format(price);
};

export const getPaginationParams = (page: number) => {
  const from = page * PAGE_SIZE - PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  console.log(from, to);

  return { from, to };
};
