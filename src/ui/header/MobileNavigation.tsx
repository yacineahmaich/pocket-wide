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
        <Dialog.Overlay className="fixed inset-0 z-[9999] bg-black/20 animate-in duration-300 data-[state=open]:fade-in-0 sm:hidden" />
        <Dialog.Content className="fixed inset-y-0 right-0 top-0 z-[9999] flex w-[280px] max-w-full flex-col bg-white animate-in data-[state=open]:slide-in-from-right sm:hidden">
          <Dialog.Close className="absolute right-full top-2 mr-2" asChild>
            <button className="rounded-full bg-white shadow-lg active:scale-95">
              <Icon icon={HiXMark} color="gray" />
            </button>
          </Dialog.Close>

          <div className="flex-1">
            <div className="flex bg-gray-100 p-4">
              <UserAvatar />
              <div className="ml-3 flex flex-col">
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

          <div className="mt-auto flex flex-col items-center space-y-2 border-t border-gray-200 px-4 py-2">
            <Button
              icon={HiUser}
              color="gray"
              size="xs"
              className="w-full"
              onClick={() => navigate('/dashboard/profile')}
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
