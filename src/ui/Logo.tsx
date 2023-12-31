import { FC, useState } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';

interface Props extends HTMLMotionProps<'img'> {
  gradient?: boolean;
}
const Logo: FC<Props> = ({ gradient, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <motion.img
      initial={{ opacity: 0, y: -5 }}
      animate={loaded ? { opacity: 1, y: 0 } : undefined}
      src={gradient ? '/logo-gradient.svg' : '/logo.svg'}
      onLoad={() => setLoaded(true)}
      {...props}
    />
  );
};

export default Logo;
