import React from 'react';
import CourseDescription from '../CourseDescription/CourseDescription';
import Material from '../Material/Material';
import PricePart from '../PricePart/PricePart';
import TagLine from '../TagLine/TagLine';
import Videos from '../Videos/Videos';

const CourseVidoes = () => {
  return (
    <section id='videosCurriculum'>
      <div className=' p-6 container mx-auto'>
        <div className='flex flex-col gap-4 md:flex-row md:gap-12 md:pt-10'>
          <div className='md:max-w-[calc(100%_-_448px)] mx-md:order-2'>
            <CourseDescription></CourseDescription>
            <Videos></Videos>
          </div>
          <div className='w-full md:mb-10 md:max-w-[400px] mx-md:order-1'>
            <PricePart></PricePart>
            <Material></Material>
            <TagLine></TagLine>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseVidoes;
