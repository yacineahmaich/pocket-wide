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
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFrom = searchParams.get('from') || '';
  const currentTo = searchParams.get('to') || '';

  const currentDate: DateRangePickerValue = {
    from: currentFrom ? new Date(currentFrom) : undefined,
    to: currentTo ? new Date(currentTo) : undefined,
  };
  const currentSearch = searchParams.get('search') || '';
  const currentMinAmount = searchParams.get('min-amount') || '';
  const currentMaxAmount = searchParams.get('max-amount') || '';
  const currentCategory = searchParams.get('category') || '';
  const currentTag = searchParams.get('tag') || '';

  const { register, getValues, setValue, handleSubmit, reset, control } =
    useForm({
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

  const onSubmit = handleSubmit(
    ({ date, search, minAmount, maxAmount, category, tag }) => {
      if (date.from) {
        searchParams.set('from', formatDate(date.from));
      } else {
        searchParams.delete('from');
      }
      if (date.to) {
        searchParams.set('to', formatDate(date.to));
      } else {
        searchParams.delete('to');
      }
      if (search) {
        searchParams.set('search', search);
      } else {
        searchParams.delete('search');
      }
      if (minAmount) {
        searchParams.set('min-amount', minAmount);
      } else {
        searchParams.delete('min-amount');
      }
      if (maxAmount) {
        searchParams.set('max-amount', maxAmount);
      } else {
        searchParams.delete('max-amount');
      }
      if (category) {
        searchParams.set('category', category);
      } else {
        searchParams.delete('category');
      }
      if (tag) {
        searchParams.set('tag', tag);
      } else {
        searchParams.delete('tag');
      }

      setSearchParams(searchParams);
    }
  );

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
            defaultValue={getValues('date')}
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
            defaultValue={getValues('category')}
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
