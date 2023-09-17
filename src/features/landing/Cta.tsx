import { Button, Card, Text, Title } from '@tremor/react';
import { BiBoltCircle } from 'react-icons/bi';

function Cta() {
  return (
    <Card className="text-center bg-transparent">
      <Title className="mb-2 md:text-2xl">
        Ready to Take Control of Your Finances?
      </Title>
      <Text className="mb-4 max-w-md mx-auto">
        Explore the power of financial management with our feature-rich web app.
        Get started today to secure your financial future.
      </Text>
      <Button icon={BiBoltCircle} color="blue">
        GET STARTED
      </Button>
    </Card>
  );
}

export default Cta;
