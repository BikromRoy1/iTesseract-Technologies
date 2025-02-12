import React, { useState } from 'react';
import CourseDescription from '../CourseDescription/CourseDescription';
import Instructors from '../Instructors/Instructors';
import Material from '../Material/Material';
import PricePart from '../PricePart/PricePart';
import Reviews from '../Reviews/Reviews';
import TagLine from '../TagLine/TagLine';
import Videos from '../Videos/Videos';
import './CourseVidoes.css';

const CourseVidoes = ({ mainCourse }) => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <section id='videosCurriculum'>
      <div className=' p-6 container mx-auto'>
        <div className='flex flex-col gap-4 md:flex-row md:gap-12'>
          <div className='md:max-w-[calc(100%_-_448px)] mx-md:order-2'>
            <div className='flex items-center gap-[12px] justify-start flex-nowrap mb-[40px]'>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle='tab'
                href='#link1'
                role='tablist'
              >
                <button
                  className={
                    openTab === 1
                      ? 'text-[#fff] bg-[#1BB57B] button-shadow font-semibold leading-[1] text-[14px] md:text-[16px] border-none rounded-[30px] py-[10px] px-[13px] sm:py-[10px] sm:px-[13px] md:py-[14px] md:px-[30px]'
                      : 'text-[#6D6C80] bg-[#E6E9EF] font-semibold leading-[1] text-[14px] md:text-[16px] border-none rounded-[30px] py-[10px] px-[13px] sm:py-[10px] sm:px-[13px] md:py-[14px] md:px-[30px]'
                  }
                >
                  কোর্সের ওভারভিউ
                </button>
              </a>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle='tab'
                href='#link2'
                role='tablist'
              >
                <button
                  className={
                    openTab === 2
                      ? 'text-[#fff] bg-[#1BB57B] button-shadow font-semibold leading-[1] text-[14px] md:text-[16px] border-none rounded-[30px] py-[10px] px-[13px] sm:py-[10px] sm:px-[13px] md:py-[14px] md:px-[30px]'
                      : 'text-[#6D6C80] bg-[#E6E9EF] font-semibold leading-[1] text-[16px] border-none rounded-[30px] py-[10px] px-[13px] sm:py-[10px] sm:px-[13px] md:py-[14px] md:px-[30px]'
                  }
                >
                  কোর্সের পাঠ্যক্রম
                </button>
              </a>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle='tab'
                href='#link3'
                role='tablist'
              >
                <button
                  className={
                    openTab === 3
                      ? 'text-[#fff] bg-[#1BB57B] button-shadow font-semibold leading-[1] text-[14px] md:text-[16px] border-none rounded-[30px] py-[10px] px-[13px] sm:py-[10px] sm:px-[13px] md:py-[14px] md:px-[30px]'
                      : 'text-[#6D6C80] bg-[#E6E9EF] font-semibold leading-[1] text-[16px] border-none rounded-[30px] py-[10px] px-[13px] sm:py-[10px] sm:px-[13px] md:py-[14px] md:px-[30px]'
                  }
                >
                  কোর্স রিভিউ
                </button>
              </a>
            </div>

            <div id='link1' className={openTab === 1 ? 'block' : 'hidden'}>
              <CourseDescription mainCourse={mainCourse}></CourseDescription>
            </div>
            <div id='link2' className={openTab === 2 ? 'block' : 'hidden'}>
              <Videos mainCourse={mainCourse}></Videos>
            </div>
            <div id='link3' className={openTab === 3 ? 'block' : 'hidden'}>
              <Reviews mainCourse={mainCourse} />
            </div>
          </div>
          <div className='w-full md:mb-10 md:max-w-[400px] mx-md:order-1 -mt-0 lg:-mt-[300px] z-20'>
            <PricePart mainCourse={mainCourse}></PricePart>
            <Material mainCourse={mainCourse}></Material>
            <Instructors mainCourse={mainCourse}></Instructors>
            <TagLine mainCourse={mainCourse}></TagLine>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseVidoes;
