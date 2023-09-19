import { Button, Text, TextInput } from '@tremor/react';
import { Link } from 'react-router-dom';
import { signupSchema } from '../../utils/validation/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useSignup } from './useSignup';
import { useTranslation } from 'react-i18next';

function SignupForm() {
  const { t } = useTranslation();
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
          <Text>{t('username')}</Text>
          <TextInput
            className="border-gray-300 bg-transparent hover:bg-transparent"
            {...register('username')}
            error={!!errors.username}
            errorMessage={errors.username?.message}
            placeholder={t('username')}
          />
        </div>
        <div className="space-y-1">
          <Text>{t('email')}</Text>
          <TextInput
            className="border-gray-300 bg-transparent hover:bg-transparent"
            {...register('email')}
            error={!!errors.email}
            errorMessage={errors.email?.message}
            placeholder={t('email')}
          />
        </div>
        <div className="space-y-1">
          <Text>{t('password')}</Text>
          <TextInput
            className="border-gray-300 bg-transparent hover:bg-transparent"
            {...register('password')}
            error={!!errors.password}
            errorMessage={errors.password?.message}
            type="password"
            placeholder={t('password')}
          />
        </div>
        <div className="space-y-1">
          <Text>{t('confirm-password')}</Text>
          <TextInput
            className="border-gray-300 bg-transparent hover:bg-transparent"
            {...register('passwordConfirmation')}
            error={!!errors.passwordConfirmation}
            errorMessage={errors.passwordConfirmation?.message}
            type="password"
            placeholder={t('confirm-password')}
          />
        </div>
        <Button size="md" className="w-full" loading={isLoading}>
          {t('signup')}
        </Button>
      </form>
      <Text className="mt-3 inline-block">{t('already-have-account')}</Text>
      <Link to="/login" className="ml-1 text-sm font-medium">
        {t('login')}
      </Link>
    </>
  );
}

export default SignupForm;
