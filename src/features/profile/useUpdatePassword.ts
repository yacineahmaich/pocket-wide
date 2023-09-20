import { useMutation } from '@tanstack/react-query';
import { updatePassword } from '../../services/profile';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';

export const useUpdatePassword = () => {
  const { t } = useTranslation();

  return useMutation({
    mutationFn: updatePassword,
    onSuccess() {
      toast.success(
        t('action-success', { action: t('updated'), resource: t('password') }),
      );
    },
    onError() {
      toast.error(
        t('action-error', { action: t('update'), resource: t('password') }),
      );
    },
  });
};
