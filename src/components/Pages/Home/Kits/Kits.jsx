import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsCommand } from 'react-icons/bs';
import { FaWifi } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Services from '../Services/Services';
import './Kits.css';

import { apiUrl } from '../../../../config/config';

const Kits = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/v1/courses`);
        setData(response.data);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false in case of an error
      }
    };
    fetchData();
  }, []);

  const courses = data.data;

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

  const calculateDaysUntilOffer = (offerDateStr) => {
    if (!offerDateStr) return null;

    console.log(offerDateStr);

    const offerDate = new Date(offerDateStr);
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const timeDiff = offerDate.getTime() - currentDate.getTime();

    // Convert the difference from milliseconds to days
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  };

  return (
    <section className='kits-course'>
      <div className='container px-6 py-10 mx-auto'>
        <div className='section-header'>
          <h2>
            রোবটিক্স ও প্রোগ্রামিং শেখার{' '}
            <span className='title-gradient'>সেরা কোর্স সমূহ</span>
          </h2>
          <p>
            বাংলাদেশে প্রথম আমরাই তিনটি ধাপে নিজস্ব রোবটিক্স টুলস দিয়ে প্রশিক্ষণ
            দিচ্ছে আইটেসারেক্ট
          </p>
        </div>

        <div className='grid grid-cols-1 gap-8  xl:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
          {loading ? (
            <>
              <div className='flex flex-col m-8 rounded-lg shadow-sm w-full animate-pulse h-96'>
                <div className='h-48 rounded-t bg-[#d1fae5]'></div>
                <div className='flex-1 px-4 py-8 space-y-4 sm:p-8 bg-[#ecfdf5]'>
                  <div className='w-full h-6 rounded bg-[#d1fae5]'></div>
                  <div className='w-full h-6 rounded bg-[#d1fae5]'></div>
                  <div className='w-3/4 h-6 rounded bg-[#d1fae5]'></div>
                </div>
              </div>
              <div className='flex flex-col m-8 rounded-lg shadow-sm w-full animate-pulse h-96'>
                <div className='h-48 rounded-t bg-[#d1fae5]'></div>
                <div className='flex-1 px-4 py-8 space-y-4 sm:p-8 bg-[#ecfdf5]'>
                  <div className='w-full h-6 rounded bg-[#d1fae5]'></div>
                  <div className='w-full h-6 rounded bg-[#d1fae5]'></div>
                  <div className='w-3/4 h-6 rounded bg-[#d1fae5]'></div>
                </div>
              </div>
              <div className='flex flex-col m-8 rounded-lg shadow-sm w-full animate-pulse h-96'>
                <div className='h-48 rounded-t bg-[#d1fae5]'></div>
                <div className='flex-1 px-4 py-8 space-y-4 sm:p-8 bg-[#ecfdf5]'>
                  <div className='w-full h-6 rounded bg-[#d1fae5]'></div>
                  <div className='w-full h-6 rounded bg-[#d1fae5]'></div>
                  <div className='w-3/4 h-6 rounded bg-[#d1fae5]'></div>
                </div>
              </div>
            </>
          ) : (
            courses?.slice(0, 6)?.map((item) => (
              <div key={item.id} className='single-card'>
                <div className='course-card'>
                  <div className='course-card-img'>
                    <Link to={`/course/${item?.slug}`}>
                      <img
                        src={`${apiUrl}/${item?.image}`}
                        loading='lazy'
                        alt={item?.course_name}
                      />
                    </Link>
                    <div className='thumbnail-content'>
                      {item?.discount > 0 && (
                        <span className='bg-[#ffbb2c] text-white rounded-[2px] inline-block px-[12px] font-semibold text-[15px] leading-[26px] m-[5px]'>
                          {item?.discount}% OFF
                        </span>
                      )}
                    </div>
                  </div>
                  <div className='course-card-body'>
                    <div className='price-list flex items-center justify-between pb-[12px]'>
                      <div className='flex items-center gap-2'>
                        <h3 className='current-price primary-color font-bold text-[22px] tracking-[0.20000000298023224px]'>
                          ৳{' '}
                          {formatNumberToBangla(
                            item?.discount_price && item?.offer_date
                              ? item?.discount_price?.toLocaleString('en-US')
                              : item?.price?.toLocaleString('en-US') || '0'
                          )}
                        </h3>
                        {item?.discount_price && item?.offer_date ? (
                          <span className='second-price text-gray-500 font-bold'>
                            <del>
                              {formatNumberToBangla(
                                item?.price
                                  ? item?.price?.toLocaleString('en-US')
                                  : '0'
                              )}
                            </del>
                          </span>
                        ) : null}
                      </div>
                      <div className='flex items-center gap-2'>
                        <FaWifi className='text-[#4AB2FD] w-5 h-5' />
                        <h5 className='text-primary-color text-[17px] font-semibold'>
                          {item?.type}
                        </h5>
                      </div>
                    </div>
                    <Link to={`/course/${item?.slug}`}>
                      <h4 className='font-semibold text-[#124265] capitalize kits-title-2'>
                        {item?.course_name}
                      </h4>
                    </Link>
                    <div className='course-timing flex items-center gap-5 pb-4'>
                      <div className='flex items-center gap-2'>
                        <BsCommand className='text-[#1bb57b] w-5 h-5 font-bold' />
                        <h4 className='font-semibold text-primary-color'>
                          {zeroPad(item?.modules?.length)}-টি পাঠ
                        </h4>
                      </div>
                      <div className='flex items-center gap-2'>
                        <FiUsers className='text-[#4AB2FD] w-5 h-5' />
                        <h4 className='font-semibold text-primary-color'>
                          {item?.enroll_student !== undefined &&
                          item?.enroll_student !== null
                            ? item.enroll_student
                            : 0}{' '}
                          Students
                        </h4>
                      </div>
                      <div className='flex items-center gap-2'>
                        <IoDocumentTextOutline className='text-[#9333ea] w-5 h-5' />
                        <h4 className='font-semibold text-primary-color'>
                          {item?.project !== undefined && item?.project !== null
                            ? item?.project
                            : 0}{' '}
                          Tests
                        </h4>
                      </div>
                    </div>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-2'>
                        <img
                          src={`${apiUrl}/${item?.trainer?.image}`}
                          className='rounded-full w-10 h-10'
                          loading='lazy'
                          alt={item?.trainer?.name}
                        />
                        <div>
                          <h2 className='font-semibold text-[17px] tracking-[0.20000000298023224px]'>
                            {item?.trainer?.name}
                          </h2>
                        </div>
                      </div>
                      <div>
                        <Link to={`/course/${item?.slug}`}>
                          <button className='custom-button text-[15px] font-semibold px-[16px] py-[5px] text-white rounded-md flex items-center gap-1'>
                            এখান থেকে শিখুন
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
            ))
          )}
        </div>
      </div>
      <Services></Services>
    </section>
  );
};

export default Kits;
