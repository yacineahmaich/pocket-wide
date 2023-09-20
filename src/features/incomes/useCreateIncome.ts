import { toast } from 'sonner';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { createIncome } from '../../services/incomes';
import { useTranslation } from 'react-i18next';

export const useCreateIncome = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: createIncome,
    onSuccess: () => {
      queryClient.invalidateQueries(['icomes']);
      navigate('/dashboard/incomes');
      toast.success(
        t('action-success', { action: t('created'), resource: t('income') }),
      );
    },
    onError: () => {
      toast.error(
        t('action-error', { action: t('create'), resource: t('income') }),
      );
    },
  });
};
