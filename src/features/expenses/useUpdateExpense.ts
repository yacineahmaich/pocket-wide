import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateExpense } from '../../services/expenses';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';

export const useUpdateExpense = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: updateExpense,
    onSuccess() {
      queryClient.invalidateQueries(['expenses']);
      navigate('/dashboard/expenses');
      toast.success(
        t('action-success', { action: t('updated'), resource: t('expense') }),
      );
    },
    onError() {
      toast.error(
        t('action-error', { action: t('update'), resource: t('expense') }),
      );
    },
  });
};
