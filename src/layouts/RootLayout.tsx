import { Outlet } from 'react-router-dom';
import { useUser } from '../features/auth/useUser';

function RootLayout() {
  const { isLoading } = useUser();

  return isLoading ? null : <Outlet />;
}

export default RootLayout;
