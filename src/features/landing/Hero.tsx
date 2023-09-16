import { Title, Button, Icon, Text } from '@tremor/react';
import Lottie from 'lottie-react';
import { BiBoltCircle, BiMouse } from 'react-icons/bi';
import animationData from '../../assets/lottie/cta.json';

function Hero() {
  return (
    <div className='h-screen pt-16'>
      <main className="mt-[10vh] flex justify-evenly relative">
        <div className="mt-[100px]">
          <Title className="text-4xl mb-3">
            Pocket <span className="text-tremor-brand">Wide</span>
          </Title>
          <Text>Effortlessly Manage Your Expenses with Pocket Wide</Text>
          <Button className="mt-10" variant="secondary" icon={BiBoltCircle}>
            Get Started Now
          </Button>
        </div>
        <Lottie animationData={animationData} className="h-[400px]" />
      </main>
      <div className="flex justify-center mb-10">
        <Icon icon={BiMouse} className="mx-auto animate-bounce" />
      </div>
    </div>
  );
}

export default Hero;
