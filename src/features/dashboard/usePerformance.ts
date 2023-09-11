import { useQuery } from '@tanstack/react-query';
import { getPerformance } from '../../services/dashboard';
import { useFilter } from '../shared/useFilter';

export const usePerformance = () => {
  const { filter } = useFilter(['from', 'to']);

  return useQuery({
    queryKey: ['performance', { filter }],
    queryFn: () =>
      getPerformance({
        from: filter['from'],
        to: filter['to'],
      }),
  });
};
