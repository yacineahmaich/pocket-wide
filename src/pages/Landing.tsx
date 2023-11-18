import Features from '../features/landing/Features';
import Hero from '../features/landing/Hero';
import Discover from '../features/landing/Discover';
import Cta from '../features/landing/Cta';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

function Landing() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet title={`Pocket Wide | ${t('landing-page-title')}`} />
      <Hero />
      <Features />
      <Discover />
      <Cta />
    </>
  );
}

export default Landing;
