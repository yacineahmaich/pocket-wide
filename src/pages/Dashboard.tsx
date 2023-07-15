import { Title } from '@tremor/react';
import Stats from '../features/dashboard/Stats';
import PerformanceChart from '../features/dashboard/PerformanceChart';
import Overview from '../features/dashboard/Overview';

function Dashboard() {
  return (
    <div className="py-3">
      <Title className="mb-8 text-center text-gray-400">
        Monthly Performance Dashboard
      </Title>

      <Stats />
      <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-3">
        <PerformanceChart />
        <Overview />
      </div>
    </div>
  );
}

export default Dashboard;
