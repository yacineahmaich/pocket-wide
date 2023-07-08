import { Title } from '@tremor/react';
import Stats from '../features/dashboard/Stats';

function Dashboard() {
  return (
    <div className="py-3">
      <Title className="mb-8 text-center text-gray-400">
        Monthly Performance Dashboard
      </Title>

      <Stats />
    </div>
  );
}

export default Dashboard;
