import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getPaginationParams } from '../../utils/helpers';
import { getIncomes } from '../../services/incomes';

export const useIncomes = () => {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;

  return useQuery({
    queryKey: ['incomes', { page }],
    queryFn: () => getIncomes(getPaginationParams(page)),
    keepPreviousData: true,
  });
};
