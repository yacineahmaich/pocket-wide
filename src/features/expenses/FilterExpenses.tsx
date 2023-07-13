import {
  Button,
  DateRangePicker,
  DateRangePickerValue,
  TextInput,
} from '@tremor/react';
import Label from '../../ui/Label';
import { HiXMark } from 'react-icons/hi2';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { useSearchParams } from 'react-router-dom';
import { formatDate } from '../../utils/helpers';

function FilterExpenses() {
  const [seachParams, setSearchParams] = useSearchParams();
  const { register, watch, setValue, handleSubmit, control } = useForm({
    defaultValues: {
      date: {} as DateRangePickerValue,
      search: '',
      minAmount: '',
      maxAmount: '',
      category: '',
      tag: '',
    },
  });

  const onSubmit = handleSubmit(data => {
    seachParams.set('from', formatDate(data.date.from ?? ''));
    seachParams.set('to', formatDate(data.date.to ?? ''));
    seachParams.set('seacrh', data.search);
    seachParams.set('min-amount', data.minAmount);
    seachParams.set('max-amount', data.maxAmount);
    seachParams.set('cat', data.category);
    seachParams.set('tag', data.tag);

    setSearchParams(seachParams);
  });

  return (
    <section className="w-1/3 p-8">
      <DevTool control={control} />
      <form action="" className="space-y-4" onSubmit={onSubmit}>
        <div className="flex items-center justify-between">
          <Button color="blue" size="xs">
            Filter
          </Button>
          <Button variant="light" icon={HiXMark} size="xs">
            clear
          </Button>
        </div>
        <div>
          <Label>Date</Label>
          <DateRangePicker
            value={watch('date')}
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
          <TextInput {...register('category')} />
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
