import Logo from '../ui/Logo';
import { Navigate, Outlet } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Button, Card, Divider, Flex, Title } from '@tremor/react';
import { useUser } from '../features/auth/useUser';
import { signinWithGithub, signinWithGoogle } from '../services/auth';

function AuthLayout() {
  const { user, isAuthenticated } = useUser();

  if (user && isAuthenticated) return <Navigate to="/" />;

  return (
    <div className="relative flex min-h-screen">
      <Flex alignItems="center" justifyContent="center" className="p-6">
        <Card className="max-w-sm h-fit">
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
              variant="primary"
              color="gray"
              className="w-full"
              onClick={() => signinWithGithub()}
            >
              Continue with Github
            </Button>
          </div>
          <Divider />
          {/* Form Fields */}
          <Outlet />
          {/* Form Fields */}
        </Card>
      </Flex>

      <section className="relative items-center justify-center hidden p-10 sm:flex lg:p-20 bg-tremor-brand">
        <a href="https://github.com/yacineahmaich" target="_blank">
          <Button
            icon={FaGithub}
            variant="secondary"
            color="gray"
            size="xs"
            className="absolute right-5 top-5"
          >
            yacineahmaich
          </Button>
        </a>

        <Flex flexDirection="col">
          <Logo gradient className="mb-6" />
          <Title className="text-white">
            Effortlessly Manage Your Expenses with Pocket Wide
          </Title>
        </Flex>
      </section>
    </div>
  );
}

export default AuthLayout;
