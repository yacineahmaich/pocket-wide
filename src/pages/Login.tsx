import { Helmet } from 'react-helmet-async';
import LoginForm from '../features/auth/LoginForm';

function Login() {
  return (
    <>
      <Helmet title="Pocket Wide | Log In to your account" />
      <LoginForm />
    </>
  );
}

export default Login;
