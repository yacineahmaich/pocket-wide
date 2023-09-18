import Features from '../features/landing/Features';
import Hero from '../features/landing/Hero';
import Discover from '../features/landing/Discover';
import Cta from '../features/landing/Cta';
import { Helmet } from 'react-helmet-async';

function Landing() {
  return (
    <>
      <Helmet title="Pocket Wide | Take Control of Your Expenses with Pocket Wide" />
      <Hero />
      <Features />
      <Discover />
      <Cta />
    </>
  );
}

export default Landing;
