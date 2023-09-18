import { Helmet } from 'react-helmet-async';
import LoginForm from '../features/auth/LoginForm';
import AuthLayout from '../layouts/AuthLayout';

function Login() {
  return (
    <>
      <Helmet title='Pocket Wide | Log In to your account' />
      <AuthLayout heading="Log In to your account">
        <LoginForm />
      </AuthLayout>
    </>
  );
}

export default Login;
