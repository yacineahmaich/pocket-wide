import { DateRangePicker, DateRangePickerValue, Title } from '@tremor/react';
import { formatDate } from '../../utils/helpers';
import { useFilter } from '../shared/useFilter';

function DashboardHeading() {
  const { filter, setFilter } = useFilter(['from', 'to']);

  const currentDateRange: DateRangePickerValue = {
    from: filter['from'] ? new Date(filter['from']) : undefined,
    to: filter['to'] ? new Date(filter['to']) : undefined,
  };

  return (
    <div className="my-10 flex items-center justify-between">
      <Title className="text-center text-gray-400">
        Monitor your expenses
      </Title>
      <DateRangePicker
        value={currentDateRange}
        onValueChange={date =>
          setFilter({
            from: formatDate(date.from),
            to: formatDate(date.to),
          })
        }
      />
    </div>
  );
}

export default DashboardHeading;
