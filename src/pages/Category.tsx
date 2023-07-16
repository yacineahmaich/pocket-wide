import { Title } from '@tremor/react';
import ExpensesPerCategory from '../features/category/ExpensesPerCategory';
import CategoryChart from '../features/category/CategoryChart';

function Category() {
  return (
    <div>
      <Title className="text-center text-gray-400">Category</Title>

      <ExpensesPerCategory />
      <CategoryChart />
    </div>
  );
}

export default Category;
