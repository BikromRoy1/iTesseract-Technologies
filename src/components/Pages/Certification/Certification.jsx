import React from 'react';
import certificationBanner from '../../../Images/certifucation.jpg';
import Breadcrumb from '../../Breadcrumb/Breadcrumb';
import Questions from '../../Common/Questions/Questions';
import GetCertificate from './GetCertificate/GetCertificate';
import Process from './Process/Process';

const Certification = () => {
  return (
    <div>
      <Breadcrumb
        title='সার্টিফিকেশন'
        subTitle='আইটেসারেক্ট সার্টিফিকেশন'
        slgs='/certification'
        img={certificationBanner}
      ></Breadcrumb>
      <GetCertificate></GetCertificate>
      <Process></Process>
      <Questions></Questions>
    </div>
  );
};

export default Certification;
