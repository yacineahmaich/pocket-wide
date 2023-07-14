import { Button, Title } from '@tremor/react';
import ExpensesTable from '../features/expenses/ExpensesTable';
import { Link } from 'react-router-dom';
import { FaArrowDown } from 'react-icons/fa';
import Filter from '../features/shared/Filter';

function Expenses() {
  return (
    <div className="flex divide-gray-100 lg:divide-x">
      <Filter />
      <section className="flex-1 p-3 lg:p-6">
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
