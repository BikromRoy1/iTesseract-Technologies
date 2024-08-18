import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsCommand } from 'react-icons/bs';
import { FaWifi } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import '../../Home/Kits/Kits.css';

import { apiUrl } from '../../../../config/config';

const UniSkills = () => {
  const [openTab, setOpenTab] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/v1/online-courses`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const onlineCourses = data.data;

  console.log(onlineCourses);

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
    <section className='pb-14 pt-[40px]'>
      <div className='container p-6 mx-auto'>
        <div className='section-header'>
          <h4>বিশ্ববিদ্যালয় কোর্স</h4>
          <h2>
            {' '}
            কোর্স দক্ষতা <span className='title-gradient'>আপনি পাবেন</span>
          </h2>
          <p>
            অধ্যয়ন শুরু করার জন্য আপনার যা দরকার তা হল সঠিক মনের ফ্রেমে।
            আইটেসারেক্ট টেকনোলিজস-এর একজন ছাত্র হিসাবে, আপনি অসামান্য প্রশিক্ষক
            এবং কম্পিউটার বিজ্ঞানে দক্ষতা অর্জনের জন্য একটি সু-প্রতিষ্ঠিত
            পাঠ্যক্রম দ্বারা পরিচালিত হবেন।
          </p>
        </div>

        <div className='flex items-center gap-[12px] justify-center flex-wrap mb-[30px]'>
          {onlineCourses?.map((tabItem, index) => (
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

        {onlineCourses?.map((item, index) => (
          <div
            id={item?.name}
            className={openTab === index ? 'block' : 'hidden'}
          >
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 p-6'>
              {item?.online_courses?.map((course) => (
                <div key={course?.id} className='single-card'>
                  <div className='course-card'>
                    <div className='course-card-img'>
                      <img
                        src={`${apiUrl}/${course?.image}`}
                        loading='lazy'
                        alt='university'
                      />
                      <div className='thumbnail-content'>
                        <span className='bg-[#ffbb2c] text-white rounded-[2px] inline-block px-[12px] font-semibold text-[15px] leading-[26px] m-[5px]'>
                          {course?.discount}% OFF
                        </span>
                      </div>
                    </div>
                    <div className='course-card-body'>
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
                      <h4 className='font-semibold text-[#124265] capitalize kits-title-2'>
                        {course.course_name}
                      </h4>
                      <div className='course-timing flex items-center gap-5 pb-4'>
                        <div className='flex items-center gap-2'>
                          <BsCommand className='text-[#1bb57b] w-5 h-5' />
                          <h4 className='font-semibold text-primary-color'>
                            {zeroPad(course?.modules?.length)}-টি পাঠ
                          </h4>
                        </div>
                        <div className='flex items-center gap-2'>
                          <FiUsers className='text-[#4AB2FD] w-5 h-5' />
                          <h4 className='font-semibold text-primary-color'>
                            {course.enroll_student} Students
                          </h4>
                        </div>
                        <div className='flex items-center gap-2'>
                          <IoDocumentTextOutline className='text-[#9333ea] w-5 h-5' />
                          <h4 className='font-semibold text-primary-color'>
                            {course.project} Tests
                          </h4>
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
                            <button className='custom-button text-[15px] font-semibold px-[16px] py-[5px] text-white rounded-md flex items-center gap-1'>
                              এখান থেকে শিখুন{' '}
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
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UniSkills;
