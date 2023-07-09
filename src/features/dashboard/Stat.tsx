import { Badge, Card, Metric, Text } from '@tremor/react';
import { FC } from 'react';
import { formatCurrency } from '../../utils/helpers';
import { HiArrowTrendingDown, HiArrowTrendingUp } from 'react-icons/hi2';
type Props = {
  label: string;
  current: number;
  prev: number;
};
const Stat: FC<Props> = ({ current, prev, label }) => {
  const diff = current - prev;

  return (
    <Card>
      <Text>{label}</Text>
      <Metric className="mb-4">{formatCurrency(current ?? 0, 'USD')}</Metric>
      <div className="flex items-center gap-4">
        {current && current > 0 ? (
          <Badge icon={HiArrowTrendingUp} color="green" />
        ) : (
          <Badge icon={HiArrowTrendingDown} color="red" />
        )}
        <small>
          <span className={diff > 0 ? 'text-green-500' : 'text-red-500'}>
            {formatCurrency(Math.abs(diff), 'USD')}
          </span>{' '}
          to previous month
        </small>
      </div>
    </Card>
  );
};

export default Stat;
