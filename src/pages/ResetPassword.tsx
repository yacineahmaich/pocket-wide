import { CheckCircleIcon } from '@heroicons/react/solid';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Callout, Text, TextInput } from '@tremor/react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useResetPassword } from '../features/auth/useResetPassword';
import { resetPasswordSchema } from '../utils/validation/auth';

function ResetPassword() {
  const { t } = useTranslation();
  const {
    mutate: resetPassword,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useResetPassword();

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = useForm({
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(resetPasswordSchema),
  });

  const onSubmit = ({ email }: { email: string }) => {
    resetPassword(
      { email },
      {
        onSuccess() {
          reset();
        },
      },
    );
  };

  return (
    <>
      <Helmet title="Pocket Wide | Reset password" />
      {isSuccess ? (
        <Callout
          className="mt-4 max-w-sm"
          title={t('password-reset-success')}
          icon={CheckCircleIcon}
          color="teal"
        >
          {t('password-reset-success-text', { email: watch('email') })}
        </Callout>
      ) : (
        <div>
          {isError && (
            <Callout
              className="mt-4 max-w-sm"
              title={t('password-reset-fail')}
              icon={CheckCircleIcon}
              color="red"
            >
              {(error as { message: string }).message}
            </Callout>
          )}
          <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-1">
              <Text>{t('email')}</Text>
              <TextInput
                className="border-gray-300 bg-transparent hover:bg-transparent"
                {...register('email')}
                placeholder={t('email')}
                error={!!errors.email}
                errorMessage={errors.email?.message}
              />
            </div>
            <Button size="md" className="w-full" loading={isLoading}>
              {t('send-password-reset-email')}
            </Button>
          </form>
        </div>
      )}
    </>
  );
}

export default ResetPassword;
