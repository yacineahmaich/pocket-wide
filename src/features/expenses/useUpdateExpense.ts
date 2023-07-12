import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateExpense } from '../../services/expenses';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export const useUpdateExpense = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateExpense,
    onSuccess: () => {
      queryClient.invalidateQueries(['expenses']);
      navigate('/expenses');
      toast.success('expense updated succefully');
    },
  });
};
