import { Title, Button, Icon, Text } from '@tremor/react';
import Lottie from 'lottie-react';
import { BiBoltCircle, BiDownArrow } from 'react-icons/bi';
import animationData from '../../assets/lottie/cta.json';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionTitle = motion(Title);
const MotionText = motion(Text);
const MotionButton = motion(Button);

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-center">
      <main className="flex flex-col md:flex-row gap-10 items-center md:items-start md:justify-evenly relative">
        <motion.div className="md:mt-[100px] text-center md:text-left">
          <MotionTitle
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.1,
              duration: .6,
            }}
            className="text-4xl mb-3"
          >
            Pocket <span className="text-tremor-brand">Wide</span>
          </MotionTitle>
          <MotionText
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.3,
              duration: .6,
            }}
          >
            Effortlessly Manage Your Expenses with Pocket Wide
          </MotionText>
          <MotionButton
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.5,
              duration: .6,
            }}
            role="link"
            className="mt-6 md:mt-10"
            variant="secondary"
            icon={BiBoltCircle}
            onClick={() => navigate('/login')}
          >
            Get Started Now
          </MotionButton>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            type: 'spring',
            stiffness: 60,
          }}
        >
          <Lottie
            animationData={animationData}
            className="h-[300px] md:h-[400px]"
          />
        </motion.div>
      </main>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="flex justify-center mb-10"
      >
        <Icon
          icon={BiDownArrow}
          className="mx-aut o animate-bounce opacity-50"
        />
      </motion.div>
    </div>
  );
}

export default Hero;
