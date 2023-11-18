import { Helmet } from 'react-helmet-async';
import ExpensesHeading from '../features/expenses/ExpensesHeading';
import ExpensesTable from '../features/expenses/ExpensesTable';
import { useExpenses } from '../features/expenses/useExpenses';
import Filter from '../features/shared/Filter';
import { useTranslation } from 'react-i18next';

function Expenses() {
  const { isFetching } = useExpenses();
  const { t } = useTranslation();

  return (
    <>
      <Helmet title={`Pocket Wide | ${t('expenses-page-title')}`} />

      <div className="flex divide-gray-100 lg:divide-x">
        <div className="hidden w-1/3 p-8 lg:block">
          <Filter loading={isFetching} />
        </div>
        <section className="min-h-screen flex-1">
          <ExpensesHeading />
          <ExpensesTable />
        </section>
      </div>
    </>
  );
}

export default Expenses;
