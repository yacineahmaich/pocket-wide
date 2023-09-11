import { Helmet } from 'react-helmet-async';
import ExpensesHeading from '../features/expenses/ExpensesHeading';
import ExpensesTable from '../features/expenses/ExpensesTable';
import { useExpenses } from '../features/expenses/useExpenses';
import Filter from '../features/shared/Filter';

function Expenses() {
  const { isFetching } = useExpenses();

  return (
    <>
      <Helmet title="Pocket Wide | Expenses" />

      <div className="flex divide-gray-100 lg:divide-x">
        <div className="hidden w-1/3 p-8 lg:block">
          <Filter loading={isFetching} />
        </div>
        <section className="flex-1 min-h-screen">
          <ExpensesHeading />
          <ExpensesTable />
        </section>
      </div>
    </>
  );
}

export default Expenses;
