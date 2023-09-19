import { useTranslation } from 'react-i18next';
import EditExpenseForm from '../features/expenses/EditExpenseForm';
import FormLayout from '../layouts/FormLayout';

const EditExpense = () => {
  const { t } = useTranslation();
  return (
    <FormLayout title={t('edit-expense')}>
      <EditExpenseForm />
    </FormLayout>
  );
};

export default EditExpense;
