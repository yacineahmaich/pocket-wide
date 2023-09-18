import { Button, Text, TextInput } from '@tremor/react';
import { Link } from 'react-router-dom';
import { signupSchema } from '../../utils/validation/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useSignup } from './useSignup';

function SignupForm() {
  const { mutate: signup, isLoading } = useSignup();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Signup>({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = (data: Signup) => {
    signup(data);
  };
  return (
    <>
      <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-1">
          <Text>Username</Text>
          <TextInput
            className="border-gray-300 bg-transparent hover:bg-transparent"
            {...register('username')}
            error={!!errors.username}
            errorMessage={errors.username?.message}
            placeholder="Your Username"
          />
        </div>
        <div className="space-y-1">
          <Text>Email Address</Text>
          <TextInput
            className="border-gray-300 bg-transparent hover:bg-transparent"
            {...register('email')}
            error={!!errors.email}
            errorMessage={errors.email?.message}
            placeholder="Your Email"
          />
        </div>
        <div className="space-y-1">
          <Text>Passworrd</Text>
          <TextInput
            className="border-gray-300 bg-transparent hover:bg-transparent"
            {...register('password')}
            error={!!errors.password}
            errorMessage={errors.password?.message}
            type="password"
            placeholder="Your Password"
          />
        </div>
        <div className="space-y-1">
          <Text>Confirm Password</Text>
          <TextInput
            className="border-gray-300 bg-transparent hover:bg-transparent"
            {...register('passwordConfirmation')}
            error={!!errors.passwordConfirmation}
            errorMessage={errors.passwordConfirmation?.message}
            type="password"
            placeholder="Confirm Your Password"
          />
        </div>
        <Button size="md" className="w-full" loading={isLoading}>
          Signup
        </Button>
      </form>
      <Text className="mt-3 inline-block">You already have an account?</Text>
      <Link to="/login" className="ml-1 text-sm font-medium">
        Login
      </Link>
    </>
  );
}

export default SignupForm;
