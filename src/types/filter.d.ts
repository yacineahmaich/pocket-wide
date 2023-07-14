import { DateRangePickerValue } from '@tremor/react';

interface Filters {
  date: DateRangePickerValue;
  search: string;
  minAmount: string;
  maxAmount: string;
  category: string;
  tag: string;
}
