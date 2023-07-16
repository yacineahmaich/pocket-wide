import { Select, SelectItem, Text } from '@tremor/react';
import CategoryIcon from '../../ui/CategorySelect';
import { categories } from '../../utils/constants';
import { useState } from 'react';

function CategoryChart() {
  const [selected, setSelected] = useState('');

  const selectedCategory = categories.find(c => c.key === selected);

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
    </section>
  );
}

export default CategoryChart;
