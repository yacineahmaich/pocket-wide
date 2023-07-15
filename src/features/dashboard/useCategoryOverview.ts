import { useQuery } from '@tanstack/react-query';
import { getCategoriesOverview } from '../../services/categories';

export const useCategoryOverview = () => {
  return useQuery({
    queryKey: ['category-overview'],
    queryFn: getCategoriesOverview,
  });
};
