import { categories, incomeCategories } from '../utils/constants';

interface Props {
  categoryKey: string;
  variant?: 'categorySelect' | 'category';
  type?: 'expense' | 'income';
}

const CategoryIcon = (props: Props) => {
  const { categoryKey, variant = 'categorySelect', type = 'expense' } = props;

  const categoriesList = type === 'expense' ? categories : incomeCategories;

  const category = categoriesList.find(
    category => category.key === categoryKey,
  );

  if (!category) return null;

  return (
    <span
      className={`
        rounded-full', mr-2 flex aspect-square items-center justify-center rounded-full bg-opacity-25 p-1
        ${category.className}
        ${variant === 'categorySelect' && 'h-8 w-8'}
        ${variant === 'category' && 'h-14 w-14'}
      `}
    >
      <category.Icon
        className={`
        ${variant === 'categorySelect' && 'h-10 w-10'}
        ${variant === 'category' && 'h-8 w-8'}
        `}
      />
    </span>
  );
};
export default CategoryIcon;
