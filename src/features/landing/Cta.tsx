import { Button, Card, Text, Title } from '@tremor/react';
import { motion } from 'framer-motion';
import { BiBoltCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const MotionCard = motion(Card);

function Cta() {
  const navigate = useNavigate();

  return (
    <MotionCard
      initial={{ opacity: 0, y: '100%' }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, type: 'spring', stiffness: 100 }}
      viewport={{ once: true }}
      className="text-center bg-transparent"
    >
      <Title className="mb-2 md:text-2xl">
        Ready to Take Control of Your Finances?
      </Title>
      <Text className="mb-4 max-w-md mx-auto">
        Explore the power of financial management with our feature-rich web app.
        Get started today to secure your financial future.
      </Text>
      <Button
        icon={BiBoltCircle}
        color="blue"
        onClick={() => navigate('/login')}
      >
        GET STARTED
      </Button>
    </MotionCard>
  );
}

export default Cta;
