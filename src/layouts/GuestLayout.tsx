import { Outlet } from 'react-router-dom';
import Footer from '../features/landing/Footer';
import Header from './components/Header';

function GuestLayout() {
  return (
    <div
      className="bg-gray-50 bg-cover bg-fixed pt-16"
      style={{ backgroundImage: 'url(/images/landing-bg.jpg)' }}
    >
      <div className="container mx-auto px-3">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default GuestLayout;
