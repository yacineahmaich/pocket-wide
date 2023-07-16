import {
  Card,
  DateRangePicker,
  DateRangePickerValue,
  Text,
} from '@tremor/react';
import { useExpensesPerCategory } from './useExpensesPerCategory';
import { categories } from '../../utils/constants';
import CategoryIcon from '../../ui/CategorySelect';
import { formatCurrency } from '../../utils/helpers';
import CategoryCardSekeleton from './CategoryCardSekeleton';
import { useState } from 'react';

function ExpensesPerCategory() {
  const [date, setDate] = useState<DateRangePickerValue>();
  console.log(date);
  const { data, isLoading } = useExpensesPerCategory();

  // calculte total  expenses per each category

  const filteredData =
    date?.from && date.to
      ? data?.filter(exp => {
          const expDate = new Date(exp.date);

          return expDate >= date.from! && expDate <= date.to!;
        })
      : data;

  const expensesPerCategory = filteredData?.reduce((acc, expense) => {
    acc[expense.category] = acc[expense.category]
      ? acc[expense.category] + expense.amount
      : expense.amount;

    return acc;
  }, {} as { [key: string]: number });

  return (
    <section className="my-10">
      <div className="flex items-center justify-between">
        <Text>Expenses Per Category</Text>
        <DateRangePicker value={date} onValueChange={setDate} />
      </div>

      <div className="grid gap-4 my-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {isLoading
          ? Array.from({ length: 4 }, (_, idx) => (
              <CategoryCardSekeleton key={idx} />
            ))
          : categories
              .filter(c => expensesPerCategory?.[c.key])
              .map(category => (
                <Card className="flex" key={category.id}>
                  <CategoryIcon categoryKey={category.key} variant="category" />
                  <div className="flex flex-col ">
                    <Text>{category.category}</Text>
                    <span className="text-lg font-bold text-gray-500">
                      {expensesPerCategory?.[category.key] &&
                        formatCurrency(
                          expensesPerCategory?.[category.key],
                          'USD'
                        )}
                    </span>
                  </div>
                </Card>
              ))}
      </div>
    </section>
  );
}

export default ExpensesPerCategory;
