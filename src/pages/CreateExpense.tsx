import { useTranslation } from 'react-i18next';
import CreateExpenseForm from '../features/expenses/CreateExpenseForm';
import FormLayout from '../layouts/FormLayout';

function CreateExpense() {
  const { t } = useTranslation();
  return (
    <FormLayout title={t('create-expense')}>
      <CreateExpenseForm />
    </FormLayout>
  );
}

export default CreateExpense;
