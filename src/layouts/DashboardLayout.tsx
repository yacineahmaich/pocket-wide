import { Outlet, Navigate } from 'react-router-dom';
import { useUser } from '../features/auth/useUser';

function DashboardLayout() {
  const { user, isAuthenticated } = useUser();

  if (!user || !isAuthenticated) return <Navigate to="/login" />;

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default DashboardLayout;
