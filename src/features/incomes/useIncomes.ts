import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getPaginationParams } from '../../utils/helpers';
import { getIncomes } from '../../services/incomes';
import { DateRangePickerValue } from '@tremor/react';
import { Filters } from '../../types/filter';
import { PAGE_SIZE } from '../../utils/config';

export const useIncomes = () => {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;

  const currentFrom = searchParams.get('from');
  const currentTo = searchParams.get('to');
  const date: DateRangePickerValue = {
    from: currentFrom ? new Date(currentFrom) : undefined,
    to: currentTo ? new Date(currentTo) : undefined,
  };
  const search = searchParams.get('search') || '';
  const minAmount = searchParams.get('min-amount') || '';
  const maxAmount = searchParams.get('max-amount') || '';
  const category = searchParams.get('category') || '';
  const tag = searchParams.get('tag') || '';

  const filterOptions: Filters = {
    date,
    search,
    minAmount,
    maxAmount,
    category,
    tag,
  };

  return useQuery({
    queryKey: ['incomes', { page, filterOptions }],
    queryFn: () =>
      getIncomes({
        pagination: getPaginationParams(page),
        filters: filterOptions,
      }),
    onSuccess({ count }) {
      // PRE-FETCHING
      const pageCount = Math.ceil(count ?? 0 / PAGE_SIZE);
      if (page < pageCount) {
        queryClient.prefetchQuery({
          queryKey: ['incomes', { page: page + 1, filterOptions }],
          queryFn: () =>
            getIncomes({
              pagination: getPaginationParams(page + 1),
              filters: filterOptions,
            }),
        });
      }
      if (page > 1) {
        queryClient.prefetchQuery({
          queryKey: ['incomes', { page: page - 1, filterOptions }],
          queryFn: () =>
            getIncomes({
              pagination: getPaginationParams(page - 1),
              filters: filterOptions,
            }),
        });
      }
    },
    keepPreviousData: true,
  });
};
