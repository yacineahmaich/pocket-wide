import { Card, Text } from '@tremor/react';
import { useExpensesPerCategory } from './useExpensesPerCategory';
import { categories } from '../../utils/constants';
import CategoryIcon from '../../ui/CategorySelect';
import { formatCurrency } from '../../utils/helpers';

function ExpensesPerCategory() {
  const { data } = useExpensesPerCategory();

  return (
    <section className="my-10">
      <Text>Expenses Per Category</Text>

      <div className="grid grid-cols-4 gap-4 my-6">
        {categories
          .filter(c => data?.[c.key])
          .map(category => (
            <Card className="flex">
              <CategoryIcon categoryKey={category.key} variant="category" />
              <div className="">
                <Text>{category.category}</Text>
                <span className="text-lg font-bold text-gray-500">
                  {data?.[category.key] &&
                    formatCurrency(data?.[category.key], 'USD')}
                </span>
              </div>
            </Card>
          ))}
      </div>
    </section>
  );
}

export default ExpensesPerCategory;
