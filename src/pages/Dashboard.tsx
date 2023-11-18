import { DateRangePicker, DateRangePickerValue, Title } from '@tremor/react';
import { Helmet } from 'react-helmet-async';
import Overview from '../features/dashboard/Overview';
import PerformanceChart from '../features/dashboard/PerformanceChart';
import Stats from '../features/dashboard/Stats';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Dashboard() {
  const { t } = useTranslation();
  const [dateRange, setDateRange] = useState<DateRangePickerValue>({
    from: new Date('01, 01, 2023'),
    to: new Date(),
  });

  return (
    <>
      <Helmet title={`Pocket Wide | ${t('dashboard-page-title')}`} />
      <div className="py-3">
        <Title className="mb-8 text-center text-gray-400">
          {t('monthly-performance-dashboard')}
        </Title>
        <Stats />

        <div className="my-10 flex items-center justify-end">
          <DateRangePicker value={dateRange} onValueChange={setDateRange} />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <PerformanceChart dateRange={dateRange} />
          <Overview dateRange={dateRange} />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
