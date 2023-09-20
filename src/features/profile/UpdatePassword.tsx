import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Card, Text, TextInput } from '@tremor/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { updatePasswordSchema } from '../../utils/validation/auth';
import { useUpdatePassword } from './useUpdatePassword';
import { useTranslation } from 'react-i18next';

const UpdatePassword: React.FC = () => {
  const { t } = useTranslation();
  const { mutate: updatePassword, isLoading } = useUpdatePassword();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<UpdatePassword>({
    defaultValues: {
      newPassword: '',
      newPasswordConfirmation: '',
    },
    resolver: yupResolver(updatePasswordSchema),
  });

  const onSubmit = (data: UpdatePassword) => {
    updatePassword({
      password: data.newPassword,
    });
  };

  return (
    <Card className="border-gray-300 p-1">
      <div className="rounded bg-gray-100 p-3">
        <Text className="font-medium">{t('update-password')}</Text>
      </div>
      <div className="p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div className="space-y-1">
              <TextInput
                {...register('newPassword')}
                error={!!errors.newPassword}
                errorMessage={errors.newPassword?.message}
                type="password"
                placeholder={t('new-password')}
              />
            </div>
            <div className="space-y-1">
              <TextInput
                {...register('newPasswordConfirmation')}
                error={!!errors.newPasswordConfirmation}
                errorMessage={errors.newPasswordConfirmation?.message}
                type="password"
                placeholder={t('confirm-new-password')}
              />
            </div>
            <Button
              type="submit"
              color="gray"
              size="xs"
              disabled={isLoading}
              loading={isLoading}
            >
              {t('update-password')}
            </Button>
          </div>
        </form>
      </div>
    </Card>
  );
};
export default UpdatePassword;
