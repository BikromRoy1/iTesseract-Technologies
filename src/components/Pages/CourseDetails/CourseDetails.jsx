import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseVidoes from './CourseVidoes/CourseVidoes';
import DetailsBanner from './DetailsBanner/DetailsBanner';

const CourseDetails = () => {
  const course = useLoaderData();
  const singleCourse = course.data;

  return (
    <div>
      <DetailsBanner HeaderCourse={singleCourse}></DetailsBanner>
      <CourseVidoes mainCourse={singleCourse}></CourseVidoes>
    </div>
  );
};

export default CourseDetails;
