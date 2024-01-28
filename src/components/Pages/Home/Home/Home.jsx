import React from 'react';
import Banner from '../Banner/Banner';
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
      <Partner></Partner>
      <Contact></Contact>
      <Kits></Kits>
      <Testimonial></Testimonial>
      <ItesseractAbout></ItesseractAbout>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
