import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { updateIncome } from '../../services/incomes';

export const useUpdateIncome = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateIncome,
    onSuccess: () => {
      queryClient.invalidateQueries(['incomes']);
      navigate('/dashboard/incomes');
      toast.success('income updated succefully');
    },
  });
};
