import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { deleteExpense } from '../../services/expenses';

type Vars = {
  id: number;
};

export const useDeleteExpense = (
  options?: UseMutationOptions<unknown, unknown, Vars>
) => {
  return useMutation<unknown, unknown, Vars>({
    mutationFn: deleteExpense,
    ...options,
  });
};
