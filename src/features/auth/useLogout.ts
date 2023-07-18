import { logout } from '../../services/auth';
import { toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logout,
    retry: false,
    onSuccess: () => {
      queryClient.setQueryData(['user'], null);
      queryClient.removeQueries();
    },
    onError: () => {
      toast.error('Could not logout!');
    },
  });
};
