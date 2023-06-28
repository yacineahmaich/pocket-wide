import { categories, incomeCategories } from '../utils/constants';

interface Props {
  // categoryKey:
  //   | (typeof categories)[number]
  //   | (typeof incomeCategories)[number]
  //   | undefined;
  categoryKey: string;
  variant?: 'categorySelect' | 'expense';
}

const CategoryIcon = (props: Props) => {
  const { categoryKey, variant = 'categorySelect' } = props;

  const category = categories.find(category => category.key === categoryKey);

  if (!category) return null;

  return (
    <span
      className={`
        mr-2 p-1 rounded-full aspect-square bg-opacity-25 flex items-center justify-center rounded-full',
        ${category.className}
        ${variant === 'categorySelect' ? 'w-8 h-8' : 'w-20 h-20'}
      `}
    >
      <category.Icon
        className={`${variant === 'categorySelect' ? 'w-4 h-4' : 'w-10 h-10'}`}
      />
    </span>
  );
};
export default CategoryIcon;
