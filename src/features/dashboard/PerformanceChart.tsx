import { useMemo } from 'react';
import { formatCurrency } from '../../utils/helpers';
import { AreaChart, Card, Text, Title } from '@tremor/react';
import { usePerformance } from './usePerformance';

function PerformanceChart() {
  const { data } = usePerformance();

  const sortedData = useMemo(() => {
    return data?.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }, [data]);

  return (
    <Card className="col-span-2">
      <Title>Current Month</Title>
      <Text>Expense / income</Text>
      <AreaChart
        className="h-96"
        data={sortedData ?? []}
        index="date"
        categories={['expenses', 'incomes']}
        colors={['indigo', 'rose']}
        valueFormatter={value => formatCurrency(value, 'USD')}
      />
    </Card>
  );
}

export default PerformanceChart;
