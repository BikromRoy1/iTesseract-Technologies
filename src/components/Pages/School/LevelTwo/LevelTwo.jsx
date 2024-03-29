import React, { useState } from 'react';
import { FaWifi } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import course01 from '../../../../Images/course-01.jpg';
import course02 from '../../../../Images/course-02.jpg';
import levelOne from '../../../../Images/icons/apps-line.svg';
import levelThree from '../../../../Images/icons/board.svg';
import levelTwo from '../../../../Images/icons/draft-line.svg';
import studentTwo from '../../../../Images/teacher/student-01.png';
import student from '../../../../Images/teacher/student-02.png';
import './LevelTwo.css';

const LevelTwo = () => {
  const [openTab, setOpenTab] = useState(1);
  const levels = [
    {
      course_id: '01',
      course: 'কম্পিউটার প্রোগ্রামিং ফান্ডামেন্টাল',
      courseBanner: course01,
      price: '৩৪,৭০০',
      courseOutput: 'Offline',
      modules: {
        number_of_lessons: 12,
        number_of_projects: 8,
        number_of_assignments: 4,
      },
      teacherName: 'তাসনিম জামান',
      teacherImage: student,
      courseType: 'Programming',
    },
    {
      course_id: '02',
      course: 'মোবাইল অ্যাপ্লিকেশন ও ওয়েবসাইট ডেভেলপমেন্ট',
      courseBanner: course02,
      price: '১৯,৫০০',
      courseOutput: 'Offline',
      modules: {
        number_of_lessons: 12,
        number_of_projects: 8,
        number_of_assignments: 4,
      },
      teacherName: 'অন্তরা জানা',
      teacherImage: studentTwo,
      courseType: 'Programming',
    },
    {
      course_id: '03',
      course: 'রোবোটিক্স এবং এমবেডেড সিস্টেম',
      courseBanner: course01,
      price: '১৫,৫০০',
      courseOutput: 'Offline',
      modules: {
        number_of_lessons: 12,
        number_of_projects: 6,
        number_of_assignments: 4,
      },
      teacherName: 'হাসনাত মহিউদ্দিন',
      teacherImage: studentTwo,
    },
    {
      course_id: '04',
      course: 'পাইথন প্রোগ্রামিং এবং ডেটা সায়েন্স',
      courseBanner: course02,
      price: '৫০,০০০',
      courseOutput: 'Offline',
      modules: {
        number_of_lessons: 12,
        number_of_projects: 4,
        number_of_assignments: 4,
      },
      teacherName: 'মেহজাবিন রহমান',
      teacherImage: studentTwo,
    },
    {
      course_id: '05',
      course: 'আইওটি এবং ডেটা সায়েন্স',
      courseBanner: course02,
      price: '২৬,০০০',
      courseOutput: 'Offline',
      modules: {
        number_of_lessons: 12,
        number_of_projects: 10,
        number_of_assignments: 4,
      },
      teacherName: 'ফারহানা ইসলাম চৌধুরী',
      teacherImage: studentTwo,
      courseType: 'Programming',
    },
    {
      course_id: '06',
      course: 'এআই এবং রোবোটিক্স ভিশন',
      courseBanner: course01,
      price: '২৩,৩৩৩',
      courseOutput: 'Offline',
      modules: {
        number_of_lessons: 12,
        number_of_projects: 2,
        number_of_assignments: 4,
      },
      teacherName: 'ফারিহা ফাইরুজ',
      teacherImage: studentTwo,
    },
  ];

  // Define the course type you want to filter by
  const courseTypeToFilter = 'Programming';

  // Filter the levels array based on the courseType
  const filteredCourses = levels.filter((course) => {
    return course.courseType === courseTypeToFilter;
  });

  console.log(filteredCourses);

  return (
    <section className='py-14'>
      <div className='container mx-auto'>
        <div className='section-header'>
          <h4>কোর্স লেভেল সমূহ</h4>
          <h2>
            প্রতিটি স্তরে
            <span className='title-gradient'> ০৬ টি পাঠ আছে</span>
          </h2>
        </div>

        <div className='flex items-center gap-[12px] justify-center flex-wrap mb-[30px]'>
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
              ডেভেলপমেন্ট
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
              এই & রোবোটিক্স
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
              গাণিতিক দক্ষতা
            </button>
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              setOpenTab(4);
            }}
            data-toggle='tab'
            href='#link4'
            role='tablist'
          >
            <button
              className={
                openTab === 4
                  ? 'text-[#fff] bg-[#1BB57B] button-shadow font-semibold leading-[1] text-[14px] md:text-[16px] border-none rounded-[30px] py-[10px] px-[13px] sm:py-[10px] sm:px-[13px] md:py-[14px] md:px-[30px]'
                  : 'text-[#6D6C80] bg-[#E6E9EF] font-semibold leading-[1] text-[16px] border-none rounded-[30px] py-[10px] px-[13px] sm:py-[10px] sm:px-[13px] md:py-[14px] md:px-[30px]'
              }
            >
              প্রোগ্রামিং
            </button>
          </a>
        </div>

        <div id='link1' className={openTab === 1 ? 'block' : 'hidden'}>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 p-6'>
            {levels
              ?.filter((level) => level.courseType === 'Programming')
              .map((level) => (
                <div key={level?.course_id} className='Level-items'>
                  <div className='bottom-shapes'>
                    <div className='shapes-raps'></div>
                  </div>
                  <div className='max-w-full mx-auto overflow-hidden md:max-w-full'>
                    <div className=''>
                      <div className=''>
                        <img
                          className='h-full w-full object-cover level-image'
                          loading='lazy'
                          src={level?.courseBanner}
                          alt={level?.course}
                        />
                      </div>
                      <div className='p-6'>
                        <div className='price-list flex items-center justify-between pb-[12px]'>
                          <div className='flex items-center'>
                            <h3 className='current-price primary-color font-bold text-[22px] tracking-[0.20000000298023224px]'>
                              ৳ {level?.price}
                            </h3>
                          </div>
                          <div className='flex items-center gap-2'>
                            <FaWifi className='text-[#4AB2FD] w-5 h-5' />
                            <h5 className='text-primary-color text-[17px] font-semibold'>
                              {level?.courseOutput}
                            </h5>
                          </div>
                        </div>
                        <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
                          <h4 className='text-[21px] mb-[15px] font-bold text-[#1c1c24] leading-[1.2]'>
                            {level?.course}
                          </h4>
                        </div>

                        <div className='level-content flex items-center gap-5 mb-4'>
                          <div className='level-content-item flex items-center gap-2'>
                            <img
                              className='w-[18px] h-[18px]'
                              src={levelOne}
                              loading='lazy'
                              alt='icons'
                            />
                            <h5 className='text-[#1c1c24] font-medium text-base'>
                              {level?.modules?.number_of_lessons}টি পাঠ
                            </h5>
                          </div>
                          <div className='level-content-item flex items-center gap-2'>
                            <img
                              className='w-[18px] h-[18px]'
                              src={levelTwo}
                              loading='lazy'
                              alt='icons'
                            />
                            <h5 className='text-[#1c1c24] font-medium text-base'>
                              {level?.modules?.number_of_projects}টি প্রজেক্টস
                            </h5>
                          </div>
                          <div className='level-content-item flex items-center gap-2'>
                            <img src={levelThree} loading='lazy' alt='icons' />
                            <h5 className='text-[#1c1c24] font-medium text-base'>
                              {level?.modules?.number_of_assignments}টি কাজ
                            </h5>
                          </div>
                        </div>
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center gap-2'>
                            <img
                              src={level?.teacherImage}
                              className='rounded-full w-10 h-10'
                              loading='lazy'
                              alt={level?.teacherName}
                            />
                            <div>
                              <h2 className='font-semibold text-[17px] tracking-[0.20000000298023224px]'>
                                {level?.teacherName}
                              </h2>
                            </div>
                          </div>
                          <div>
                            <Link to='/courseDetails'>
                              <button className='custom-button font-semibold px-[17px] py-[5px] text-white rounded-md flex items-center gap-1'>
                                বিস্তারিত{' '}
                                <svg
                                  stroke='currentColor'
                                  fill='currentColor'
                                  strokeWidth='0'
                                  viewBox='0 0 512 512'
                                  height='18'
                                  width='18'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <path
                                    fill='none'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='48'
                                    d='M268 112l144 144-144 144m124-144H100'
                                  ></path>
                                </svg>
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div id='link2' className={openTab === 2 ? 'block' : 'hidden'}>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 p-6'>
            {levels?.map((level) => (
              <div key={level?.course_id} className='Level-items'>
                <div className='bottom-shapes'>
                  <div className='shapes-raps'></div>
                </div>
                <div className='max-w-full mx-auto overflow-hidden md:max-w-full'>
                  <div className=''>
                    <div className=''>
                      <img
                        className='h-full w-full object-cover level-image'
                        loading='lazy'
                        src={level?.courseBanner}
                        alt={level?.course}
                      />
                    </div>
                    <div className='p-6'>
                      <div className='price-list flex items-center justify-between pb-[12px]'>
                        <div className='flex items-center'>
                          <h3 className='current-price primary-color font-bold text-[22px] tracking-[0.20000000298023224px]'>
                            ৳ {level?.price}
                          </h3>
                        </div>
                        <div className='flex items-center gap-2'>
                          <FaWifi className='text-[#4AB2FD] w-5 h-5' />
                          <h5 className='text-primary-color text-[17px] font-semibold'>
                            {level?.courseOutput}
                          </h5>
                        </div>
                      </div>
                      <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
                        <h4 className='text-[21px] mb-[15px] font-bold text-[#1c1c24] leading-[1.2]'>
                          {level?.course}
                        </h4>
                      </div>

                      <div className='level-content flex items-center gap-5 mb-4'>
                        <div className='level-content-item flex items-center gap-2'>
                          <img
                            className='w-[18px] h-[18px]'
                            src={levelOne}
                            loading='lazy'
                            alt='icons'
                          />
                          <h5 className='text-[#1c1c24] font-medium text-base'>
                            {level?.modules?.number_of_lessons}টি পাঠ
                          </h5>
                        </div>
                        <div className='level-content-item flex items-center gap-2'>
                          <img
                            className='w-[18px] h-[18px]'
                            src={levelTwo}
                            loading='lazy'
                            alt='icons'
                          />
                          <h5 className='text-[#1c1c24] font-medium text-base'>
                            {level?.modules?.number_of_projects}টি প্রজেক্টস
                          </h5>
                        </div>
                        <div className='level-content-item flex items-center gap-2'>
                          <img src={levelThree} loading='lazy' alt='icons' />
                          <h5 className='text-[#1c1c24] font-medium text-base'>
                            {level?.modules?.number_of_assignments}টি কাজ
                          </h5>
                        </div>
                      </div>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                          <img
                            src={level?.teacherImage}
                            className='rounded-full w-10 h-10'
                            loading='lazy'
                            alt={level?.teacherName}
                          />
                          <div>
                            <h2 className='font-semibold text-[17px] tracking-[0.20000000298023224px]'>
                              {level?.teacherName}
                            </h2>
                          </div>
                        </div>
                        <div>
                          <Link to='/courseDetails'>
                            <button className='custom-button font-semibold px-[17px] py-[5px] text-white rounded-md flex items-center gap-1'>
                              বিস্তারিত{' '}
                              <svg
                                stroke='currentColor'
                                fill='currentColor'
                                strokeWidth='0'
                                viewBox='0 0 512 512'
                                height='18'
                                width='18'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  fill='none'
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  strokeWidth='48'
                                  d='M268 112l144 144-144 144m124-144H100'
                                ></path>
                              </svg>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div id='link3' className={openTab === 3 ? 'block' : 'hidden'}>
          <code>link3</code>
        </div>
        <div id='link4' className={openTab === 4 ? 'block' : 'hidden'}>
          <code>link4</code>
        </div>
      </div>
    </section>
  );
};

export default LevelTwo;
