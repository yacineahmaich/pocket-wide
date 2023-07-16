import { useQuery } from '@tanstack/react-query';
import { getCategoriesOverview } from '../../services/dashboard';

export const useCategoryOverview = () => {
  return useQuery({
    queryKey: ['category-overview'],
    queryFn: getCategoriesOverview,
  });
};
