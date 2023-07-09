import { AreaChart, Text } from '@tremor/react';
import { formatCurrency } from '../../utils/helpers';
import { usePerformance } from './usePerformance';

const chartdata = [
  {
    date: 'Jan 22',
    SemiAnalysis: 2890,
    'The Pragmatic Engineer': 2338,
  },
  {
    date: 'Feb 22',
    SemiAnalysis: 2756,
    'The Pragmatic Engineer': 2103,
  },
  {
    date: 'Mar 22',
    SemiAnalysis: 3322,
    'The Pragmatic Engineer': 2194,
  },
  {
    date: 'Apr 22',
    SemiAnalysis: 3470,
    'The Pragmatic Engineer': 2108,
  },
  {
    date: 'May 22',
    SemiAnalysis: 3475,
    'The Pragmatic Engineer': 1812,
  },
  {
    date: 'Jun 22',
    SemiAnalysis: 3129,
    'The Pragmatic Engineer': 1726,
  },
];

function PerformanceChart() {
  const { data } = usePerformance();

  console.log(data);

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
