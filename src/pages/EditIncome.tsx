import { useTranslation } from 'react-i18next';
import EditIncomeForm from '../features/incomes/EditIncomeForm';
import FormLayout from '../layouts/FormLayout';
import { Helmet } from 'react-helmet-async';

const EditIncome = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet title={`Pocket Wide | ${t('edit-income-page-title')}`} />
      <FormLayout title={t('edit-income')}>
        <EditIncomeForm />
      </FormLayout>
    </>
  );
};

export default EditIncome;
