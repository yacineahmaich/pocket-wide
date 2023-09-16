import { Helmet } from 'react-helmet-async';
import IncomesHeading from '../features/incomes/IncomesHeading';
import IncomesTable from '../features/incomes/IncomesTable';
import { useIncomes } from '../features/incomes/useIncomes';
import Filter from '../features/shared/Filter';

function Expenses() {
  const { isFetching } = useIncomes();

  return (
    <>
      <Helmet title="Pocket Wide | Incomes" />
      <div className="flex divide-gray-100 lg:divide-x">
        <div className="hidden w-1/3 p-8 lg:block">
          <Filter loading={isFetching} type="income" />
        </div>
        <section className="flex-1 min-h-screen ">
          <IncomesHeading />
          <IncomesTable />
        </section>
      </div>
    </>
  );
}

export default Expenses;
