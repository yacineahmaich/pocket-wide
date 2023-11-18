import { useTranslation } from 'react-i18next';
import CreateExpenseForm from '../features/expenses/CreateExpenseForm';
import FormLayout from '../layouts/FormLayout';
import { Helmet } from 'react-helmet-async';

function CreateExpense() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet title={`Pocket Wide | ${t('create-expense-page-title')}`} />
      <FormLayout title={t('create-expense')}>
        <CreateExpenseForm />
      </FormLayout>
    </>
  );
}

export default CreateExpense;
