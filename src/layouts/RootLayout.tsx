import Logo from '../ui/Logo';
import { Outlet } from 'react-router-dom';
import { useUser } from '../features/auth/useUser';

function RootLayout() {
  const { isLoading } = useUser();

  if (isLoading)
    return (
      <div className="flex items-center justify-center w-full h-screen ">
        <Logo className="animate-pulse" />
      </div>
    );

  return <Outlet />;
}

export default RootLayout;
