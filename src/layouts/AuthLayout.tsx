import { Button, Title } from '@tremor/react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useUser } from '../features/auth/useUser';
import { signinWithGithub, signinWithGoogle } from '../services/auth';
import { useTranslation } from 'react-i18next';

function AuthLayout() {
  const location = useLocation();
  const { user, isAuthenticated } = useUser();
  const { t } = useTranslation();

  if (user && isAuthenticated) return <Navigate to="/dashboard" />;

  let heading = '';

  if (location.pathname === '/login') heading = t('login-form-title');
  if (location.pathname === '/signup') heading = t('signup-form-title');
  if (location.pathname === '/reset-password')
    heading = t('reset-password-form-title');

  const showOauth = location.pathname !== '/reset-password';

  return (
    <div className="relative -mt-16 flex h-screen flex-col items-center pt-32">
      <div className="mt-0 flex max-w-2xl flex-col items-center justify-between border-0 bg-transparent p-6 sm:flex-row">
        <div className="flex-1 space-y-4">
          <Title>{heading}</Title>
          <Outlet />
        </div>

        {showOauth && (
          <>
            <div className="my-4 h-px w-20 bg-gray-300 sm:mx-4 sm:h-20 sm:w-px" />
            <div className="flex w-full flex-col gap-2 sm:w-auto">
              <Button
                icon={FaGoogle}
                variant="secondary"
                color="gray"
                onClick={() => signinWithGoogle()}
              >
                {t('continue-with-google')}
              </Button>
              <Button
                icon={FaGithub}
                color="gray"
                onClick={() => signinWithGithub()}
              >
                {t('continue-with-github')}
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AuthLayout;
