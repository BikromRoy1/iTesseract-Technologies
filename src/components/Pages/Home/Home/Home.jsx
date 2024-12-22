import React from 'react';
import NewBanner from '../Banner/NewBanner';
import ChiefAdvisor from '../ChiefAdvisor/ChiefAdvisor';
import ItesseractAbout from '../ItesseractAbout/ItesseractAbout';
import Kits from '../Kits/Kits';
import Partner from '../Partner/Partner';
import Subscribe from '../Subscribe/Subscribe';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
  return (
    <div>
      <NewBanner></NewBanner>

      <Kits></Kits>
      <ItesseractAbout></ItesseractAbout>
      <ChiefAdvisor></ChiefAdvisor>
      <Testimonial></Testimonial>
      <Subscribe></Subscribe>
      <Partner></Partner>
    </div>
  );
};

export default Home;
