import React from "react";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import ItesseractAbout from "../ItesseractAbout/ItesseractAbout";
import Kits from "../Kits/Kits";
import Partner from "../Partner/Partner";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Partner></Partner>
      <Contact></Contact>
      <Kits></Kits>
      <ItesseractAbout></ItesseractAbout>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
