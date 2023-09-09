import { useMutation } from '@tanstack/react-query';
import { updateCurrency } from '../../services/currency';

export const useUpdateCurrency = () =>
  useMutation({
    mutationFn: updateCurrency,
  });
