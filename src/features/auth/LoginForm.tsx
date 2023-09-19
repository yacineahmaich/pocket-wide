import { Button, Text, TextInput } from '@tremor/react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../utils/validation/auth';
import { useLogin } from './useLogin';
import { useTranslation } from 'react-i18next';

function LoginForm() {
  const { t } = useTranslation();
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
          <Text>{t('email')}</Text>
          <TextInput
            className="border-gray-300 bg-transparent hover:bg-transparent"
            {...register('email', { required: 'email is required' })}
            placeholder={t('email')}
            error={!!errors.email}
            errorMessage={errors.email?.message}
          />
        </div>
        <div className="space-y-1">
          <Text>{t('password')}</Text>
          <TextInput
            className="border-gray-300 bg-transparent hover:bg-transparent"
            {...register('password')}
            type="password"
            placeholder={t('password')}
            error={!!errors.password}
            errorMessage={errors.password?.message}
          />
        </div>
        <Button size="md" className="w-full" loading={isLoading}>
          {t('login')}
        </Button>
      </form>
      <Text className="mt-3 inline-block">{t('do-not-have-account')}</Text>
      <Link to="/signup" className="ml-1 text-sm font-medium">
        {t('signup')}
      </Link>
    </div>
  );
}

export default LoginForm;
