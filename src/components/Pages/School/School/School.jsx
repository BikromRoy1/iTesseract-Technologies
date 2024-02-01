import React from 'react';
import Breadcrumb from '../../../Breadcrumb/Breadcrumb';
import ContactFrom from '../../ContactUS/ContactFrom/ContactFrom';
import Level from '../Level/Level';
import SchoolBanner from '../SchoolBanner/SchoolBanner';
import SchoolBannerimages from '../../../../Images/school-banner.jpg';
import Skill from '../Skill/Skill';
import LearningPath from './LearningPath/LearningPath';
import SchoolTeacher from './SchoolTeacher/SchoolTeacher';

const School = () => {
  return (
    <div>
      <Breadcrumb
        title='মাধ্যমিক কোর্স '
        subTitle='মাধ্যমিক কোর্স '
        slgs='/school'
        img={SchoolBannerimages}
      ></Breadcrumb>

      <Level></Level>
      <SchoolBanner></SchoolBanner>
      <Skill></Skill>
      <LearningPath></LearningPath>
      <SchoolTeacher></SchoolTeacher>
      <ContactFrom title='কোর্স সম্পর্কিত যেকোনো তথ্যের জন্য যোগাযোগ করুন'></ContactFrom>
    </div>
  );
};

export default School;
