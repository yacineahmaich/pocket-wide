import { useQuery } from '@tanstack/react-query';
import { getCategoriesOverview } from '../../services/dashboard';
import { DateRangePickerValue } from '@tremor/react';

export const useCategoryOverview = ({
  type = 'expenses',
  dateRange,
}: {
  type: 'expenses' | 'incomes';
  dateRange: DateRangePickerValue;
}) => {
  return useQuery({
    queryKey: ['category-overview', { dateRange, type }],
    queryFn: () =>
      getCategoriesOverview({
        dateRange,
        type,
      }),
    keepPreviousData: true,
  });
};
