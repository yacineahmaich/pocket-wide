import { signup } from '../../services/auth';
import { toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';

export const useSignup = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: signup,
    retry: false,
    onSuccess: ({ user }) => {
      queryClient.setQueryData(['user'], user);
    },
    onError: (err: Error) => toast.error(err?.message),
  });
};
