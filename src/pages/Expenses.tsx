import { Button, Icon, Title } from '@tremor/react';
import ExpensesTable from '../features/expenses/ExpensesTable';
import { Link } from 'react-router-dom';
import { FaArrowDown, FaPen, FaSlidersH } from 'react-icons/fa';
import Filter from '../features/shared/Filter';
import MobileFilter from '../features/shared/MobileFilter';
import { useState } from 'react';

function Expenses() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex divide-gray-100 lg:divide-x">
      <div className="hidden w-1/3 p-8 lg:block">
        <Filter />
      </div>
      <section className="flex-1 p-3 lg:p-6">
        <div className="flex items-center justify-between">
          <Title className="mb-4 text-gray-400">Expenses</Title>
          <div>
            <Button
              variant="light"
              className="mr-3 md:hidden"
              onClick={() => setOpen(true)}
            >
              <Icon
                icon={FaSlidersH}
                color="gray"
                size="xs"
                variant="solid"
                className="px-4"
              />
            </Button>
            <MobileFilter open={open} setOpen={setOpen} />
            <Link to="create">
              <Button
                color="blue"
                variant="light"
                size="xs"
                icon={FaArrowDown}
                className="hidden md:flex"
              >
                Add Income
              </Button>
              <Icon
                icon={FaPen}
                color="blue"
                variant="solid"
                className="md:hidden"
                size="xs"
              />
            </Link>
          </div>
        </div>

        <ExpensesTable />
      </section>
    </div>
  );
}

export default Expenses;
