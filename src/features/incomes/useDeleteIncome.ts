import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { deleteIncome } from '../../services/incomes';

type Vars = {
  id: number;
};

export const useDeleteIncome = (
  options?: UseMutationOptions<unknown, unknown, Vars>
) => {
  return useMutation<unknown, unknown, Vars>({
    mutationFn: deleteIncome,
    ...options,
  });
};
