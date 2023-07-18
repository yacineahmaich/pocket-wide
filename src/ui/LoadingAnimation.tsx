import Lottie from 'lottie-react';
import animationData from '../assets/lottie/searchingDocs.json';

function LoadingAnimation() {
  return <Lottie animationData={animationData} className="h-[400px]" />;
}

export default LoadingAnimation;
