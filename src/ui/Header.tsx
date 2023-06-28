import { Button, Text } from '@tremor/react';
import Logo from './Logo';
import { FaMoon } from 'react-icons/fa';
import { useUser } from '../features/auth/useUser';
import { useLogout } from '../features/auth/useLogout';

function Header() {
  const { user } = useUser();
  const { mutate: logout, isLoading } = useLogout();

  return (
    <header className="flex items-center justify-between w-full py-3 border-b border-b-gray-50">
      <Logo className="w-10 h-10" />
      <div className="flex items-center gap-3">
        <Button
          icon={FaMoon}
          className="h-10 rounded-full aspect-square"
          color="gray"
          variant="light"
        ></Button>
        <div className="flex items-center gap-4 px-4 py-2 bg-gray-100 rounded-full">
          <Logo className="w-6 h-6" />
          <Text>{user?.user_metadata.username ?? user?.email}</Text>
        </div>
        <Button
          variant="light"
          size="xs"
          color="red"
          onClick={() => logout()}
          loading={isLoading}
        >
          Logout
        </Button>
      </div>
    </header>
  );
}

export default Header;
