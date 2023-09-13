import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useFilter } from '../shared/useFilter';
import { getIncomes } from '../../services/incomes';
import { PAGE_SIZE } from '../../utils/config';
import { getPaginationParams } from '../../utils/helpers';

export const useIncomes = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;

  const { filter } = useFilter([
    'from',
    'to',
    'search',
    'minAmount',
    'maxAmount',
    'category',
    'tag',
  ]);

  return useQuery({
    queryKey: ['incomes', { page, filter }],
    queryFn: () =>
      getIncomes({
        pagination: getPaginationParams(page),
        filter,
      }),
    onSuccess({ count, data }) {
      // PRE-FETCHING
      const pageCount = Math.ceil((count ?? 0) / PAGE_SIZE);

      if (data.length === 0 && page > pageCount) {
        navigate(`?page=${pageCount}`);
      }

      if (page < pageCount) {
        queryClient.prefetchQuery({
          queryKey: ['incomes', { page: page + 1, filter }],
          queryFn: () =>
            getIncomes({
              pagination: getPaginationParams(page + 1),
              filter,
            }),
        });
      }
      if (page > 1) {
        queryClient.prefetchQuery({
          queryKey: ['incomes', { page: page - 1, filter }],
          queryFn: () =>
            getIncomes({
              pagination: getPaginationParams(page - 1),
              filter,
            }),
        });
      }
    },
    keepPreviousData: true,
  });
};
