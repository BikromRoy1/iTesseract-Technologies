import React from 'react';
import Registrationbanner from '../../../Images/registion.jpg';
import Breadcrumb from '../../Breadcrumb/Breadcrumb';

const Registration = () => {
  return (
    <div>
      <Breadcrumb
        title='নিবন্ধন ফর্ম'
        subTitle='নিবন্ধন ফর্ম'
        img={Registrationbanner}
        slgs='/registration'
      ></Breadcrumb>
      
    </div>
  );
};

export default Registration;
