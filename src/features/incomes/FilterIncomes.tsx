import { Button, DateRangePicker, TextInput } from '@tremor/react';
import Label from '../../ui/Label';
import { HiXMark } from 'react-icons/hi2';

function FilterIncomes() {
  return (
    <section className="w-1/3 p-8">
      <form action="" className="space-y-4">
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
          <DateRangePicker />
        </div>
        <div>
          <Label>Seacrh</Label>
          <TextInput />
        </div>
        <div>
          <Label>Min Amount</Label>
          <TextInput />
        </div>
        <div>
          <Label>Max Amount</Label>
          <TextInput />
        </div>
        <div>
          <Label>Category</Label>
          <TextInput />
        </div>
        <div>
          <Label>Tag</Label>
          <TextInput />
        </div>
      </form>
    </section>
  );
}

export default FilterIncomes;
