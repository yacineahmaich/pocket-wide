import { Outlet } from 'react-router-dom';
import Footer from '../features/landing/Footer';
import Header from './components/Header';

function GuestLayout() {
  return (
    <div
      className="bg-fixed bg-gray-50 bg-cover pt-16"
      style={{ backgroundImage: 'url(/landing-bg.jpg)' }}
    >
      <div className="container px-3 mx-auto">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default GuestLayout;
