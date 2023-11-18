import { Helmet } from 'react-helmet-async';
import LoginForm from '../features/auth/LoginForm';
import { useTranslation } from 'react-i18next';

function Login() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet title={`Pocket Wide | ${t('login-page-title')}`} />
      <LoginForm />
    </>
  );
}

export default Login;
