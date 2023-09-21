import { Outlet } from 'react-router-dom';
import Footer from '../features/landing/Footer';
import Header from './components/Header';

function GuestLayout() {
  return (
    <div className="overflow-hidden bg-gray-50 bg-cover pt-16 sm:bg-[url(/images/landing-bg.jpg)] sm:bg-fixed">
      <div className="container mx-auto px-3">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default GuestLayout;
