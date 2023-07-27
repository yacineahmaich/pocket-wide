import {
  DateRangePicker,
  DateRangePickerValue,
  Text,
  Title,
} from '@tremor/react';
import ExpensesPerCategory from '../features/category/ExpensesPerCategory';
import CategoryChart from '../features/category/CategoryChart';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

function Category() {
  const [date, setDate] = useState<DateRangePickerValue>();
  console.log(date);
  const to = new Date(date?.to!);

  const isThesameDay = date?.from?.getTime() === date?.to?.getTime();

  if (isThesameDay) {
    to.setHours(23);
    to.setMinutes(59);
    to.setSeconds(59);
  }

  const selectedDate =
    date?.from && date.to && (isThesameDay ? { ...date, to } : date);

  return (
    <>
      <Helmet title="Pocket Wide | Catgegory" />
      <div>
        <Title className="text-center text-gray-400">Category</Title>
        <div className="flex items-center justify-between mt-10">
          <Text>Expenses Per Category</Text>
          <DateRangePicker value={date} onValueChange={setDate} />
        </div>
        <ExpensesPerCategory date={selectedDate} />
        <CategoryChart date={selectedDate} />
      </div>
    </>
  );
}

export default Category;
