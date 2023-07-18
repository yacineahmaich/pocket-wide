import { Button, Icon, Title } from '@tremor/react';
import IncomesTable from '../features/incomes/IncomesTable';
import { Link } from 'react-router-dom';
import { FaArrowUp, FaPen, FaSlidersH } from 'react-icons/fa';
import Filter from '../features/shared/Filter';
import { useState } from 'react';
import MobileFilter from '../features/shared/MobileFilter';
import { useIncomes } from '../features/incomes/useIncomes';

function Expenses() {
  const [open, setOpen] = useState(false);
  const { isFetching } = useIncomes();

  return (
    <div className="flex divide-gray-100 lg:divide-x">
      <div className="hidden w-1/3 p-8 lg:block">
        <Filter loading={isFetching} />
      </div>
      <section className="flex-1 p-3 lg:p-6">
        <div className="flex items-center justify-between">
          <Title className="mb-4 text-gray-400">Incomes</Title>
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
                icon={FaArrowUp}
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
        <IncomesTable />
      </section>
    </div>
  );
}

export default Expenses;
