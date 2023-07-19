import { useMutation } from '@tanstack/react-query';
import { deleteIncome } from '../../services/incomes';

type Vars = {
  id: number;
};

export const useDeleteIncome = () => {
  return useMutation<unknown, unknown, Vars>({
    mutationFn: deleteIncome,
  });
};
