import { login } from '../../services/auth';
import { toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

export const useLogin = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: login,
    retry: false,
    onSuccess: ({ user }) => {
      queryClient.setQueryData(['user'], user);
    },
    onError: () => {
      toast.error(t('login-error'));
    },
  });
};
