import SignupForm from '../features/auth/SignupForm';
import AuthLayout from '../layouts/AuthLayout';

function Signup() {
  return (
    <AuthLayout heading="Create your account for free">
      <SignupForm />
    </AuthLayout>
  );
}

export default Signup;
