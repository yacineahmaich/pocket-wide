import { useQuery } from '@tanstack/react-query';
import { getExpensesPerCategory } from '../../services/categories';

export const useExpensesPerCategory = () => {
  return useQuery({
    queryKey: ['expenses-per-category'],
    queryFn: getExpensesPerCategory,
  });
};
