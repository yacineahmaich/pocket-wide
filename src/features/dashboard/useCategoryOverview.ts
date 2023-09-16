import { useQuery } from '@tanstack/react-query';
import { getCategoriesOverview } from '../../services/dashboard';
import { useUser } from '../auth/useUser';
import { DateRangePickerValue } from '@tremor/react';

export const useCategoryOverview = ({
  type = 'expenses',
  dateRange,
}: {
  type: 'expenses' | 'incomes';
  dateRange: DateRangePickerValue;
}) => {
  const { user } = useUser();

  return useQuery({
    queryKey: ['category-overview', { dateRange, type }],
    queryFn: () =>
      getCategoriesOverview({
        dateRange,
        currency: user?.user_metadata.currency,
        type,
      }),
    keepPreviousData: true,
  });
};
