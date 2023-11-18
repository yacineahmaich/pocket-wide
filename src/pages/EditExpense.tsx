import { useTranslation } from 'react-i18next';
import EditExpenseForm from '../features/expenses/EditExpenseForm';
import FormLayout from '../layouts/FormLayout';
import { Helmet } from 'react-helmet-async';

const EditExpense = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet title={`Pocket Wide | ${t('edit-expense-page-title')}`} />
      <FormLayout title={t('edit-expense')}>
        <EditExpenseForm />
      </FormLayout>
    </>
  );
};

export default EditExpense;
