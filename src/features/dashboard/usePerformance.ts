import { useQuery } from '@tanstack/react-query';
import { getPerformance } from '../../services/dashboard';

export const usePerformance = () => {
  return useQuery({
    queryKey: ['performance'],
    queryFn: getPerformance,
  });
};
