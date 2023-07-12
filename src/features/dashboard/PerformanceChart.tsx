import { AreaChart, Text } from '@tremor/react';
import { formatCurrency } from '../../utils/helpers';
import { usePerformance } from './usePerformance';

function PerformanceChart() {
  const { data } = usePerformance();

  return (
    <div className="mt-10">
      <Text>Current Month Performance</Text>
      <AreaChart
        className="h-96"
        data={data ?? []}
        index="date"
        categories={['expenses', 'incomes']}
        colors={['indigo', 'rose']}
        valueFormatter={value => formatCurrency(value, 'USD')}
      />
    </div>
  );
}

export default PerformanceChart;
