import { Title } from '@tremor/react';
import ExpensesPerCategory from '../features/category/ExpensesPerCategory';

function Category() {
  return (
    <div>
      <Title className="text-center text-gray-400">Category</Title>

      <ExpensesPerCategory />
    </div>
  );
}

export default Category;
