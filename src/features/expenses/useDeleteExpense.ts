import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteExpense } from '../../services/expenses';
import { toast } from 'sonner';

export const useDeleteExpense = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteExpense,
    onSuccess: () => {
      queryClient.invalidateQueries(['expenses']);
      toast.success('expense deleted');
    },
  });
};
