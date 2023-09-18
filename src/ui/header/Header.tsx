import { Link } from 'react-router-dom';
import Logo from '../Logo';
import MainNavigation from './MainNavigation';
import MobileNavigation from './MobileNavigation';
import UserDropdown from './UserDropdown';

function Header() {
  return (
    <header className="fixed inset-x-0 left-0 top-0 z-10 flex h-16 w-full items-center justify-between px-6 shadow-sm backdrop-blur">
      <Link to="/dashboard">
        <Logo className="h-7 w-7 sm:h-10 sm:w-10" />
      </Link>
      <nav className="hidden items-center gap-3 sm:flex">
        <MainNavigation />
        <UserDropdown />
      </nav>
      <MobileNavigation />
    </header>
  );
}

export default Header;
