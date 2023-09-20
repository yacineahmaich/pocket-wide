import {
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
import { useTranslation } from 'react-i18next';
import { useUser } from '../auth/useUser';

type Props = {
  date: DateRangePickerValue | undefined;
};

function CategoryChart({ date }: Props) {
  const { user } = useUser();
  const { t } = useTranslation();
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

  const validCategories = [...new Set(data?.map(exp => exp.category))];
  const filteredCategories = categories.filter(c =>
    validCategories.includes(c.key),
  );

  return (
    <section>
      <div className="flex items-center justify-between">
        <Text>{t('select-category')}</Text>

        <Select
          id="category"
          value={selected}
          onValueChange={setSelected}
          className="w-80"
          placeholder="Select Category"
        >
          {filteredCategories.map(category => {
            const CIcon = () => <CategoryIcon categoryKey={category.key} />;

            return (
              <SelectItem key={category.id} value={category.key} icon={CIcon}>
                {category.category}
              </SelectItem>
            );
          })}
        </Select>
      </div>

      <div className="my-6 min-h-[400px]">
        {selectedCategory ? (
          <LineChart
            className="mt-6"
            data={categoryExpenses ?? []}
            index="date"
            categories={['value']}
            colors={['blue']}
            valueFormatter={value =>
              formatCurrency(value, user?.user_metadata.currency || 'USD')
            }
            yAxisWidth={40}
          />
        ) : (
          <div className="mt-20 space-y-3 text-center">
            <Title>{t('select-category')}</Title>
            <Text className="mx-auto max-w-sm">
              {t('no-category-selected')}
            </Text>
          </div>
        )}
      </div>
    </section>
  );
}

export default CategoryChart;
