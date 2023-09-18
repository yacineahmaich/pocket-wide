import { Button, Title } from '@tremor/react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Navigate } from 'react-router-dom';
import { useUser } from '../features/auth/useUser';
import { signinWithGithub, signinWithGoogle } from '../services/auth';

function AuthLayout({
  children,
  heading,
}: {
  children: React.ReactNode;
  heading: string;
}) {
  const { user, isAuthenticated } = useUser();

  if (user && isAuthenticated) return <Navigate to="/dashboard" />;

  return (
    <div className="relative -mt-16 flex h-screen flex-col items-center pt-32">
      <div className="mt-0 flex max-w-2xl items-center justify-between border-0 bg-transparent p-6">
        <div className="flex-1 space-y-4">
          <Title>{heading}</Title>
          {children}
        </div>
        <div className="mx-4 h-20 w-px bg-gray-300" />
        <div className="flex flex-col gap-2">
          <Button
            icon={FaGoogle}
            variant="secondary"
            color="gray"
            onClick={() => signinWithGoogle()}
          >
            Continue with Google
          </Button>
          <Button
            icon={FaGithub}
            color="gray"
            onClick={() => signinWithGithub()}
          >
            Continue with Github
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
