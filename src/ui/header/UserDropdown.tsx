import React from 'react';
import UserAvatar from '../UserAvatar';
import { Icon, Text } from '@tremor/react';
import { useUser } from '../../features/auth/useUser';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { HiOutlineBars3BottomRight, HiUser } from 'react-icons/hi2';
import { BiLogOutCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useLogout } from '../../features/auth/useLogout';

const UserDropdown: React.FC = () => {
  const { user } = useUser();
  const { mutate: logout } = useLogout();

  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger asChild>
        <button className="flex items-center rounded-full bg-gray-100 px-2 py-1">
          <UserAvatar size={30} />
          <Text className="px-3">
            {user?.user_metadata.full_name ||
              user?.user_metadata.user_name ||
              user?.email?.split('@')[0]}
          </Text>
          <Icon icon={HiOutlineBars3BottomRight} color="gray" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={5}
          className="z-10 mt-0.5 min-w-[220px] rounded-xl border border-gray-100 bg-white p-1 shadow-lg animate-in data-[state=open]:slide-in-from-top-1"
        >
          <DropdownMenu.Item asChild>
            <Link
              to="/dashboard/profile"
              className="flex items-center gap-1 rounded-xl p-1 outline-none data-[highlighted]:bg-gray-100"
            >
              <Icon icon={HiUser} className="text-gray-600" />
              <span className="text-sm text-gray-600">Profile</span>
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild>
            <button
              className="flex w-full items-center gap-1 rounded-xl p-1 outline-none data-[highlighted]:bg-gray-100"
              onClick={() => logout()}
            >
              <Icon icon={BiLogOutCircle} className="text-gray-600" />
              <span className="text-sm text-gray-600">Log Out</span>
            </button>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
export default UserDropdown;
