import { Helmet } from 'react-helmet-async';
import SignupForm from '../features/auth/SignupForm';
import AuthLayout from '../layouts/AuthLayout';

function Signup() {
  return (
    <>
      <Helmet title="Pocket Wide | Create your account for free" />
      <AuthLayout heading="Create your account for free">
        <SignupForm />
      </AuthLayout>
    </>
  );
}

export default Signup;
