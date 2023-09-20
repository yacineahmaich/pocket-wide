import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateCurrency } from '../../services/currency';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';

export const useUpdateCurrency = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: updateCurrency,
    onSuccess(user) {
      if (!user) return;

      queryClient.setQueryData(['user'], user);
      toast.success(
        t('action-success', { action: t('updated'), resource: t('currency') }),
      );
    },
    onError() {
      toast.error(
        t('action-error', { action: t('update'), resource: t('currency') }),
      );
    },
  });
};
