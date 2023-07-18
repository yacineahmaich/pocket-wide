import { useQuery } from '@tanstack/react-query';
import { getUser } from '../../services/auth';

export const useUser = () => {
  const { data: user, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
    staleTime: Infinity,
    retry: false,
    onSuccess: () => {
      document.body.style.overflow = 'auto';
      document.querySelector('.loader')?.remove();
    },
  });

  const isAuthenticated = user?.role === 'authenticated';

  return { isLoading, user, isAuthenticated };
};
