import FilterExpenses from '../features/expenses/FilterExpenses';
import IncomesTable from '../features/incomes/IncomesTable';

function Expenses() {
  return (
    <div className="flex divide-x divide-gray-100">
      <FilterExpenses />
      <IncomesTable />
    </div>
  );
}

export default Expenses;
