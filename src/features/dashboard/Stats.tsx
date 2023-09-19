import { useStats } from './useStats';
import Stat from './Stat';
import StatSkeleton from './StatSkeleton';
import { useTranslation } from 'react-i18next';

function Stats() {
  const { t } = useTranslation();
  const { data, isLoading } = useStats();
  const saving = data && data?.incomes.current - data?.expenses.current;
  const savingPrevMonth = data && data?.incomes.prev - data?.expenses.prev;

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {isLoading ? (
        <>
          <StatSkeleton />
          <StatSkeleton />
          <StatSkeleton />
        </>
      ) : (
        <>
          <Stat
            label={t('saving')}
            current={saving ?? 0}
            prev={savingPrevMonth ?? 0}
          />
          <Stat
            label={t('incomes')}
            current={data?.incomes.current ?? 0}
            prev={data?.incomes.prev ?? 0}
          />
          <Stat
            label={t('expenses')}
            current={data?.expenses.current ?? 0}
            prev={data?.expenses.prev ?? 0}
          />
        </>
      )}
    </div>
  );
}

export default Stats;
