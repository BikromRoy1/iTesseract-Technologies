import React, { useEffect, useState } from 'react';
import banner from '../../../Images/thumbnail.jpg';
import DBLoader from '../../DBLoader/DBLoader';
import animation from '../../../Images/content.json';
import Lottie from 'lottie-react';

const MyLiveClass = () => {
  const [myLiveClass, setMyLiveClass] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Retrieve token from localStorage
    const getInfo = JSON.parse(localStorage.getItem('userInfo'));
    const token = getInfo?.token; // Assuming the token is stored inside `userInfo`

    // Fetch the API data with token in headers
    fetch('https://itesseract.com.bd/main/api/v1/live-class', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // Pass the token as a Bearer token
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setMyLiveClass(data); // Store the API data in the state
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []); // Empty dependency array means this useEffect runs only once when the component mounts

  if (loading) {
    return <DBLoader />;
  }

  if (error) {
    return (
      <p className='flex items-center justify-center h-[80vh] w-full capitalize font-medium text-base'>
        Error: {error.message}
      </p>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('bn-BD', options);
  };

  return (
    <section className='dashboard-section'>
      <div className='dashboard-box'>
        <div className='box-header flex justify-between items-center'>
          <div className='box-title relative '>লাইভ ক্লাস</div>
        </div>
        <div className='p-[1.25rem]'>
          {myLiveClass?.data?.length > 0 ? (
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6'>
              {myLiveClass?.data?.map((lives) => (
                <div>
                  <div className='h-full'>
                    <div className='space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-2 w-full'>
                      <div className='flex flex-col rounded-lg bg-white sm:flex-row items-start w-full'>
                        <img
                          className='m-2 h-36 w-44 rounded-md border object-cover object-center'
                          src={banner}
                          alt='image'
                        />
                        <div className='w-full'>
                          <div className='border-b border-dashed pb-4 mb-4 mx-4'>
                            <div className='w-full pt-1 pb-4'>
                              <h4 className='font-bold text-lg primary-color tracking-[0.20000000298023224px] pb-1'>
                                কোর্স নাম :- {lives?.course?.course_name}
                              </h4>
                              <h6 className=' text-gray-600 font-medium text-[15px]'>
                                {lives?.title}
                              </h6>
                            </div>
                            <div>
                              <ul className='flex flex-wrap justify-start gap-3 md:gap-4'>
                                <li className='flex items-center gap-1 md:gap-2'>
                                  <svg
                                    width='17px'
                                    height='17px'
                                    fill='#1bb57b'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 512 512'
                                  >
                                    <path d='M215.4 96L144 96l-36.2 0L96 96l0 8.8L96 144l0 40.4 0 89L.2 202.5c1.6-18.1 10.9-34.9 25.7-45.8L48 140.3 48 96c0-26.5 21.5-48 48-48l76.6 0 49.9-36.9C232.2 3.9 243.9 0 256 0s23.8 3.9 33.5 11L339.4 48 416 48c26.5 0 48 21.5 48 48l0 44.3 22.1 16.4c14.8 10.9 24.1 27.7 25.7 45.8L416 273.4l0-89 0-40.4 0-39.2 0-8.8-11.8 0L368 96l-71.4 0-81.3 0zM0 448L0 242.1 217.6 403.3c11.1 8.2 24.6 12.7 38.4 12.7s27.3-4.4 38.4-12.7L512 242.1 512 448s0 0 0 0c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64c0 0 0 0 0 0zM176 160l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z' />
                                  </svg>
                                  <span className='font-medium text-base text-[#9ca3af]'>
                                    <span className='primary-color'>
                                      ব্যাচ নাম :-
                                    </span>{' '}
                                    {lives?.batch?.name}
                                  </span>
                                </li>
                                <li className='flex items-center gap-1 md:gap-2'>
                                  <svg
                                    stroke='currentColor'
                                    fill='currentColor'
                                    strokeWidth='0'
                                    className='text-[#FD7E14]'
                                    width='17px'
                                    height='17px'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 448 512'
                                  >
                                    <path d='M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z' />
                                  </svg>{' '}
                                  <span className='font-medium text-base text-[#9ca3af]'>
                                    <span className='text-[#FD7E14]'>
                                      ক্লাস সময় :-{' '}
                                    </span>
                                    {lives?.date
                                      ? formatDate(lives?.date)
                                      : 'No Date'}
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class='mt-1 mx-4 flex items-center justify-start gap-2 md:mt-0 ng-tns-c81-0'>
                            <span className='primary-color font-medium text-base'>
                              লাইভ ক্লাস লিঙ্ক:-
                            </span>
                            <a
                              href={lives?.link}
                              target='_blank'
                              className='mr-2 inline-flex cursor-pointer items-center text-[#40A767] underline ng-tns-c81-0'
                            >
                              <span className='mr-2 ng-tns-c81-0'>
                                <svg
                                  width='16'
                                  height='16'
                                  viewBox='0 0 16 16'
                                  fill='none'
                                  className='ng-tns-c81-0'
                                  xmlns='http://www.w3.org/2000/svg'
                                  viewBox='0 0 640 512'
                                >
                                  <path
                                    fill='#45C881'
                                    className='ng-tns-c81-0'
                                    d='M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z'
                                  />
                                </svg>
                              </span>
                              <span className='ng-tns-c81-0'>
                                {lives?.link}
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className='flex items-center justify-center w-full h-[80vh]'>
              <div className='text-center'>
                <h2 className='mb-5 font-extrabold text-9xl dark:text-gray-600'>
                  <span className='logo-color'>
                    <Lottie animationData={animation}></Lottie>
                  </span>
                </h2>
                <p className='text-xl font-semibold md:text-3xl'>
                  😥দুঃখিত, আজকে কোনো লাইভ ক্লাস নাই
                </p>
                <p className='mt-4 mb-8 dark:text-gray-400'>
                  কি মজা আজকে কোন ক্লাস নাই, ঘুরতে যেতে পারবেন সবাই 😜।
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MyLiveClass;
