import { Badge, Card, Metric, Text } from '@tremor/react';
import { FC } from 'react';
import { formatCurrency } from '../../utils/helpers';
import { HiArrowTrendingDown, HiArrowTrendingUp } from 'react-icons/hi2';
import { useUser } from '../auth/useUser';
import { useTranslation } from 'react-i18next';
type Props = {
  label: string;
  current: number;
  prev: number;
};
const Stat: FC<Props> = ({ current, prev, label }) => {
  const { user } = useUser();
  const { t } = useTranslation();

  const diff = current - prev;
  const currency = user?.user_metadata.currency;

  return (
    <Card>
      <Text>{label}</Text>
      <Metric className="mb-2 lg:mb-4">
        {formatCurrency(current ?? 0, currency)}
      </Metric>
      <div className="flex items-center gap-4">
        {current && current > 0 ? (
          <Badge icon={HiArrowTrendingUp} color="green" />
        ) : (
          <Badge icon={HiArrowTrendingDown} color="red" />
        )}
        <small>
          <span className={diff > 0 ? 'text-green-500' : 'text-red-500'}>
            {formatCurrency(Math.abs(diff), currency)}
          </span>{' '}
          {t('to-previous-month')}
        </small>
      </div>
    </Card>
  );
};

export default Stat;
