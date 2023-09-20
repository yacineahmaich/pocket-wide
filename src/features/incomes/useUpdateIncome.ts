import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { updateIncome } from '../../services/incomes';
import { useTranslation } from 'react-i18next';

export const useUpdateIncome = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  return useMutation({
    mutationFn: updateIncome,
    onSuccess: () => {
      queryClient.invalidateQueries(['incomes']);
      navigate('/dashboard/incomes');
      toast.success(
        t('action-success', { action: t('updated'), resource: t('income') }),
      );
    },
    onError() {
      toast.error(
        t('action-error', { action: t('update'), resource: t('income') }),
      );
    },
  });
};
