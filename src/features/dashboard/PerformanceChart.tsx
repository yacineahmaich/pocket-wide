import { useMemo } from 'react';
import { formatCurrency, formatDate } from '../../utils/helpers';
import { AreaChart, Card, Text, Title } from '@tremor/react';
import { usePerformance } from './usePerformance';
import animationData from '../../assets/lottie/chart.json';
import Lottie from 'lottie-react';
import { useFilter } from '../shared/useFilter';

function PerformanceChart() {
  const { filter } = useFilter(['from', 'to']);
  const { data, isLoading } = usePerformance();

  const sortedData = useMemo(() => {
    return data?.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }, [data]);

  const from = filter.from ? `from ${formatDate(filter.from, 'medium')}` : '';
  const to = filter.to ? `to ${formatDate(filter.to, 'medium')}` : '';

  return (
    <Card className="md:col-span-2">
      <Title>{from || to ? `${from} ${to}` : 'All time'}</Title>
      <Text>Expense / income</Text>
      {isLoading ? (
        <Lottie animationData={animationData} />
      ) : (
        <AreaChart
          className="h-96"
          data={sortedData ?? []}
          index="date"
          categories={['expenses', 'incomes']}
          colors={['indigo', 'rose']}
          valueFormatter={value => formatCurrency(value, 'USD')}
        />
      )}
    </Card>
  );
}

export default PerformanceChart;
