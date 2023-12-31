import { logout } from '../../services/auth';
import { toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

export const useLogout = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logout,
    retry: false,
    onSuccess: () => {
      queryClient.setQueryData(['user'], null);
      queryClient.removeQueries();
    },
    onError: () => {
      toast.error(t('action-error', { action: t('logout') }));
    },
  });
};
