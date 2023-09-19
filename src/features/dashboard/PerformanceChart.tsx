import { useMemo } from 'react';
import { formatCurrency, formatDate } from '../../utils/helpers';
import {
  AreaChart,
  Card,
  DateRangePickerValue,
  Text,
  Title,
} from '@tremor/react';
import { usePerformance } from './usePerformance';
import animationData from '../../assets/lottie/chart.json';
import Lottie from 'lottie-react';
import { useUser } from '../auth/useUser';
import { useTranslation } from 'react-i18next';

function PerformanceChart({ dateRange }: { dateRange: DateRangePickerValue }) {
  const { user } = useUser();
  const { data, isLoading } = usePerformance(dateRange);
  const { t } = useTranslation();

  const sortedData = useMemo(() => {
    return data?.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );
  }, [data]);

  const from = dateRange.from
    ? `${t('from')} ${formatDate(dateRange.from, 'medium')}`
    : '';
  const to = dateRange.to
    ? `${t('to')} ${formatDate(dateRange.to, 'medium')}`
    : '';

  return (
    <Card className="h-fit md:col-span-2">
      <Title>{from || to ? `${from} ${to}` : t('all-time')}</Title>
      <Text>Expense / income</Text>
      {isLoading ? (
        <Lottie animationData={animationData} className="h-[400px]" />
      ) : (
        <AreaChart
          className="h-96"
          data={sortedData ?? []}
          index="date"
          categories={['expenses', 'incomes']}
          colors={['indigo', 'rose']}
          valueFormatter={value =>
            formatCurrency(value, user?.user_metadata.currency)
          }
        />
      )}
    </Card>
  );
}

export default PerformanceChart;
