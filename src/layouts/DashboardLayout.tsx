import { Outlet, Navigate } from 'react-router-dom';
import { useUser } from '../features/auth/useUser';
import Header from '../ui/Header';
import Footer from '../ui/Footer';

function DashboardLayout() {
  const { user, isAuthenticated } = useUser();

  if (!user || !isAuthenticated) return <Navigate to="/login" />;

  return (
    <div className="px-3 sm:px-6">
      <Header />
      <div className="py-3">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default DashboardLayout;
