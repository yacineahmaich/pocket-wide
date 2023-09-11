import { DateRangePicker, DateRangePickerValue, Title } from '@tremor/react';
import { useState } from 'react';

function Heading() {
  const [dateRange, setDateRange] = useState<DateRangePickerValue>();

  return (
    <div className="flex justify-between items-center mb-8">
      <Title className="text-center text-gray-400">
        Monthly Performance Dashboard
      </Title>
      <DateRangePicker value={dateRange} onValueChange={setDateRange} />
    </div>
  );
}

export default Heading;
