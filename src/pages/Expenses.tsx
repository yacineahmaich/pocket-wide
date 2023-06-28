import ExpensesTable from '../features/expenses/ExpensesTable';
import FilterExpenses from '../features/expenses/FilterExpenses';

function Expenses() {
  return (
    <div className="flex divide-x divide-gray-100">
      {/* filters */}
      <FilterExpenses />
      <ExpensesTable />
    </div>
  );
}

export default Expenses;
