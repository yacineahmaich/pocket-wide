import { Card, Text } from '@tremor/react';
import { useExpensesPerCategory } from './useExpensesPerCategory';
import { categories } from '../../utils/constants';
import CategoryIcon from '../../ui/CategorySelect';
import { formatCurrency } from '../../utils/helpers';
import CategoryCardSekeleton from './CategoryCardSekeleton';

function ExpensesPerCategory() {
  const { data, isLoading } = useExpensesPerCategory();

  return (
    <section className="my-10">
      <Text>Expenses Per Category</Text>

      <div className="grid gap-4 my-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {isLoading ? (
          <>
            <CategoryCardSekeleton />
            <CategoryCardSekeleton />
            <CategoryCardSekeleton />
            <CategoryCardSekeleton />
          </>
        ) : (
          categories
            .filter(c => data?.[c.key])
            .map(category => (
              <Card className="flex">
                <CategoryIcon categoryKey={category.key} variant="category" />
                <div className="flex flex-col ">
                  <Text>{category.category}</Text>
                  <span className="text-lg font-bold text-gray-500">
                    {data?.[category.key] &&
                      formatCurrency(data?.[category.key], 'USD')}
                  </span>
                </div>
              </Card>
            ))
        )}
      </div>
    </section>
  );
}

export default ExpensesPerCategory;
