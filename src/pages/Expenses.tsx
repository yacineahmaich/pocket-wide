import { Button, Icon, Title } from '@tremor/react';
import ExpensesTable from '../features/expenses/ExpensesTable';
import { Link } from 'react-router-dom';
import { FaArrowDown, FaPen, FaSlidersH } from 'react-icons/fa';
import Filter from '../features/shared/Filter';
import MobileFilter from '../features/shared/MobileFilter';
import { useState } from 'react';
import { useExpenses } from '../features/expenses/useExpenses';
import { Helmet } from 'react-helmet-async';

function Expenses() {
  const [open, setOpen] = useState(false);
  const { isFetching } = useExpenses();

  return (
    <>
      <Helmet title="Pocket Wide | Expenses" />

      <div className="flex divide-gray-100 lg:divide-x">
        <div className="hidden w-1/3 p-8 lg:block">
          <Filter loading={isFetching} />
        </div>
        <section className="flex-1 min-h-screen">
          <div className="flex items-center justify-between p-3 mb-4 lg:p-6">
            <Title className="text-gray-400">Expenses</Title>
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
    </>
  );
}

export default Expenses;
