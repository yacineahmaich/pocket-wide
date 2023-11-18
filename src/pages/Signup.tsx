import { Helmet } from 'react-helmet-async';
import SignupForm from '../features/auth/SignupForm';
import { useTranslation } from 'react-i18next';

function Signup() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet title={`Pocket Wide | ${t('signup-page-title')}`} />
      <SignupForm />
    </>
  );
}

export default Signup;
