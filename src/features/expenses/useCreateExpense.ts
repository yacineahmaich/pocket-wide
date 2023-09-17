import { toast } from 'sonner';
import { createExpense } from '../../services/expenses';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useCreateExpense = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createExpense,
    onSuccess: () => {
      queryClient.invalidateQueries(['expenses']);
      toast.success('Expense create successflly');
      navigate('/dashboard/expenses');
    },
    onError: () => {
      toast.error('Could not create expense!');
    },
  });
};
