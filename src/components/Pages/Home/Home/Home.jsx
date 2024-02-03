import React from 'react';
import NewBanner from '../Banner/NewBanner';
import Contact from '../Contact/Contact';
import ItesseractAbout from '../ItesseractAbout/ItesseractAbout';
import Kits from '../Kits/Kits';
import Partner from '../Partner/Partner';
import Subscribe from '../Subscribe/Subscribe';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
  return (
    <div>
      {/* <Banner></Banner> */}
      <NewBanner></NewBanner>

      <Contact></Contact>
      <Kits></Kits>
      <ItesseractAbout></ItesseractAbout>
      <Testimonial></Testimonial>
      <Subscribe></Subscribe>
      <Partner></Partner>
    </div>
  );
};

export default Home;
