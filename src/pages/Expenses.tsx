import { Button, Title } from '@tremor/react';
import ExpensesTable from '../features/expenses/ExpensesTable';
import FilterExpenses from '../features/expenses/FilterExpenses';
import { Link } from 'react-router-dom';
import { FaArrowDown } from 'react-icons/fa';

function Expenses() {
  return (
    <div className="flex divide-x divide-gray-100">
      <FilterExpenses />
      <section className="flex-1 p-6">
        <div className="flex items-center justify-between">
          <Title className="mb-4 text-gray-400">Expenses</Title>
          <Link to="create">
            <Button color="blue" variant="light" size="xs" icon={FaArrowDown}>
              Add Expense
            </Button>
          </Link>
        </div>

        <ExpensesTable />
      </section>
    </div>
  );
}

export default Expenses;
