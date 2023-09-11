import { DateRangePicker, DateRangePickerValue, Title } from '@tremor/react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { formatDate } from '../../utils/helpers';

function Heading() {
  const [searchParams, setSearchParams] = useSearchParams();
  const from = searchParams.get('from');
  const to = searchParams.get('to');

  const currentDateRange: DateRangePickerValue = {
    from: from ? new Date(from) : undefined,
    to: to ? new Date(to) : undefined,
  };
  const [dateRange, setDateRange] =
    useState<DateRangePickerValue>(currentDateRange);

  const handleDateChange = (date: DateRangePickerValue) => {
    if (date.from) {
      searchParams.set('from', formatDate(date.from) || '');
    } else {
      searchParams.delete('from');
    }
    if (date.to) {
      searchParams.set('to', formatDate(date.to) || '');
    } else {
      searchParams.delete('to');
    }
    setSearchParams(searchParams);
    setDateRange(date);
  };

  return (
    <div className="flex justify-between items-center mb-8">
      <Title className="text-center text-gray-400">
        Monthly Performance Dashboard
      </Title>
      <DateRangePicker
        value={dateRange}
        onValueChange={handleDateChange}
        defaultValue={{ selectValue: '' }}
      />
    </div>
  );
}

export default Heading;
