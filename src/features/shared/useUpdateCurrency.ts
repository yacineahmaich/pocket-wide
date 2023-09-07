import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateCurrency } from '../../services/currency';
import { useCurrencyModal } from '../../ui/CurrencyModalProvider';

export const useUpdateCurrency = () => {
  const queryClient = useQueryClient();
  const { closeCurrencyModal } = useCurrencyModal();

  return useMutation({
    mutationFn: updateCurrency,
    onSuccess() {
      closeCurrencyModal();
      return queryClient.invalidateQueries(['user']);
    },
  });
};
