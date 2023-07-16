import {
  Card,
  DateRangePickerValue,
  LineChart,
  Select,
  SelectItem,
  Text,
  Title,
} from '@tremor/react';
import CategoryIcon from '../../ui/CategorySelect';
import { categories } from '../../utils/constants';
import { useState } from 'react';
import { useAllExpenses } from './useAllExpenses';
import { formatCurrency } from '../../utils/helpers';

type Props = {
  date: DateRangePickerValue | undefined;
};

function CategoryChart({ date }: Props) {
  const [selected, setSelected] = useState('');

  const selectedCategory = categories.find(c => c.key === selected);

  const { data } = useAllExpenses();

  const categoryExpenses = data
    ?.filter(exp => {
      const isInSelectedCtagoey = exp.category === selectedCategory?.key;

      const expDate = new Date(exp.date);
      const isInSelectedDateRange = date
        ? expDate >= date?.from! && expDate <= date?.to!
        : true;

      return isInSelectedCtagoey && isInSelectedDateRange;
    })
    .map(exp => ({ date: exp.date, value: exp.amount }));

  return (
    <section>
      <div className="flex items-center justify-between">
        <Text>Select Category</Text>

        <Select
          id="category"
          value={selected}
          onValueChange={setSelected}
          className="w-80"
          placeholder="Select Category"
        >
          {categories.map(category => {
            const CIcon = () => <CategoryIcon categoryKey={category.key} />;

            return (
              <SelectItem key={category.id} value={category.key} icon={CIcon}>
                {category.category}
              </SelectItem>
            );
          })}
        </Select>
      </div>

      <div className="min-h-[400px] my-6">
        {selectedCategory ? (
          <LineChart
            className="mt-6"
            data={categoryExpenses ?? []}
            index="year"
            categories={['value']}
            colors={['emerald', 'gray']}
            valueFormatter={value => formatCurrency(value, 'USD')}
            yAxisWidth={40}
          />
        ) : (
          <div className="mt-20 space-y-3 text-center">
            <Title>Select a category</Title>
            <Text className="max-w-sm mx-auto">
              No category selected. Please choose a category from the dropdown
              to view the corresponding chart.
            </Text>
          </div>
        )}
      </div>
    </section>
  );
}

export default CategoryChart;
