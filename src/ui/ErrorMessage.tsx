import { isError } from '@tanstack/react-query';
import { Button, Card, Text, Title } from '@tremor/react';
import { FC } from 'react';
import { FaBolt } from 'react-icons/fa';

type Props = {
  error: unknown;
  retry?: () => void;
};
const ErrorMessage: FC<Props> = ({ error, retry }) => {
  const message = isError(error) ? error?.message : 'Unxcepcted error';

  return (
    <Card className="mx-auto mt-10 w-fit text-center">
      <Title className="mb-2">Something went wrong! 🤕</Title>
      <Text>Could not get records! please try again</Text>
      <Text className="text-gray-400 ">Error: {message}</Text>
      <Button
        variant="light"
        size="xs"
        color="blue"
        className="mt-4"
        icon={FaBolt}
        onClick={retry}
      >
        Try again
      </Button>
    </Card>
  );
};

export default ErrorMessage;
