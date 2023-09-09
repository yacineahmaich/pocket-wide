import { Title } from '@tremor/react';
import { Helmet } from 'react-helmet';
import UpadateProfileImage from '../features/profile/UpadateProfile';
import UpdateCurrency from '../features/profile/UpdateCurrency';
import UpdatePassword from '../features/profile/UpdatePassword';

function Profile() {
  return (
    <>
      <Helmet title="Pocket Wide | Profile" />
      <div className="max-w-2xl mx-auto">
        <Title className="mx-auto text-center text-gray-400 mb-5">
          My Profile
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
