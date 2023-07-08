import { useQuery } from '@tanstack/react-query';
import { getStats } from '../../services/dashboard';

export const useStats = () => {
  return useQuery({
    queryKey: ['stats'],
    queryFn: getStats,
  });
};
