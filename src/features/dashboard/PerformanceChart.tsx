import { useMemo } from 'react';
import { formatCurrency } from '../../utils/helpers';
import { AreaChart, Text } from '@tremor/react';
import { usePerformance } from './usePerformance';

function PerformanceChart() {
  const { data } = usePerformance();

  const sortedData = useMemo(() => {
    return data?.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }, [data]);

  return (
    <div className="mt-10">
      <Text>Current Month Performance</Text>
      <AreaChart
        className="h-96"
        data={sortedData ?? []}
        index="date"
        categories={['expenses', 'incomes']}
        colors={['indigo', 'rose']}
        valueFormatter={value => formatCurrency(value, 'USD')}
      />
    </div>
  );
}

export default PerformanceChart;
