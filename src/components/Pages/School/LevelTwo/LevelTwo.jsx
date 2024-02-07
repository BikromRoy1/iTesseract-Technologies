import React from 'react';
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
  const levels = [
    {
      course_id: '01',
      course: 'কম্পিউটার প্রোগ্রামিং ফান্ডামেন্টাল',
      courseBanner: course01,
      price: '৩৪,৭০০',
      courseOutput: 'Online',
      modules: {
        number_of_lessons: 12,
        number_of_projects: 8,
        number_of_assignments: 4,
      },
      teacherName: 'তাসনিম জামান',
      teacherImage: student,
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
      courseOutput: 'Online',
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
      courseOutput: 'Online',
      modules: {
        number_of_lessons: 12,
        number_of_projects: 10,
        number_of_assignments: 4,
      },
      teacherName: 'ফারহানা ইসলাম চৌধুরী',
      teacherImage: studentTwo,
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
                        <Link to='/'>
                          <button className='theme-primary-color-bg font-semibold px-3 py-1 text-white rounded-md flex items-center gap-1'>
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

          {/* <div className='Level-items'>
            <div className='bottom-shapes'>
              <div className='shapes-raps'></div>
            </div>
            <div className='max-w-full mx-auto overflow-hidden md:max-w-full'>
              <div className=''>
                <div className=''>
                  <img
                    className='h-full w-full object-cover level-image'
                    loading='lazy'
                    src={course01}
                    alt='Level-image'
                  />
                </div>
                <div className='p-6'>
                  <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
                    <h4 className='text-[19px] mb-[15px] font-bold text-[#1c1c24] leading-[1.2]'>
                      কম্পিউটার প্রোগ্রামিং ফান্ডামেন্টাল
                    </h4>
                  </div>

                  <p className='text-[#888888] tracking-[.20000000298023224px] leading-[26px] pb-[15px]'>
                    শিক্ষার্থীদের মৌলিক যুক্তিবিদ্যা, কোডিং বোঝা এবং প্রোগ্রামিং
                    ভাষার মৌলিক বিষয়গুলির সাথে পরিচিত করা হবে। বিট বিট করে তারা
                    খুব সহজ গ্রাফিকাল প্রোগ্রামিং এর সাহায্যে গেম ডেভেলপমেন্ট
                    করতে সক্ষম হবে।
                  </p>
                  <div className='level-content flex items-center gap-5 mb-2'>
                    <div className='level-content-item flex items-center gap-2'>
                      <img
                        className='w-[18px] h-[18px]'
                        src={levelOne}
                        loading='lazy'
                        alt='icons'
                      />
                      <h5 className='text-[#1c1c24] font-medium text-base'>
                        12টি পাঠ
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
                        8টি প্রজেক্টস
                      </h5>
                    </div>
                    <div className='level-content-item flex items-center gap-2'>
                      <img src={levelThree} loading='lazy' alt='icons' />
                      <h5 className='text-[#1c1c24] font-medium text-base'>
                        4টি কাজ
                      </h5>
                    </div>
                  </div>
                  <div className='flex items-center gap-2 mb-2'>
                    <img
                      className='w-[19px] h-[19px]'
                      loading='lazy'
                      src={broadcast}
                      alt='বয়স'
                    />
                    <h2 className='text-gray-500'>
                      বয়স 6 এবং তার বেশি, যারা আগ্রহী
                    </h2>
                  </div>
                  <div className='flex items-center flex-wrap gap-2'>
                    <h4 className='text-gray-500 font-medium'>
                      আপনি যে দক্ষতাগুলি পান:
                    </h4>
                    <h4 className='bg-[#e7e7ff] uppercase mb-0 pb-0 text-[#696cff] tracking-[0.20000000298023224px] font-semibold px-[6px] py-[2px] rounded-[6px] text-[15px]'>
                      কোডিং
                    </h4>
                    <h4 className='bg-[#e8fadf] uppercase mb-0 pb-0 text-[#71dd37] tracking-[0.20000000298023224px] font-semibold px-[6px] py-[2px] rounded-[6px] text-[15px]'>
                      লজিক
                    </h4>
                    <h4 className='bg-[#d7f5fc] uppercase mb-0 pb-0 text-[#03c3ec] tracking-[0.20000000298023224px] font-semibold px-[6px] py-[2px] rounded-[6px] text-[15px]'>
                      গেম ডেভেলপমেন্ট
                    </h4>
                    <h4 className='bg-[#ffeef3] uppercase mb-0 pb-0 text-[#f8285a] tracking-[0.20000000298023224px] font-semibold px-[6px] py-[2px] rounded-[6px] text-[15px]'>
                      স্ক্র্যাচ
                    </h4>
                    <h4 className='bg-[#fff2d6] uppercase mb-0 pb-0 text-[#ffab00] tracking-[0.20000000298023224px] font-semibold px-[6px] py-[2px] rounded-[6px] text-[15px]'>
                      প্রোগ্রামিং বেসিক
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default LevelTwo;
