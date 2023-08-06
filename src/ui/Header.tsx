import Logo from './Logo';
import { useLogout } from '../features/auth/useLogout';
import { FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button, Text } from '@tremor/react';
import { useUser } from '../features/auth/useUser';
import MobileNavigation from './MobileNavigation';
import { NAVIGATION } from '../utils/constants';
import UserAvatar from './UserAvatar';

function Header() {
  const { user } = useUser();
  const { mutate: logout, isLoading } = useLogout();

  return (
    <header className="fixed inset-x-0 top-0 left-0 z-10 flex items-center justify-between w-full h-16 px-6 shadow-sm backdrop-blur">
      <Logo className="w-7 sm:w-10 h-7 sm:h-10" />
      <nav className="items-center hidden gap-3 sm:flex">
        <ul className="flex items-center gap-6 mr-10 text-sm font-medium text-gray-400 lg:mr-20">
          {NAVIGATION.map(item => (
            <li key={item.label}>
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <button className="flex items-center px-2 py-1 bg-gray-100 rounded-full">
          <UserAvatar small />
          <Text className="px-4 py-2">
            {user?.user_metadata.username ?? user?.user_metadata.full_name}
          </Text>
        </button>
        <Button
          icon={FaSignOutAlt}
          variant="light"
          color="red"
          size="xs"
          loading={isLoading}
          onClick={() => logout()}
        >
          <span className="hidden md:block">Logout</span>
        </Button>
      </nav>
      <MobileNavigation />
    </header>
  );
}

export default Header;
