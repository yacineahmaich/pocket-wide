import Stats from '../features/dashboard/Stats';
import PerformanceChart from '../features/dashboard/PerformanceChart';
import Overview from '../features/dashboard/Overview';
import { Helmet } from 'react-helmet-async';
import Heading from '../features/dashboard/Heading';

function Dashboard() {
  return (
    <div className="py-3">
      <Helmet title="Pocket Wide | Dashboard" />

      <Heading />

      <Stats />
      <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-3">
        <PerformanceChart />
        <Overview />
      </div>
    </div>
  );
}

export default Dashboard;
