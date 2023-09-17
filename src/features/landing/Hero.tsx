import { Title, Button, Icon, Text } from '@tremor/react';
import Lottie from 'lottie-react';
import { BiBoltCircle, BiDownArrow } from 'react-icons/bi';
import animationData from '../../assets/lottie/cta.json';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-center">
      <main className="flex flex-col md:flex-row gap-10 items-center md:items-start md:justify-evenly relative">
        <div className="md:mt-[100px] text-center md:text-left">
          <Title className="text-4xl mb-3">
            Pocket <span className="text-tremor-brand">Wide</span>
          </Title>
          <Text>Effortlessly Manage Your Expenses with Pocket Wide</Text>
          <Button
            role="link"
            className="mt-6 md:mt-10"
            variant="secondary"
            icon={BiBoltCircle}
            onClick={() => navigate('/login')}
          >
            Get Started Now
          </Button>
        </div>
        <Lottie
          animationData={animationData}
          className="h-[300px] md:h-[400px]"
        />
      </main>
      <div className="flex justify-center mb-10">
        <Icon
          icon={BiDownArrow}
          className="mx-aut o animate-bounce opacity-50"
        />
      </div>
    </div>
  );
}

export default Hero;
