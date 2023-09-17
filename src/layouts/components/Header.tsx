import { Button } from '@tremor/react';
import Logo from '../../ui/Logo';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../features/auth/useUser';

function Header() {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useUser();

  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-6 h-16 bg-transparent z-10">
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
            className="px-6 md:px-10 rounded-full transition-colors"
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
              className="px-6 md:px-10 transition-colors"
              onClick={() => navigate('/login')}
            >
              Log In
            </Button>
            <Button
              role="link"
              size="xs"
              variant="secondary"
              color="gray"
              className="px-6 md:px-10 transition-colors"
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </Button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
