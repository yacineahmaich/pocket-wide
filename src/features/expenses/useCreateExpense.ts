import { toast } from 'sonner';
import { createExpense } from '../../services/expenses';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const useCreateExpense = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: createExpense,
    onSuccess: () => {
      queryClient.invalidateQueries(['expenses']);
      toast.success(
        t('action-success', { resource: t('expense'), action: t('created') }),
      );
      navigate('/dashboard/expenses');
    },
    onError: () => {
      toast.error(
        t('action-error', { action: t('create'), resource: t('expense') }),
      );
    },
  });
};
