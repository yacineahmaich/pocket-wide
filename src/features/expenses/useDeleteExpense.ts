import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteExpense } from '../../services/expenses';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';

export const useDeleteExpense = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: deleteExpense,
    onSuccess() {
      queryClient.invalidateQueries(['expenses']);
      toast.success(
        t('action-success', { resource: t('expense'), action: t('deleted') }),
      );
    },
    onError() {
      toast.error(
        t('action-error', { action: t('delete'), resource: t('expense') }),
      );
    },
  });
};
