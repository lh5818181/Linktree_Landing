import React from 'react';
import Hero from './components/Hero/Hero';
import Benefits from './components/Benefits/Benefits';
import Steps from './components/Steps/Steps';
import PriceBox from './components/PriceBox/PriceBox';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';

const App: React.FC = () => (
  <>
    <Hero />
    <Benefits />
    <Steps />
    <PriceBox />
    <CTA />
    <Footer />
  </>
);

export default App;
