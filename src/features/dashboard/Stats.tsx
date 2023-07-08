import { useStats } from './useStats';
import Stat from './Stat';

function Stats() {
  const { data, isLoading } = useStats();
  const saving = data && data?.incomes.current - data?.expenses.current;
  const savingPrevMonth = data && data?.incomes.prev - data?.expenses.prev;

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="grid grid-cols-3 gap-6">
      <Stat label="saving" current={saving ?? 0} prev={savingPrevMonth ?? 0} />
      <Stat
        label="Incomes"
        current={data?.incomes.current ?? 0}
        prev={data?.incomes.prev ?? 0}
      />
      <Stat
        label="Expenses"
        current={data?.expenses.current ?? 0}
        prev={data?.expenses.prev ?? 0}
      />
    </div>
  );
}

export default Stats;
