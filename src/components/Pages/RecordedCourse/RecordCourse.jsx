import React from 'react';
import SchoolBannerimages from '../../../Images/school-banner.jpg';
import Breadcrumb from '../../Breadcrumb/Breadcrumb';
import ContactFrom from '../ContactUS/ContactFrom/ContactFrom';
import RecordCourseCard from './RecordCourseCard/RecordCourseCard';
import RecordSkill from './RecordSkill/RecordSkill';
import RecordLearningPath from './RecordLearningPath/RecordLearningPath';
import RecordAdBanner from './RecordAdBanner/RecordAdBanner';
import Teacher from './Teacher/Teacher';

const School = () => {
  return (
    <div>
      <Breadcrumb
        title='রেকর্ডেড কোর্স '
        subTitle='রেকর্ডেড কোর্স '
        slgs='/school'
        img={SchoolBannerimages}
      ></Breadcrumb>

      <RecordCourseCard></RecordCourseCard>
      <RecordAdBanner></RecordAdBanner>
      <RecordSkill></RecordSkill>
      <RecordLearningPath></RecordLearningPath>
      <Teacher></Teacher>
      <ContactFrom title='কোর্স সম্পর্কিত যেকোনো তথ্যের জন্য যোগাযোগ করুন'></ContactFrom>
    </div>
  );
};

export default School;
