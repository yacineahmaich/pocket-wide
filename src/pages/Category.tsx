import {
  DateRangePicker,
  DateRangePickerValue,
  Text,
  Title,
} from '@tremor/react';
import ExpensesPerCategory from '../features/category/ExpensesPerCategory';
import CategoryChart from '../features/category/CategoryChart';
import { useState } from 'react';

function Category() {
  const [date, setDate] = useState<DateRangePickerValue>();

  return (
    <div>
      <Title className="text-center text-gray-400">Category</Title>
      <div className="flex items-center justify-between mt-10">
        <Text>Expenses Per Category</Text>
        <DateRangePicker value={date} onValueChange={setDate} />
      </div>
      <ExpensesPerCategory date={date} />
      <CategoryChart date={date} />
    </div>
  );
}

export default Category;
