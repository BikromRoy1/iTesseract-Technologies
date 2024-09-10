import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
  const getInfo = JSON.parse(localStorage.getItem('userInfo'));

  const location = useLocation();

  if (getInfo?.email) {
    return children;
  }
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
