import { useQuery } from '@tanstack/react-query';
import { getAllExpenses } from '../../services/categories';

export const useAllExpenses = () => {
  return useQuery({
    queryKey: ['expenses-per-category'],
    queryFn: getAllExpenses,
  });
};
