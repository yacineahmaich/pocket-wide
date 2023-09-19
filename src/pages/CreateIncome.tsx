import { useTranslation } from 'react-i18next';
import CreateIncomeForm from '../features/incomes/CreateIncomeForm';
import FormLayout from '../layouts/FormLayout';

function CreateIncome() {
  const { t } = useTranslation();
  return (
    <FormLayout title={t('create-income')}>
      <CreateIncomeForm />
    </FormLayout>
  );
}

export default CreateIncome;
