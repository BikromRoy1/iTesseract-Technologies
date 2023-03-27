import React from "react";
import { Outlet } from "react-router-dom";
import Footers from "../components/Common/Footers/Footers";
import Header from "../components/Common/Header/Header";
import TopHeader from "../components/Common/TopHeader/TopHeader";

const Main = () => {
  return (
    <div>
      <TopHeader></TopHeader>
      <Header></Header>
      <Outlet></Outlet>
      <Footers></Footers>
    </div>
  );
};

export default Main;
