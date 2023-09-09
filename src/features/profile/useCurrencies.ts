import { useQuery } from '@tanstack/react-query';
import { getCurrencies } from '../../services/currency';

export const useCurrencies = () =>
  useQuery({ queryKey: ['currencies'], queryFn: getCurrencies });
