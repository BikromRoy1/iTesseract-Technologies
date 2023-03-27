import React from 'react';
import Questions from '../../../Common/Questions/Questions';
import AboutUs from '../AboutUs/AboutUs';
import ClientTestimonial from '../Client/ClientTestimonial';
import FreeClass from '../FreeClass/FreeClass';

const AboutMain = () => {
  return (
    <div>
      <AboutUs></AboutUs>
      <FreeClass></FreeClass>
      <ClientTestimonial></ClientTestimonial>
      <Questions></Questions>
    </div>
  );
};

export default AboutMain;
