import { useMutation } from '@tanstack/react-query';
import { updatePassword } from '../../services/profile';
import { toast } from 'sonner';

export const useUpdatePassword = () =>
  useMutation({
    mutationFn: updatePassword,
    onError() {
      toast.error('Could not update password');
    },
    onSuccess() {
      toast.success('password updated');
    },
  });
