import { useQuery } from '@tanstack/react-query';
import { getPerformance } from '../../services/dashboard';
import { DateRangePickerValue } from '@tremor/react';

export const usePerformance = (dateRange: DateRangePickerValue) =>
  useQuery({
    queryKey: ['performance', { dateRange }],
    queryFn: () => getPerformance(dateRange),
    keepPreviousData: true,
  });
