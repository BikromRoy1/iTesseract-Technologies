import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import animationContact from '../../../../Images/free-books.json';
import shapes04 from '../../../../Images/icons/shape-08.png';
import shapes02 from '../../../../Images/icons/shape-09.png';
import shapes01 from '../../../../Images/icons/shape-10.png';
import shapes03 from '../../../../Images/icons/shape-13.png';
import './Subscribe.css';

import Lottie from 'lottie-react';
import { apiUrl } from '../../../../config/config';

const Subscribe = () => {
  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const form = event.target;
  //   const email = form.email.value;

  //   try {
  //     const response = await axios.post(
  //       `${apiUrl}/api/v1/subscriber/store?email=${email}`
  //     );

  //     toast.success('ধন্যবাদ আমাদের সদস্য হওয়ার জন্য !', {
  //       autoClose: 2000,
  //     });
  //     form.reset();
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //     form.reset();
  //     toast.warning('আপনি আমাদের অলরেডি সদস্য হিসেবে আছেন !', {
  //       autoClose: 2000,
  //     });
  //   }
  // };

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/v1/courses`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const courses = data.data;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const studentName = form.studentname.value;
    const studentEmail = form.email.value;
    const studentPhone = form.phone.value;
    const studentAddress = form.address.value;
    const courseName = form.courseOption.value;

    try {
      const response = await axios.post(
        `${apiUrl}/api/v1/enroll/store?name=${studentName}&phone=${studentPhone}&email=${studentEmail}&address=${studentAddress}&course_id=${courseName}&level=`
      );
      toast.success(' ভর্তির  আবেদন জন্য ধন্যবাদ !', {
        autoClose: 2000,
      });
      form.reset();
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.warning('আপনি একবার নিবন্ধন করে ফেলেছেন  !', {
        autoClose: 3000,
      });
    }
  };

  return (
    <section id='subscribe-home' className='bg-gray-50 '>
      <div className='p-8 md:p-12 lg:px-16 subscribe-content container mx-auto'>
        {/* <div className='section-header'>
          <h2>
            সর্বশেষ নিউজ &{' '}
            <span className='title-gradient'>আপডেট পেতে আমাদের</span>{' '}
            নোটিফিকেশনে সাবস্ক্রাইব করুন।
          </h2>
        </div> */}

        {/* <div className='mx-auto max-w-xl'>
          <form onSubmit={handleSubmit} className='sm:flex sm:gap-4'>
            <div className='sm:flex-1'>
              <label htmlFor='email' className='sr-only'>
                Email
              </label>

              <input
                name='email'
                type='email'
                required
                placeholder='Email address'
                className='w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400'
              />
            </div>

            <button
              type='submit'
              className='group mt-4 flex w-full items-center justify-center gap-2  rounded-md custom-button px-[27px] py-[11px] text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto'
            >
              <span className='text-[17px] font-medium'> সাবস্ক্রাইব </span>

              <svg
                className='h-5 w-5'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M17 8l4 4m0 0l-4 4m4-4H3'
                />
              </svg>
            </button>
          </form>
        </div> */}

        <div className='section-header'>
          <h4>ফ্রি কলে পরামর্শ নিন</h4>
          <h2>
            ক্যারিয়ার কাউন্সিলরের
            <span className='title-gradient'> কাছ থেকে</span>
          </h2>
          <p>
            আপনি যেন সঠিক ক্যারিয়ার সিদ্ধান্ত নিতে পারেন, তার জন্য আমরা দিচ্ছি
            ফ্রি ক্যারিয়ার কাউন্সেলিং সাপোর্ট। ক্যারিয়ার নিয়ে আপনার বিভিন্ন
            প্রশ্নের উত্তর পাবেন অভিজ্ঞ ক্যারিয়ার কাউন্সেলরদের কাছ থেকে।
          </p>
        </div>

        <div className='lg:flex items-center'>
          <div className='lg:w-1/2'>
            <Lottie
              className='sm:w-full lg:w-[600px]'
              animationData={animationContact}
            ></Lottie>
          </div>

          <div className='mt-8 lg:w-1/2 lg:mt-0'>
            <h2 className='text-2xl font-extrabold mb-6'>
              <span className='theme-primary-color'>ফ্রি ডেমো ক্লাস বুক</span>
              <span className='title-gradient'> করতে রেজিস্ট্রেশন করো</span>
            </h2>
            <form
              onSubmit={handleSubmit}
              className='container flex flex-col mx-auto space-y-12'
            >
              <fieldset className='grid grid-cols-6 gap-6 '>
                <div className='grid grid-cols-6 gap-4 col-span-full lg:col-span-12'>
                  <div className='col-span-full sm:col-span-3'>
                    <input
                      id='studentname'
                      type='text'
                      name='studentname'
                      placeholder='শিক্ষার্থীর নাম'
                      className='w-full input-from-contorl px-3 py-2 rounded-md bg-white text-black'
                      required
                    />
                  </div>
                  <div className='col-span-full sm:col-span-3'>
                    <input
                      id='email'
                      type='email'
                      name='email'
                      placeholder='শিক্ষার্থীর ইমেইল'
                      className='w-full px-3 py-2 rounded-md input-from-contorl  text-gray-900'
                      required
                    />
                  </div>
                  <div className='col-span-full sm:col-span-3'>
                    <input
                      id='phone'
                      type='text'
                      name='phone'
                      placeholder='শিক্ষার্থীর নাম্বার'
                      className='w-full px-3 py-2 rounded-md input-from-contorl text-gray-900'
                      required
                    />
                  </div>
                  <div className='col-span-full sm:col-span-3'>
                    <select
                      name='courseOption'
                      id='courseOption'
                      className='w-full px-3 py-[6px] rounded-md input-from-contorl text-gray-900'
                      required
                    >
                      <option disabled selected className='text-xs' value='1'>
                        তোমার পছন্দের কোর্স সিলেক্ট করো
                      </option>
                      {courses?.map((course) => (
                        <option
                          className='text-xs'
                          key={course?.id}
                          value={course?.id}
                        >
                          {`${course?.course_name}`}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className='col-span-full'>
                    <textarea
                      id='address'
                      cols='10'
                      rows='4'
                      name='address'
                      placeholder='শিক্ষার্থীর এড্রেস'
                      className='w-full p-3 rounded-md input-from-contorl text-gray-900'
                      required
                    ></textarea>
                  </div>

                  <div className='col-span-full'>
                    <div className='text-center'>
                      <button
                        type='submit'
                        className='w-full px-8 py-3 font-semibold rounded-md custom-button text-white'
                      >
                        জমা দাও
                      </button>
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>

        <div className='md:block hidden'>
          <div className='shapes-01'>
            <img src={shapes01} loading='lazy' alt='shapes' />
          </div>
          <div className='shapes-02'>
            <img src={shapes02} loading='lazy' alt='shapes' />
          </div>
          <div className='shapes-03'>
            <img src={shapes04} loading='lazy' alt='shapes' />
          </div>
          <div className='shapes-04'>
            <img src={shapes03} loading='lazy' alt='shapes' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
