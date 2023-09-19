import React from 'react';
import UserAvatar from '../UserAvatar';
import { Icon, Text } from '@tremor/react';
import { useUser } from '../../features/auth/useUser';
import { HiOutlineBars3BottomRight, HiUser } from 'react-icons/hi2';
import { BiLogOutCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useLogout } from '../../features/auth/useLogout';
import Dropdown from '../Dropdown';
import { useTranslation } from 'react-i18next';

const UserDropdown: React.FC = () => {
  const { user } = useUser();
  const { t } = useTranslation();
  const { mutate: logout } = useLogout();

  return (
    <Dropdown>
      <Dropdown.Trigger>
        <button className="flex items-center rounded-full bg-gray-100 px-2 py-1">
          <UserAvatar size={30} />
          <Text className="px-3">
            {user?.user_metadata.full_name ||
              user?.user_metadata.user_name ||
              user?.email?.split('@')[0]}
          </Text>
          <Icon icon={HiOutlineBars3BottomRight} color="gray" />
        </button>
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item>
          <Link
            to="/dashboard/profile"
            className="flex items-center gap-1 p-1 "
          >
            <Icon icon={HiUser} className="text-gray-600" />
            <span className="text-sm text-gray-600">{t('profile')}</span>
          </Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <button
            className="flex w-full items-center gap-1 p-1 "
            onClick={() => logout()}
          >
            <Icon icon={BiLogOutCircle} className="text-gray-600" />
            <span className="text-sm text-gray-600">{t('logout')}</span>
          </button>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default UserDropdown;
