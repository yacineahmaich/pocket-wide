import { Button, Icon, Text, Title } from '@tremor/react';
import Header from '../features/landing/Header';
import Lottie from 'lottie-react';
import animationData from '../assets/lottie/cta.json';
import { BiBoltCircle, BiMouse } from 'react-icons/bi';

function Landing() {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto">
        <Header />
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
    </div>
  );
}

export default Landing;
