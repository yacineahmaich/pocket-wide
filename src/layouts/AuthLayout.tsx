import { Button, Card, Divider, Flex, Text, Title } from "@tremor/react";
import logo from "./../assets/logo.svg";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="relative grid min-h-screen grid-cols-3">
      <Flex
        alignItems="center"
        justifyContent="center"
        aria-colspan={2}
        className="col-span-2"
      >
        <Card className="max-w-md h-fit">
          <div className="space-y-2">
            <Button
              icon={FaGoogle}
              variant="secondary"
              color="gray"
              className="w-full"
            >
              Continue with Google
            </Button>
            <Button
              icon={FaGithub}
              variant="primary"
              color="gray"
              className="w-full"
            >
              Continue with Github
            </Button>
          </div>
          <Divider />
          <Outlet />
        </Card>
      </Flex>

      <section className="relative flex items-center justify-center p-20 bg-tremor-brand">
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
          <img src={logo} className="mx-auto mb-10" />
          <Title className="text-white">
            Effortlessly Manage Your Expenses with Pocket Wide
          </Title>
        </Flex>
      </section>
    </div>
  );
}

export default AuthLayout;
