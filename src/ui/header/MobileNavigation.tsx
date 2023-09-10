import { MenuAlt3Icon } from '@heroicons/react/solid';
import * as Dialog from '@radix-ui/react-dialog';
import { Button, Icon } from '@tremor/react';
import { HiUser, HiXMark } from 'react-icons/hi2';
import UserAvatar from '../UserAvatar';
import { useUser } from '../../features/auth/useUser';
import { NAVIGATION } from '../../utils/constants';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { useLogout } from '../../features/auth/useLogout';

function MobileNavigation() {
  const _navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { user } = useUser();
  const { mutate: logout, isLoading } = useLogout();


  const navigate = (to: string) => {
    _navigate(to);
    setOpen(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className="sm:hidden" asChild>
        <button>
          <Icon icon={MenuAlt3Icon} color="gray" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal className="sm:hidden">
        <Dialog.Overlay className="fixed inset-0 bg-black/20 sm:hidden animate-in data-[state=open]:fade-in-0 duration-300 z-[9999]" />
        <Dialog.Content className="fixed inset-y-0 z-[9999] w-[280px] max-w-full right-0 top-0 bg-white sm:hidden flex flex-col animate-in data-[state=open]:slide-in-from-right">
          <Dialog.Close className="absolute mr-2 top-2 right-full">
            <button className="bg-white rounded-full shadow-lg active:scale-95">
              <Icon icon={HiXMark} color="gray" />
            </button>
          </Dialog.Close>

          <div className="flex-1">
            <div className="flex p-4 bg-gray-100">
              <UserAvatar />
              <div className="flex flex-col ml-3">
                <span className="font-medium capitalize">
                  {user?.user_metadata.username ??
                    user?.user_metadata.full_name}
                </span>
                <span className="text-sm font-medium text-gray-400">
                  {user?.email}
                </span>
              </div>
            </div>

            <nav className="p-4">
              <ul className="space-y-4 text-sm font-medium text-gray-400">
                {NAVIGATION.map(item => (
                  <li key={item.label}>
                    <a role="button" onClick={() => navigate(item.to)}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex flex-col items-center px-4 py-2 space-y-2 mt-auto border-t border-gray-200">
            <Button
              icon={HiUser}
              color="gray"
              size="xs"
              className="w-full"
              onClick={() => navigate('/profile')}
            >
              Profile
            </Button>
            <Button
              icon={FaSignOutAlt}
              color="red"
              size="xs"
              className="w-full"
              loading={isLoading}
              onClick={() => logout()}
            >
              Logout
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default MobileNavigation;
