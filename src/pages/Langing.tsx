import Features from '../features/landing/Features';
import Header from '../features/landing/Header';
import Hero from '../features/landing/Hero';
import Discover from '../features/landing/Discover';
import Cta from '../features/landing/Cta';

function Landing() {
  return (
    <div
      className="bg-fixed bg-gray-50 bg-cover pt-16"
      style={{ backgroundImage: 'url(/landing-bg.jpg)' }}
    >
      <div className="container mx-auto">
        <Header />
        <Hero />
        <Features />
        <Discover />
        <Cta />
      </div>
    </div>
  );
}

export default Landing;
