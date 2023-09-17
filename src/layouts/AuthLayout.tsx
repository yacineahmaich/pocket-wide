import { Button, Divider, Flex, Title } from '@tremor/react';
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
    <div className="relative flex flex-col items-center mt-16">
      <Title>{heading}</Title>
      <Flex alignItems="center" justifyContent="center" className="p-6">
        <div className="max-w-sm h-fit bg-transparent mt-0">
          <div className="space-y-2">
            <Button
              icon={FaGoogle}
              variant="secondary"
              color="gray"
              className="w-full"
              onClick={() => signinWithGoogle()}
            >
              Continue with Google
            </Button>
            <Button
              icon={FaGithub}
              color="gray"
              className="w-full"
              onClick={() => signinWithGithub()}
            >
              Continue with Github
            </Button>
          </div>
          <Divider className="bg-gray-200" />
          {children}
        </div>
      </Flex>
    </div>
  );
}

export default AuthLayout;
