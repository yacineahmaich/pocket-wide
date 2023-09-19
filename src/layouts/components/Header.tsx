import { Button } from '@tremor/react';
import Logo from '../../ui/Logo';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../features/auth/useUser';
import LangSwitcher from '../../features/shared/LangSwitcher';

function Header() {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useUser();

  return (
    <header className="fixed left-0 top-0 z-10 flex h-16 w-full items-center justify-between bg-transparent px-6">
      <Link to="/">
        <Logo className="h-8" />
      </Link>
      <div className="flex items-center gap-2">
        {user && isAuthenticated ? (
          <Button
            role="link"
            size="xs"
            variant="secondary"
            color="gray"
            className="rounded-full px-6 transition-colors md:px-10"
            onClick={() => navigate('/dashboard')}
          >
            Go to dashboard
          </Button>
        ) : (
          <>
            <Button
              role="link"
              size="xs"
              variant="light"
              color="gray"
              className="px-6 transition-colors md:px-10"
              onClick={() => navigate('/login')}
            >
              Log In
            </Button>
            <Button
              role="link"
              size="xs"
              variant="secondary"
              color="gray"
              className="px-6 transition-colors md:px-10"
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </Button>
          </>
        )}
        <LangSwitcher />
      </div>
    </header>
  );
}

export default Header;
