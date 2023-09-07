import Logo from '../Logo';
import MainNavigation from './MainNavigation';
import MobileNavigation from './MobileNavigation';
import UserDropdown from './UserDropdown';

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 left-0 z-10 flex items-center justify-between w-full h-16 px-6 shadow-sm backdrop-blur">
      <Logo className="w-7 sm:w-10 h-7 sm:h-10" />
      <nav className="items-center hidden gap-3 sm:flex">
        <MainNavigation />
        <UserDropdown />
      </nav>
      <MobileNavigation />
    </header>
  );
}

export default Header;
