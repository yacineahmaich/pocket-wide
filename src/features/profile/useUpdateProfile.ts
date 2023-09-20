import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateProfile } from '../../services/profile';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: updateProfile,
    onSuccess: user => {
      if (!user) return;

      queryClient.setQueryData(['user'], user);
      toast.success(
        t('action-success', { action: t('updated'), resource: t('profile') }),
      );
    },
    onError: () => {
      toast.error(
        t('action-error', { action: t('update'), resource: t('profile') }),
      );
    },
  });
};
