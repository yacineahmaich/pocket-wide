import { useMutation, useQueryClient } from '@tanstack/react-query';
import { removeProfile } from '../../services/profile';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';

export const useRemoveProfile = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: removeProfile,
    onSuccess: user => {
      if (!user) return;

      queryClient.setQueryData(['user'], user);
      toast.success(
        t('action-success', { action: t('deleted'), resource: t('profile') }),
      );
    },
    onError: () => {
      toast.error(
        t('action-error', { action: t('delete'), resource: t('profile') }),
      );
    },
  });
};
