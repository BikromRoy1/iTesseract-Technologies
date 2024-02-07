import React from 'react';
import SchoolBannerimages from '../../../../Images/school-banner.jpg';
import Breadcrumb from '../../../Breadcrumb/Breadcrumb';
import ContactFrom from '../../ContactUS/ContactFrom/ContactFrom';
import Level from '../Level/Level';
import LevelTwo from '../LevelTwo/LevelTwo';
import SchoolBanner from '../SchoolBanner/SchoolBanner';
import Skill from '../Skill/Skill';
import LearningPath from './LearningPath/LearningPath';
import SchoolTeacher from './SchoolTeacher/SchoolTeacher';
import SkillTwo from '../Skill/SkillTwo';

const School = () => {
  return (
    <div>
      <Breadcrumb
        title='মাধ্যমিক কোর্স '
        subTitle='মাধ্যমিক কোর্স '
        slgs='/school'
        img={SchoolBannerimages}
      ></Breadcrumb>

      <LevelTwo></LevelTwo>
      
      {/* <Level></Level> */}
      <SchoolBanner></SchoolBanner>
      <SkillTwo></SkillTwo>
      <Skill></Skill>
      <LearningPath></LearningPath>
      <SchoolTeacher></SchoolTeacher>
      <ContactFrom title='কোর্স সম্পর্কিত যেকোনো তথ্যের জন্য যোগাযোগ করুন'></ContactFrom>
    </div>
  );
};

export default School;
