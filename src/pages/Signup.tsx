import { Helmet } from 'react-helmet-async';
import SignupForm from '../features/auth/SignupForm';

function Signup() {
  return (
    <>
      <Helmet title="Pocket Wide | Create your account for free" />
      <SignupForm />
    </>
  );
}

export default Signup;
