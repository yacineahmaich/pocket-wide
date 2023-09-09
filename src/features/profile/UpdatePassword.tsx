import { Button, Card, Text, TextInput } from '@tremor/react';
import React from 'react';
import { useForm } from 'react-hook-form';

const UpdatePassword: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
  });

  return (
    <Card className="border-gray-300 p-1">
      <div className="bg-gray-100 p-3 rounded">
        <Text className="font-medium">Update Password</Text>
      </div>
      <div className="p-4 space-y-4">
        <div className="space-y-1">
          <TextInput
            {...register('oldPassword')}
            error={!!errors.oldPassword}
            errorMessage={errors.oldPassword?.message}
            type="password"
            placeholder="Old Password"
          />
        </div>
        <div className="space-y-1">
          <TextInput
            {...register('newPassword')}
            error={!!errors.newPassword}
            errorMessage={errors.newPassword?.message}
            type="password"
            placeholder="New password"
          />
        </div>
        <div className="space-y-1">
          <TextInput
            {...register('confirmNewPassword')}
            error={!!errors.confirmNewPassword}
            errorMessage={errors.confirmNewPassword?.message}
            type="password"
            placeholder="Confirm new password"
          />
        </div>
        <Button color="gray" size="xs">
          Update Profile
        </Button>
      </div>
    </Card>
  );
};
export default UpdatePassword;
