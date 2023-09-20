import React, { useState } from 'react';
import { Button, Card, Icon, Text } from '@tremor/react';
import { MdEdit } from 'react-icons/md';
import { useUser } from '../auth/useUser';
import { useUpdateProfile } from './useUpdateProfile';
import { useRemoveProfile } from './useRemoveProfile';
import { useTranslation } from 'react-i18next';

const UpadateProfile: React.FC = () => {
  const [profile, setProfile] = useState<File>();
  const { user } = useUser();
  const { t } = useTranslation();
  const { mutate: updateProfile, isLoading } = useUpdateProfile();
  const { mutate: removeProfile, isLoading: isRemoving } = useRemoveProfile();

  const userProfile = `https://ui-avatars.com/api/?background=f5f5f5&color=#000&name=${
    user?.user_metadata.name ||
    user?.user_metadata.full_name ||
    user?.user_metadata.user_name ||
    user?.email?.split('@')?.at(0)
  }`;
  const profilePreview = profile ? URL.createObjectURL(profile) : null;

  return (
    <Card className="border-gray-300 p-1">
      <div className="rounded bg-gray-100 p-3">
        <Text className="font-medium">{t('update-profile')}</Text>
      </div>
      <div className="p-4">
        <div className="relative w-fit rounded-full">
          <img
            src={
              profilePreview || user?.user_metadata.avatar_url || userProfile
            }
            className="mb-4 h-28 w-28 rounded-full bg-gray-100 object-cover"
          />
          <label
            htmlFor="image"
            className="absolute  bottom-0 right-0 cursor-pointer rounded-full border bg-gray-100"
          >
            <Icon icon={MdEdit} size="xs" color="gray" />
            <input
              type="file"
              id="image"
              className="sr-only"
              onChange={e => setProfile(e.target.files?.[0])}
            />
          </label>
        </div>
        <div className="flex items-center gap-2">
          <Button
            color="gray"
            size="xs"
            onClick={() => {
              if (!profile) return;

              updateProfile(
                { profile, userId: user?.id! },
                { onSuccess: () => setProfile(undefined) },
              );
            }}
            disabled={isLoading || isRemoving}
            loading={isLoading}
          >
            {t('update-profile')}
          </Button>
          {user?.user_metadata.avatar_url && (
            <Button
              size="xs"
              onClick={() => {
                removeProfile({ userId: user.id });
              }}
              disabled={isLoading || isRemoving}
              loading={isRemoving}
            >
              {t('remove-profile')}
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};
export default UpadateProfile;
