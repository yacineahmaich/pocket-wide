import { useMutation } from '@tanstack/react-query';
import { deleteExpense } from '../../services/expenses';

type Vars = {
  id: number;
};

export const useDeleteExpense = () => {
  return useMutation<unknown, unknown, Vars>({
    mutationFn: deleteExpense,
  });
};
