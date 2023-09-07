import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../features/auth/useUser';
import CurrencyModalProvider from '../ui/CurrencyModalProvider';
import Footer from '../ui/Footer';
import Header from '../ui/header/Header';

function DashboardLayout() {
  const { user, isAuthenticated } = useUser();

  if (!user || !isAuthenticated) return <Navigate to="/login" />;

  return (
    <div className="px-3 pt-16 sm:px-6">
      <Header />
      <div className="py-3">
        <CurrencyModalProvider>
          <Outlet />
        </CurrencyModalProvider>
      </div>
      <Footer />
    </div>
  );
}

export default DashboardLayout;
