import { Button, Title } from '@tremor/react';
import IncomesTable from '../features/incomes/IncomesTable';
import { Link } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';
import Filter from '../features/shared/Filter';

function Expenses() {
  return (
    <div className="flex divide-x divide-gray-100">
      <Filter />
      <section className="flex-1 p-6">
        <div className="flex items-center justify-between">
          <Title className="mb-4 text-gray-400">Incomes</Title>
          <Link to="create">
            <Button color="blue" variant="light" size="xs" icon={FaArrowUp}>
              Add Income
            </Button>
          </Link>
        </div>
        <IncomesTable />
      </section>
    </div>
  );
}

export default Expenses;
