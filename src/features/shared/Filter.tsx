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
import { formatDate } from '../../utils/helpers';
import { categories, incomeCategories } from '../../utils/constants';
import CategoryIcon from '../../ui/CategorySelect';
import { useFilter } from './useFilter';
import { useTranslation } from 'react-i18next';

type Props = {
  onFilter?: () => void;
  loading?: boolean;
  type?: 'expense' | 'income';
};

function Filter({ onFilter, loading, type = 'expense' }: Props) {
  const { t } = useTranslation();
  const { filter, setFilter, clearFilter } = useFilter([
    'from',
    'to',
    'search',
    'min-amount',
    'max-amount',
    'category',
    'tag',
  ]);

  const currentDate: DateRangePickerValue = {
    from: filter['from'] ? new Date(filter['from']) : undefined,
    to: filter['to'] ? new Date(filter['to']) : undefined,
  };

  const { register, watch, setValue, handleSubmit, reset } = useForm({
    defaultValues: {
      date: currentDate,
      search: filter['search'],
      minAmount: filter['min-amount'],
      maxAmount: filter['max-amount'],
      category: filter['category'],
      tag: filter['tag'],
    },
  });

  const onSubmit = handleSubmit(
    ({ date, search, minAmount, maxAmount, category, tag }) => {
      setFilter({
        from: formatDate(date.from),
        to: formatDate(date.to),
        search,
        'min-amount': minAmount,
        'max-amount': maxAmount,
        category,
        tag,
      });
      onFilter && onFilter();
    },
  );

  const isFiltered = Object.entries(filter).some(field => field[1]);
  const categoryList = type === 'expense' ? categories : incomeCategories;

  return (
    <section className="max-w-[450px]">
      <form action="" className="space-y-2 lg:space-y-4" onSubmit={onSubmit}>
        <div className="flex items-center justify-between">
          <Button color="blue" size="xs">
            {t('filter')}
          </Button>
          {isFiltered && (
            <Button
              type="button"
              variant="light"
              icon={HiXMark}
              size="xs"
              onClick={() => {
                clearFilter();
                reset({
                  date: {},
                  search: '',
                  category: '',
                  maxAmount: '',
                  minAmount: '',
                  tag: '',
                });
              }}
            >
              {t('clear')}
            </Button>
          )}
        </div>
        <div>
          <Label>{t('date')}</Label>
          <DateRangePicker
            value={watch('date')}
            onValueChange={value => setValue('date', value)}
            defaultValue={{ selectValue: '' }}
            disabled={loading}
          />
        </div>
        <div>
          <Label>{t('search')}</Label>
          <TextInput {...register('search')} disabled={loading} />
        </div>
        <div>
          <Label>{t('min-amount')}</Label>
          <TextInput {...register('minAmount')} disabled={loading} />
        </div>
        <div>
          <Label>{t('max-amount')}</Label>
          <TextInput {...register('maxAmount')} disabled={loading} />
        </div>
        <div>
          <Label>{t('category')}</Label>
          <Select
            id="category"
            value={watch('category')}
            onValueChange={category => setValue('category', category)}
            disabled={loading}
          >
            {categoryList.map(category => {
              const CIcon = () => (
                <CategoryIcon categoryKey={category.key} type={type} />
              );

              return (
                <SelectItem key={category.id} value={category.key} icon={CIcon}>
                  {category.category}
                </SelectItem>
              );
            })}
          </Select>
        </div>
        <div>
          <Label>{t('tag')}</Label>
          <TextInput {...register('tag')} disabled={loading} />
        </div>
      </form>
    </section>
  );
}

export default Filter;
