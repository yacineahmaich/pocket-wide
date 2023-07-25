import { login } from '../../services/auth';
import { toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: login,
    retry: false,
    onSuccess: ({ user }) => {
      queryClient.setQueryData(['user'], user);
    },
    onError: () => {
      toast.error('Provided email or password are incorrect');
    },
  });
};
