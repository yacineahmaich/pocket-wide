import { categories } from '../utils/constants';

interface Props {
  categoryKey: string;
  variant?: 'categorySelect' | 'category';
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
        ${variant === 'categorySelect' && 'w-8 h-8'}
        ${variant === 'category' && 'w-14 h-14'}
      `}
    >
      <category.Icon
        className={`
        ${variant === 'categorySelect' && 'w-10 h-10'}
        ${variant === 'category' && 'w-8 h-8'}
        `}
      />
    </span>
  );
};
export default CategoryIcon;
