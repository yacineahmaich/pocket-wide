import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateProfile } from '../../services/profile';

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProfile,
    onSuccess: user => {
      if (!user) return;

      queryClient.setQueryData(['user'], user);
    },
  });
};
