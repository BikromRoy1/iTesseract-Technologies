import React from 'react';
import Breadcrumb from '../../../Breadcrumb/Breadcrumb';
import Universitybanner from '../../../../Images/university.jpg';
import UniSkills from '../UniSkills/UniSkills';
import UniBanner from '../UniBanner/UniBanner';
import UniversityEduction from '../UniversityEduction/UniversityEduction';
import SchoolTeacher from '../../School/School/SchoolTeacher/SchoolTeacher';

const University = () => {
  return (
    <div>
      <Breadcrumb
        title='লাইভ কোর্স'
        subTitle='লাইভ কোর্স'
        slgs='/university'
        img={Universitybanner}
      ></Breadcrumb>
      <UniSkills></UniSkills>
      <UniBanner></UniBanner>
      {/* <UniversityEduction></UniversityEduction> */}
      <SchoolTeacher></SchoolTeacher>
    </div>
  );
};

export default University;
