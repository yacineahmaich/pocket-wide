import LoginForm from '../features/auth/LoginForm';
import AuthLayout from '../layouts/AuthLayout';

function Login() {
  return (
    <AuthLayout heading="Log In to your Account">
      <LoginForm />
    </AuthLayout>
  );
}

export default Login;
