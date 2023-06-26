import { FC, HTMLAttributes } from 'react';
import logoGradient from '../assets/logo-gradient.svg';
import logo from '../assets/logo.svg';

interface Props extends HTMLAttributes<HTMLImageElement> {
  children?: React.ReactNode;
  gradient?: boolean;
}
const Logo: FC<Props> = ({ gradient, ...props }) => {
  return <img src={gradient ? logoGradient : logo} {...props} />;
};

export default Logo;
