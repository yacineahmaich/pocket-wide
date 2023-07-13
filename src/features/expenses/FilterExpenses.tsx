import {
  Button,
  DateRangePicker,
  DateRangePickerValue,
  Select,
  SelectItem,
  TextInput,
} from '@tremor/react';
import Label from '../../ui/Label';
import { HiXMark } from 'react-icons/hi2';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { useSearchParams } from 'react-router-dom';
import { formatDate } from '../../utils/helpers';
import { categories } from '../../utils/constants';
import CategoryIcon from '../../ui/CategorySelect';

function FilterExpenses() {
  const [seachParams, setSearchParams] = useSearchParams();
  const currentFrom = seachParams.get('from') || '';
  const currentTo = seachParams.get('to') || '';

  const currentDate: DateRangePickerValue = {
    from: currentFrom ? new Date(currentFrom) : undefined,
    to: currentTo ? new Date(currentTo) : undefined,
  };
  const currentSearch = seachParams.get('search') || '';
  const currentMinAmount = seachParams.get('min-amount') || '';
  const currentMaxAmount = seachParams.get('max-amount') || '';
  const currentCategory = seachParams.get('category') || '';
  const currentTag = seachParams.get('tag') || '';

  const { register, watch, setValue, handleSubmit, reset, control } = useForm({
    defaultValues: {
      date: currentDate,
      search: currentSearch,
      minAmount: currentMinAmount,
      maxAmount: currentMaxAmount,
      category: currentCategory,
      tag: currentTag,
    },
  });

  const handleClearFilters = () => {
    setSearchParams('');
    reset();
  };
  console.log('re-rendered');
  const onSubmit = handleSubmit(data => {
    seachParams.set('from', formatDate(data.date.from ?? ''));
    seachParams.set('to', formatDate(data.date.to ?? ''));
    seachParams.set('search', data.search);
    seachParams.set('min-amount', data.minAmount);
    seachParams.set('max-amount', data.maxAmount);
    seachParams.set('category', data.category);
    seachParams.set('tag', data.tag);

    setSearchParams(seachParams);
    console.log(data);
  });

  return (
    <section className="w-1/3 p-8">
      <DevTool control={control} />
      <form action="" className="space-y-4" onSubmit={onSubmit}>
        <div className="flex items-center justify-between">
          <Button color="blue" size="xs">
            Filter
          </Button>
          <Button
            type="button"
            variant="light"
            icon={HiXMark}
            size="xs"
            onClick={handleClearFilters}
          >
            clear
          </Button>
        </div>
        <div>
          <Label>Date</Label>
          <DateRangePicker
            defaultValue={watch('date')}
            onValueChange={value => setValue('date', value)}
          />
        </div>
        <div>
          <Label>Seacrh</Label>
          <TextInput {...register('search')} />
        </div>
        <div>
          <Label>Min Amount</Label>
          <TextInput {...register('minAmount')} />
        </div>
        <div>
          <Label>Max Amount</Label>
          <TextInput {...register('maxAmount')} />
        </div>
        <div>
          <Label>Category</Label>
          <Select
            id="category"
            defaultValue={watch('category')}
            onValueChange={category => {
              console.log(category);
              setValue('category', category);
            }}
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
        <div>
          <Label>Tag</Label>
          <TextInput {...register('tag')} />
        </div>
      </form>
    </section>
  );
}

export default FilterExpenses;
