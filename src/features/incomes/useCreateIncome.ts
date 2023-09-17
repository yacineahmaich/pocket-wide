import { toast } from 'sonner';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { createIncome } from '../../services/incomes';

export const useCreateIncome = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createIncome,
    onSuccess: () => {
      queryClient.invalidateQueries(['icomes']);
      toast.success('Income create successflly');
      navigate('/dashboard/incomes');
    },
    onError: () => {
      toast.error('Could not create income!');
    },
  });
};
