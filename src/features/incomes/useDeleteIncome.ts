import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteIncome } from '../../services/incomes';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';

export const useDeleteIncome = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: deleteIncome,
    onSuccess: () => {
      queryClient.invalidateQueries(['incomes']);
      toast.success(
        t('action-success', { action: t('deleted'), resource: t('income') }),
      );
    },
    onError() {
      toast.error(
        t('action-error', { action: t('delete'), resource: t('income') }),
      );
    },
  });
};
