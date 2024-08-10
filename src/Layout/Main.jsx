import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footers from '../components/Common/Footers/Footers';
import Header from '../components/Common/Header/Header';
import TopHeader from '../components/Common/TopHeader/TopHeader';
import GoToTop from '../components/GoToTop/GoToTop';
import Loader from '../components/Loader/Loader';
import ScrollToTopOnPageChange from '../components/ScrollToTopOnPageChange/ScrollToTopOnPageChange';

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });
  return (
    <div>
      <ScrollToTopOnPageChange />
      <GoToTop />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <TopHeader></TopHeader>
          <Header></Header>
          <Outlet></Outlet>
          <Footers></Footers>
        </>
      )}
    </div>
  );
};

export default Main;
