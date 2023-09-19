import { useTranslation } from 'react-i18next';
import EditIncomeForm from '../features/incomes/EditIncomeForm';
import FormLayout from '../layouts/FormLayout';

const EditIncome = () => {
  const { t } = useTranslation();
  return (
    <FormLayout title={t('edit-income')}>
      <EditIncomeForm />
    </FormLayout>
  );
};

export default EditIncome;
