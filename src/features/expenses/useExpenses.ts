import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getExpenses } from '../../services/expenses';
import { PAGE_SIZE } from '../../utils/config';
import { getPaginationParams } from '../../utils/helpers';
import { useFilter } from '../shared/useFilter';

export const useExpenses = () => {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;

  const { filter } = useFilter([
    'from',
    'to',
    'search',
    'min-amount',
    'max-amount',
    'category',
    'tag',
  ]);

  return useQuery({
    queryKey: ['expenses', { page, filter }],
    queryFn: () =>
      getExpenses({
        pagination: getPaginationParams(page),
        filter,
      }),
    onSuccess({ count }) {
      // PRE-FETCHING
      const pageCount = Math.ceil((count ?? 0) / PAGE_SIZE);
      if (page < pageCount) {
        queryClient.prefetchQuery({
          queryKey: ['expenses', { page: page + 1, filter }],
          queryFn: () =>
            getExpenses({
              pagination: getPaginationParams(page + 1),
              filter,
            }),
        });
      }
      if (page > 1) {
        queryClient.prefetchQuery({
          queryKey: ['expenses', { page: page - 1, filter }],
          queryFn: () =>
            getExpenses({
              pagination: getPaginationParams(page - 1),
              filter,
            }),
        });
      }
    },
    keepPreviousData: true,
  });
};
