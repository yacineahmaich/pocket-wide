import React from 'react';
import UserAvatar from '../UserAvatar';
import { Icon, Text } from '@tremor/react';
import { useUser } from '../../features/auth/useUser';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { HiOutlineBars3BottomRight, HiUser } from 'react-icons/hi2';
import { BiLogOutCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useLogout } from '../../features/auth/useLogout';

type UserDropdownProps = {};

const UserDropdown: React.FC<UserDropdownProps> = () => {
  const { user } = useUser();
  const { mutate: logout } = useLogout();

  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger asChild>
        <button className="flex items-center px-2 py-1 bg-gray-100 data-[state=open]:bg-white border-transparent border transition-colors data-[state=open]:border-gray-100 rounded-full">
          <UserAvatar small />
          <Text className="px-4 py-2">
            {user?.user_metadata.username ?? user?.user_metadata.full_name}
          </Text>
          <Icon icon={HiOutlineBars3BottomRight} color="gray" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={5}
          className="min-w-[220px] animate-in data-[state=open]:slide-in-from-top-1 bg-white mt-0.5 z-10 rounded-md p-2 shadow-lg border border-gray-100"
        >
          <DropdownMenu.Item asChild>
            <Link
              to="/dashboard/profile"
              className="flex  group gap-1 items-center p-1 data-[highlighted]:bg-gray-100 outline-none rounded-full"
            >
              <Icon
                icon={HiUser}
                className="text-gray-400 group-data-[highlighted]:text-gray-600"
              />
              <span className="text-gray-400 text-sm group-data-[highlighted]:text-gray-600">
                Profile
              </span>
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild>
            <button
              className="flex w-full  group gap-1 items-center p-1 data-[highlighted]:bg-gray-100 outline-none rounded-full"
              onClick={() => logout()}
            >
              <Icon
                icon={BiLogOutCircle}
                className="text-gray-400 group-data-[highlighted]:text-gray-600"
              />
              <span className="text-gray-400 text-sm group-data-[highlighted]:text-gray-600">
                Log Out
              </span>
            </button>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
export default UserDropdown;
