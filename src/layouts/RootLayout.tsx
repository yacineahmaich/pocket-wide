import { Outlet, ScrollRestoration } from 'react-router-dom';
import { useUser } from '../features/auth/useUser';

function RootLayout() {
  const { isLoading } = useUser();

  return isLoading ? null : (
    <>
      <Outlet />
      <ScrollRestoration getKey={location => location.key} />
    </>
  );
}

export default RootLayout;
