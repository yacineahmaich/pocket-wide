import { useQuery } from '@tanstack/react-query';
import { getCategoriesOverview } from '../../services/dashboard';
import { useFilter } from '../shared/useFilter';

export const useCategoryOverview = () => {
  const { filter } = useFilter(['from', 'to']);

  return useQuery({
    queryKey: ['category-overview', { filter }],
    queryFn: () =>
      getCategoriesOverview({
        from: filter['from'],
        to: filter['to'],
      }),
  });
};
