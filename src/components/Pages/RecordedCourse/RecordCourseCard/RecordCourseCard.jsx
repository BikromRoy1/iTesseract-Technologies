import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaWifi } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import levelOne from '../../../../Images/icons/apps-line.svg';
import levelThree from '../../../../Images/icons/board.svg';
import levelTwo from '../../../../Images/icons/draft-line.svg';
import './RecordCourseCard.css';

import { apiUrl } from '../../../../config/config';

const LevelTwo = () => {
  const [openTab, setOpenTab] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/v1/offline-courses`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const oflineCourses = data.data;

  function formatNumberToBangla(number) {
    const banglaDigits = {
      0: '০',
      1: '১',
      2: '২',
      3: '৩',
      4: '৪',
      5: '৫',
      6: '৬',
      7: '৭',
      8: '৮',
      9: '৯',
    };

    // Convert number to string and replace digits with Bangla digits
    const banglaNumber = number
      .toString()
      .replace(/\d/g, (digit) => banglaDigits[digit]);

    // Add commas for formatting
    return banglaNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  // Function to zero-pad numbers less than 10
  const zeroPad = (num) => (num < 10 ? `0${num}` : num);

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
          {oflineCourses?.map((tabItem, index) => (
            <a
              key={tabItem.id}
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(index);
              }}
              data-toggle='tab'
              href={tabItem?.name}
              role='tablist'
            >
              <button
                className={
                  openTab === index
                    ? 'text-[#fff] bg-[#1BB57B] button-shadow font-semibold leading-[1] text-[14px] md:text-[16px] border-none rounded-[30px] py-[10px] px-[13px] sm:py-[10px] sm:px-[13px] md:py-[14px] md:px-[30px]'
                    : 'text-[#6D6C80] bg-[#E6E9EF] font-semibold leading-[1] text-[14px] md:text-[16px] border-none rounded-[30px] py-[10px] px-[13px] sm:py-[10px] sm:px-[13px] md:py-[14px] md:px-[30px]'
                }
              >
                {tabItem?.name}
              </button>
            </a>
          ))}
        </div>

        {oflineCourses?.map((item, index) => (
          <div
            id={item?.name}
            className={openTab === index ? 'block' : 'hidden'}
          >
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 p-6'>
              {item?.offline_courses?.map((course) => (
                <div key={course?.id} className='Level-items'>
                  <div className='bottom-shapes'>
                    <div className='shapes-raps'></div>
                  </div>
                  <div className='max-w-full mx-auto overflow-hidden md:max-w-full'>
                    <div className=''>
                      <div className='relative'>
                        <img
                          className='h-full w-full object-cover level-image'
                          loading='lazy'
                          src={`${apiUrl}/${course?.image}`}
                          alt=''
                        />
                        <div className='thumbnail-content absolute left-3 top-3 z-10'>
                          <span className='bg-[#ffbb2c] text-white rounded-[2px] inline-block px-[12px] font-semibold text-[15px] leading-[26px] m-[5px]'>
                            {course?.discount}% OFF
                          </span>
                        </div>
                      </div>
                      <div className='p-6'>
                        <div className='price-list flex items-center justify-between pb-[12px]'>
                          <div className='flex items-center'>
                            <h3 className='current-price primary-color font-bold text-[22px] tracking-[0.20000000298023224px]'>
                              ৳{' '}
                              {formatNumberToBangla(
                                course?.price
                                  ? course?.price.toLocaleString('en-US')
                                  : '0'
                              )}
                            </h3>
                          </div>
                          <div className='flex items-center gap-2'>
                            <FaWifi className='text-[#4AB2FD] w-5 h-5' />
                            <h5 className='text-primary-color text-[17px] font-semibold'>
                              {course.type}
                            </h5>
                          </div>
                        </div>
                        <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
                          <h4 className='text-[21px] mb-[15px] font-bold text-[#1c1c24] leading-[1.2]'>
                            {course.course_name}
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
                              {zeroPad(course?.modules?.length)}-টি পাঠ
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
                              {course.project} টি প্রজেক্টস
                            </h5>
                          </div>
                          <div className='level-content-item flex items-center gap-2'>
                            <img src={levelThree} loading='lazy' alt='icons' />
                            <h5 className='text-[#1c1c24] font-medium text-base'>
                              {course.enroll_student} শিক্ষার্থী
                            </h5>
                          </div>
                        </div>
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center gap-2'>
                            <img
                              src={`${apiUrl}/${course?.trainer?.image}`}
                              className='rounded-full w-10 h-10'
                              loading='lazy'
                              alt={course?.trainer?.name}
                            />
                            <div>
                              <h2 className='font-semibold text-[17px] tracking-[0.20000000298023224px]'>
                                {course?.trainer?.name}
                              </h2>
                            </div>
                          </div>
                          <div>
                            <Link to={`/course/${course?.slug}`}>
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
        ))}
      </div>
    </section>
  );
};

export default LevelTwo;
