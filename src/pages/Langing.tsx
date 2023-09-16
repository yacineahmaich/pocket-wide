import Features from '../features/landing/Features';
import Header from '../features/landing/Header';
import Hero from '../features/landing/Hero';

function Landing() {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto">
        <Header />
        <Hero />
        <Features />
      </div>
    </div>
  );
}

export default Landing;
