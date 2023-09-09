import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateProfile } from '../../services/profile';
import { toast } from 'sonner';

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProfile,
    onError: () => {
      toast.error('Could not update profile');
    },
    onSuccess: user => {
      if (!user) return;

      queryClient.setQueryData(['user'], user);
      toast.success('Profile updated');
    },
  });
};
