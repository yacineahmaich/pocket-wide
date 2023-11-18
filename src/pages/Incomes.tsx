import { Helmet } from 'react-helmet-async';
import IncomesHeading from '../features/incomes/IncomesHeading';
import IncomesTable from '../features/incomes/IncomesTable';
import { useIncomes } from '../features/incomes/useIncomes';
import Filter from '../features/shared/Filter';
import { useTranslation } from 'react-i18next';

function Expenses() {
  const { isFetching } = useIncomes();
  const { t } = useTranslation();

  return (
    <>
      <Helmet title={`Pocket Wide | ${t('incomes-page-title')}`} />
      <div className="flex divide-gray-100 lg:divide-x">
        <div className="hidden w-1/3 p-8 lg:block">
          <Filter loading={isFetching} type="income" />
        </div>
        <section className="min-h-screen flex-1 ">
          <IncomesHeading />
          <IncomesTable />
        </section>
      </div>
    </>
  );
}

export default Expenses;
