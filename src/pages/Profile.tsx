import { Title } from '@tremor/react';
import UpadateProfileImage from '../features/profile/UpadateProfileImage';
import UpdatePassword from '../features/profile/UpdatePassword';
import UpdateCurrency from '../features/profile/UpdateCurrency';

function Profile() {
  return (
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
  );
}

export default Profile;
