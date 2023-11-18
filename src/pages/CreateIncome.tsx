import { useTranslation } from 'react-i18next';
import CreateIncomeForm from '../features/incomes/CreateIncomeForm';
import FormLayout from '../layouts/FormLayout';
import { Helmet } from 'react-helmet-async';

function CreateIncome() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet title={`Pocket Wide | ${t('create-income-page-title')}`} />
      <FormLayout title={t('create-income')}>
        <CreateIncomeForm />
      </FormLayout>
    </>
  );
}

export default CreateIncome;
