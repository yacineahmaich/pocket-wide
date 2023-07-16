import { useMemo } from 'react';
import { formatCurrency } from '../../utils/helpers';
import { AreaChart, Card, Text, Title } from '@tremor/react';
import { usePerformance } from './usePerformance';
import animationData from '../../assets/lottie/chart.json';
import Lottie from 'lottie-react';

function PerformanceChart() {
  const { data, isLoading } = usePerformance();

  const sortedData = useMemo(() => {
    return data?.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }, [data]);

  return (
    <Card className="md:col-span-2">
      <Title>Current Month</Title>
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
