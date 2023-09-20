import { Title } from '@tremor/react';
import { Helmet } from 'react-helmet-async';
import UpadateProfileImage from '../features/profile/UpadateProfile';
import UpdateCurrency from '../features/profile/UpdateCurrency';
import UpdatePassword from '../features/profile/UpdatePassword';
import { useTranslation } from 'react-i18next';

function Profile() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet title="Pocket Wide | Profile" />
      <div className="mx-auto max-w-2xl">
        <Title className="mx-auto mb-5 text-center text-gray-400">
          {t('my-profile')}
        </Title>

        <div className="space-y-4">
          <UpadateProfileImage />
          <UpdateCurrency />
          <UpdatePassword />
        </div>
      </div>
    </>
  );
}

export default Profile;
