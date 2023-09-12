import { useQuery } from '@tanstack/react-query';
import { getCategoriesOverview } from '../../services/dashboard';
import { useFilter } from '../shared/useFilter';
import { useUser } from '../auth/useUser';

export const useCategoryOverview = () => {
  const { user } = useUser();
  const { filter } = useFilter(['from', 'to']);

  return useQuery({
    queryKey: ['category-overview', { filter }],
    queryFn: () =>
      getCategoriesOverview({
        from: filter['from'],
        to: filter['to'],
        currency: user?.user_metadata.currency,
      }),
  });
};
