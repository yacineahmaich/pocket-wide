import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateCurrency } from '../../services/currency';
import { toast } from 'sonner';

export const useUpdateCurrency = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateCurrency,
    onError() {
      toast.error('Could not update currency');
    },
    onSuccess(user) {
      if (!user) return;

      queryClient.setQueryData(['user'], user);
      toast.success('Currency updated');
    },
  });
};
