import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteIncome } from '../../services/incomes';
import { toast } from 'sonner';

export const useDeleteIncome = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteIncome,
    onSuccess: () => {
      queryClient.invalidateQueries(['incomes']);
      toast.success('income deleted');
    },
  });
};
