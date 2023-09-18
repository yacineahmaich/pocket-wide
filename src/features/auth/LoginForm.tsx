import { Button, Text, TextInput } from '@tremor/react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../utils/validation/auth';
import { useLogin } from './useLogin';

function LoginForm() {
  const { mutate: login, isLoading } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Login>({
    defaultValues: {
      email: 'demo@example.com',
      password: 'demodemo@',
    },
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async function (data: Login) {
    login(data, {
      onError: () => {
        reset({ password: '' });
      },
    });
  };

  return (
    <div>
      <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-1">
          <Text>Email Address</Text>
          <TextInput
            className="border-gray-300 bg-transparent hover:bg-transparent"
            {...register('email', { required: 'email is required' })}
            placeholder="Your email"
            error={!!errors.email}
            errorMessage={errors.email?.message}
          />
        </div>
        <div className="space-y-1">
          <Text>Passworrd</Text>
          <TextInput
            className="border-gray-300 bg-transparent hover:bg-transparent"
            {...register('password')}
            type="password"
            placeholder="Your Password"
            error={!!errors.password}
            errorMessage={errors.password?.message}
          />
        </div>
        <Button size="md" className="w-full" loading={isLoading}>
          Login
        </Button>
      </form>
      <Text className="mt-3 inline-block">You don't have an account yet?</Text>
      <Link to="/signup" className="ml-1 text-sm font-medium">
        Signup
      </Link>
    </div>
  );
}

export default LoginForm;
