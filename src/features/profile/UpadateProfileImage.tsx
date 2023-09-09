import { Button, Card, Text } from '@tremor/react';
import React from 'react';
import { useUser } from '../auth/useUser';

type UpadateProfileImageProps = {};

const UpadateProfileImage: React.FC<UpadateProfileImageProps> = () => {
  const { user } = useUser();
  return (
    <Card className="border-gray-300 p-1">
      <div className="bg-gray-100 p-3 rounded">
        <Text className='font-medium'>Update Profile</Text>
      </div>
      <div className="p-4">
        <img
          src={user?.user_metadata.avatar_url}
          width={90}
          height={90}
          className="rounded-full mb-4 bg-gray-100"
        />
        <Button className="mr-2" color="gray" size="xs">
          Update Profile
        </Button>
        <Button size="xs">remove Profile</Button>
      </div>
    </Card>
  );
};
export default UpadateProfileImage;
