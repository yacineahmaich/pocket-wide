import { Title } from '@tremor/react';
import { Helmet } from 'react-helmet-async';
import DashboardHeading from '../features/dashboard/DashboardHeading';
import Overview from '../features/dashboard/Overview';
import PerformanceChart from '../features/dashboard/PerformanceChart';
import Stats from '../features/dashboard/Stats';

function Dashboard() {
  return (
    <div className="py-3">
      <Helmet title="Pocket Wide | Dashboard" />
      <Title className="text-center text-gray-400 mb-8">
        Monthly Performance Dashboard
      </Title>
      <Stats />

      <DashboardHeading />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <PerformanceChart />
        <Overview />
      </div>
    </div>
  );
}

export default Dashboard;
