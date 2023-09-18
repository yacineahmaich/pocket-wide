import { useMutation, useQueryClient } from '@tanstack/react-query';
import { removeProfile } from '../../services/profile';
import { toast } from 'sonner';

export const useRemoveProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removeProfile,
    onError: () => {
      toast.error('Could not remove profile');
    },
    onSuccess: user => {
      if (!user) return;

      queryClient.setQueryData(['user'], user);
      toast.success('Profile removed');
    },
  });
};
