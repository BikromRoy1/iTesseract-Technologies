import React from 'react';
import NewBanner from '../Banner/NewBanner';
import ChiefAdvisor from '../ChiefAdvisor/ChiefAdvisor';
import HomeContact from '../HomeContact/HomeContact';
import ItesseractAbout from '../ItesseractAbout/ItesseractAbout';
import Kits from '../Kits/Kits';
import Partner from '../Partner/Partner';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
  return (
    <div>
      <NewBanner></NewBanner>
      <Kits></Kits>
      <ItesseractAbout></ItesseractAbout>
      <ChiefAdvisor></ChiefAdvisor>
      <Testimonial></Testimonial>
      <HomeContact />
      <Partner></Partner>
    </div>
  );
};

export default Home;
