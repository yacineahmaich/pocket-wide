import { useMutation } from '@tanstack/react-query';
import { resetPassword } from '../../services/auth';

export const useResetPassword = () => {
  return useMutation({
    mutationFn: resetPassword,
  });
};
