import { useQuery } from '@tanstack/react-query';
import { getExpenses } from '../../services/expenses';
import { useSearchParams } from 'react-router-dom';
import { getPaginationParams } from '../../utils/helpers';

export const useExpenses = () => {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;

  return useQuery({
    queryKey: ['expenses', { page }],
    queryFn: () => getExpenses(getPaginationParams(page)),
    keepPreviousData: true,
  });
};
