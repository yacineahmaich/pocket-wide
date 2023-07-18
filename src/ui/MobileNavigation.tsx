import { MenuAlt3Icon } from '@heroicons/react/solid';
import * as Dialog from '@radix-ui/react-dialog';
import { Icon } from '@tremor/react';
import { HiXMark } from 'react-icons/hi2';
import UserAvatar from './UserAvatar';
import { useUser } from '../features/auth/useUser';
import { NAVIGATION } from '../utils/constants';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function MobileNavigation() {
  const [open, setOpen] = useState(false);

  const { user } = useUser();

  const navigate = useNavigate();
  const handleNavigate = (to: string) => {
    navigate(to);
    setOpen(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className="sm:hidden">
        <button className="">
          <Icon icon={MenuAlt3Icon} color="gray" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal className="sm:hidden">
        <Dialog.Overlay className="fixed inset-0 bg-black/20 sm:hidden" />
        <Dialog.Content className="fixed h-screen w-[280px] max-w-full right-0 top-0 bg-white sm:hidden">
          <Dialog.Close className="absolute mr-2 top-2 right-full">
            <button className="bg-white rounded-full shadow-lg active:scale-95">
              <Icon icon={HiXMark} color="gray" />
            </button>
          </Dialog.Close>

          <div className="flex p-4 bg-gray-100">
            <UserAvatar />
            <div className="flex flex-col ml-3">
              <span className="font-medium capitalize">
                {user?.user_metadata.username ?? user?.user_metadata.full_name}
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
                  <a role="button" onClick={() => handleNavigate(item.to)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="bg-gray-50"></div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default MobileNavigation;
