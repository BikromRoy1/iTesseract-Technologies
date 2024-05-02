import React from 'react';
import Universitybanner from '../../../Images/university.jpg';
import Breadcrumb from '../../Breadcrumb/Breadcrumb';
import Teacher from '../RecordedCourse/Teacher/Teacher';
import LiveAdmissionBanner from './LiveAdmissionBanner/LiveAdmissionBanner';
import LiveCourseCard from './LiveCourseCard/LiveCourseCard';

const University = () => {
  return (
    <div>
      <Breadcrumb
        title='লাইভ কোর্স'
        subTitle='লাইভ কোর্স'
        slgs='/university'
        img={Universitybanner}
      ></Breadcrumb>
      <LiveCourseCard></LiveCourseCard>
      <LiveAdmissionBanner></LiveAdmissionBanner>
      <Teacher></Teacher>
    </div>
  );
};

export default University;
