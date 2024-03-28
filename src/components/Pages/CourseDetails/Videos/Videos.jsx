import React from 'react';
import { FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Videos.css';

const Videos = () => {
  return (
    <div className='videos-card-title'>
      <div className='videos-title'>
        <h3 className='w-full'>কোর্সের পাঠ্যক্রম</h3>
      </div>
      <div className='videos-timing'>
        <ul className='flex pb-3 flex-wrap items-center'>
          <li className='mr-[30px] text-[#7b7b8a] text-[17px] font-medium'>
            30 ভিডিও
          </li>
          <li className='mr-[30px] text-[#7b7b8a] text-[17px] font-medium'>
            মোট: 5 ঘন্টা 56 মিনিট 24 সেকেন্ড
          </li>
        </ul>
      </div>
      <div className='pb-4'>
        <p className='text-[#7b7b8a]'>
          আপনার সন্তানের স্মার্টফোন এডিকশন এখন আর আপনার মাথাব্যথার কারণ হবে না।
          কারণ সারাদিন মোবাইলে গেম না খেলে ও নিজেই গেম বানাবে এখন। কোডিং শেখা ওর
          কাছে একদমই বোরিং মনে হবে না কারণ আপনার সন্তান এবার প্রোগ্রামিং এর এ টু
          জেড শিখবে খেলতে খেলতে।
        </p>
      </div>

      <div className='videos-module'>
        <details
          className='group rounded-lg [&_summary::-webkit-details-marker]:hidden mb-[1rem]'
          open
        >
          <summary className='flex items-center justify-between cursor-pointer bg-[#F5F7F9] py-[1rem] px-[1.25rem] rounded-[6px]'>
            <h2
              className={`font-bold text-[#124265] videos-class-title text-[14px] sm:text-[14px] md:text-[16px]`}
            >
              ক্লাস 01: মোবাইল অ্যাপ্লিকেশন এবং ওয়েবসাইট বিকাশের ভূমিকা{' '}
              <span className='font-medium text-[#7b7b8a]'>(3 Lectures)</span>
            </h2>

            <span className='relative ml-1.5 h-5 w-5 flex-shrink-0'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </span>
          </summary>

          <div className='mt-[1rem] pl-[1rem] pt-[0.2rem] pr-[0.5rem] pb-[0.5rem]'>
            <div className='flex justify-between items-center flex-wrap'>
              <div className='relative flex items-center videos-name-main flex-wrap'>
                <a href='#' className='btn-danger-soft mb-0'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='23'
                    height='23'
                    fill='currentColor'
                    className='bi bi-play-fill play-icons mr-0 pl-[3px]'
                    viewBox='0 0 16 16'
                  >
                    <path d='m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393' />
                  </svg>
                </a>
                <span className='inline-block truncate ml-2 mb-0 text-base font-normal w-[100px] sm:w-[200px] md:w-[400px] cursor-pointer'>
                  Introduction{' '}
                  <span className='badge bg-[#1CAB55] border-none text-[14px] font-medium whitespace-nowrap text-white  ml-1'>
                    ফ্রি
                  </span>
                </span>
              </div>
              <p className='mb-0 text-[#7b7b8a] text-[16px] font-semibold flex items-center gap-2'>
                2m 10s
                <span>
                  <Link
                    className='flex items-center gap-1 badge'
                    to='/videosPlay'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='19'
                      height='19'
                      fill='currentColor'
                      className='bi bi-eye'
                      viewBox='0 0 16 16'
                    >
                      <path d='M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z' />
                      <path d='M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0' />
                    </svg>
                    দেখুন
                  </Link>
                </span>
              </p>
            </div>

            <hr className='hr-style my-[1rem] text-[#9a9ea4]' />

            <div className='flex justify-between items-center'>
              <div className='relative flex items-center videos-name-main'>
                <a href='#' className='btn-danger-soft mb-0 flex-wrap'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='23'
                    height='23'
                    fill='currentColor'
                    className='bi bi-play-fill play-icons mr-0 pl-[3px]'
                    viewBox='0 0 16 16'
                  >
                    <path d='m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393' />
                  </svg>
                </a>
                <span className='videos-name inline-block truncate ml-2 mb-0 text-base font-normal w-[100px] sm:w-[200px] md:w-[400px] cursor-pointer'>
                  {' '}
                  Staying on the Sales Tightrope{' '}
                  <span className='badge bg-[#1CAB55] border-none text-[14px] font-medium whitespace-nowrap text-white  ml-1'>
                    ফ্রি
                  </span>
                </span>
              </div>
              <p className='mb-0 text-[#7b7b8a] text-[16px] font-semibold flex items-center gap-2'>
                15m 10s{' '}
                <span>
                  <Link
                    className='flex items-center gap-1 badge'
                    to='/videosPlay'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='19'
                      height='19'
                      fill='currentColor'
                      className='bi bi-eye'
                      viewBox='0 0 16 16'
                    >
                      <path d='M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z' />
                      <path d='M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0' />
                    </svg>
                    দেখুন
                  </Link>
                </span>
              </p>
            </div>

            <hr className='hr-style my-[1rem] text-[#9a9ea4]' />

            <div className='flex justify-between items-center  flex-wrap'>
              <div className='relative flex items-center videos-name-main flex-wrap'>
                <a href='#' className='btn-danger-soft mb-0'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='23'
                    height='23'
                    fill='currentColor'
                    className='bi bi-play-fill play-icons mr-0 pl-[3px]'
                    viewBox='0 0 16 16'
                  >
                    <path d='m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393' />
                  </svg>
                </a>
                <span className='inline-block truncate ml-2 mb-0 text-base font-normal w-[100px] sm:w-[200px] md:w-[400px] cursor-pointer'>
                  First Impressions and Body Language{' '}
                  <span className='badge bg-[#FD7E14] border-none text-[14px] font-medium whitespace-nowrap text-white  ml-1 capitalize'>
                    <FaLock className='w-[13px] h-[13px] mr-[3px]' />
                    premium
                  </span>
                </span>
              </div>
              <p className='mb-0 text-[#7b7b8a] text-[16px] font-semibold'>
                18m 10s
              </p>
            </div>

            <hr className='hr-style my-[1rem] text-[#9a9ea4]' />

            <div className='flex justify-between items-center '>
              <div className='relative flex items-center videos-name-main'>
                <a href='#' className='btn-danger-soft mb-0'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='23'
                    height='23'
                    fill='currentColor'
                    className='bi bi-play-fill play-icons mr-0 pl-[3px]'
                    viewBox='0 0 16 16'
                  >
                    <path d='m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393' />
                  </svg>
                </a>
                <span className='inline-block truncate ml-2 mb-0 text-base font-normal w-[100px] sm:w-[200px] md:w-[400px] cursor-pointer'>
                  Scratch Programming Basic
                  <span className='badge bg-[#FD7E14] border-none text-[14px] font-medium whitespace-nowrap text-white  ml-1 capitalize'>
                    <FaLock className='w-[13px] h-[13px] mr-[3px]' />
                    premium
                  </span>
                </span>
              </div>
              <p className='mb-0 text-[#7b7b8a] text-[16px] font-semibold'>
                25m 10s
              </p>
            </div>
          </div>
        </details>
        <details className='group rounded-lg   [&_summary::-webkit-details-marker]:hidden mb-[1rem]'>
          <summary className='flex items-center justify-between cursor-pointer bg-[#F5F7F9] py-[1rem] px-[1.25rem] rounded-[6px]'>
            <h2 className='font-bold text-[#124265] videos-class-title text-[14px] sm:text-[14px] md:text-[16px]'>
              ক্লাস 02: স্ক্র্যাচ প্রোগ্রামিং এর বেসিক
              <span className='font-medium text-[#7b7b8a]'> (06 Lectures)</span>
            </h2>

            <span className='relative ml-1.5 h-5 w-5 flex-shrink-0'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </span>
          </summary>

          <div className='mt-[1rem] pl-[1rem] pt-[0.2rem] pr-[0.5rem] pb-[0.5rem]'>
            <div className='flex justify-between items-center flex-wrap'>
              <div className='relative flex items-center videos-name-main flex-wrap'>
                <a href='#' className='btn-danger-soft mb-0'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='23'
                    height='23'
                    fill='currentColor'
                    className='bi bi-play-fill play-icons mr-0 pl-[3px]'
                    viewBox='0 0 16 16'
                  >
                    <path d='m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393' />
                  </svg>
                </a>
                <span className='inline-block truncate ml-2 mb-0 text-base font-normal w-[100px] sm:w-[200px] md:w-[400px] cursor-pointer'>
                  Game development using blocks{' '}
                  <span className='badge bg-[#FD7E14] border-none text-[14px] font-medium whitespace-nowrap text-white  ml-1 capitalize'>
                    <FaLock className='w-[13px] h-[13px] mr-[3px]' />
                    premium
                  </span>
                </span>
              </div>
              <p className='mb-0 text-[#7b7b8a] text-[16px] font-semibold'>
                2m 10s
              </p>
            </div>

            <hr className='hr-style my-[1rem] text-[#9a9ea4]' />

            <div className='flex justify-between items-center'>
              <div className='relative flex items-center videos-name-main'>
                <a href='#' className='btn-danger-soft mb-0 flex-wrap'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='23'
                    height='23'
                    fill='currentColor'
                    className='bi bi-play-fill play-icons mr-0 pl-[3px]'
                    viewBox='0 0 16 16'
                  >
                    <path d='m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393' />
                  </svg>
                </a>
                <span className='videos-name inline-block truncate ml-2 mb-0 text-base font-normal w-[100px] sm:w-[200px] md:w-[400px] cursor-pointer'>
                  {' '}
                  Scratch Components{' '}
                  <span className='badge bg-[#FD7E14] border-none text-[14px] font-medium whitespace-nowrap text-white  ml-1 capitalize'>
                    <FaLock className='w-[13px] h-[13px] mr-[3px]' />
                    premium
                  </span>
                </span>
              </div>
              <p className='mb-0 text-[#7b7b8a] text-[16px] font-semibold'>
                15m 10s
              </p>
            </div>

            <hr className='hr-style my-[1rem] text-[#9a9ea4]' />

            <div className='flex justify-between items-center  flex-wrap'>
              <div className='relative flex items-center videos-name-main flex-wrap'>
                <a href='#' className='btn-danger-soft mb-0'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='23'
                    height='23'
                    fill='currentColor'
                    className='bi bi-play-fill play-icons mr-0 pl-[3px]'
                    viewBox='0 0 16 16'
                  >
                    <path d='m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393' />
                  </svg>
                </a>
                <span className='inline-block truncate ml-2 mb-0 text-base font-normal w-[100px] sm:w-[200px] md:w-[400px] cursor-pointer'>
                  Knowing Your Topic and Specification{' '}
                  <span className='badge bg-[#FD7E14] border-none text-[14px] font-medium whitespace-nowrap text-white  ml-1 capitalize'>
                    <FaLock className='w-[13px] h-[13px] mr-[3px]' />
                    premium
                  </span>
                </span>
              </div>
              <p className='mb-0 text-[#7b7b8a] text-[16px] font-semibold'>
                18m 10s
              </p>
            </div>

            <hr className='hr-style my-[1rem] text-[#9a9ea4]' />

            <div className='flex justify-between items-center '>
              <div className='relative flex items-center videos-name-main'>
                <a href='#' className='btn-danger-soft mb-0'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='23'
                    height='23'
                    fill='currentColor'
                    className='bi bi-play-fill play-icons mr-0 pl-[3px]'
                    viewBox='0 0 16 16'
                  >
                    <path d='m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393' />
                  </svg>
                </a>
                <span className='inline-block truncate ml-2 mb-0 text-base font-normal w-[100px] sm:w-[200px] md:w-[400px] cursor-pointer'>
                  Introduction to Box Modelling{' '}
                  <span className='badge bg-[#FD7E14] border-none text-[14px] font-medium whitespace-nowrap text-white  ml-1 capitalize'>
                    <FaLock className='w-[13px] h-[13px] mr-[3px]' />
                    premium
                  </span>
                </span>
              </div>
              <p className='mb-0 text-[#7b7b8a] text-[16px] font-semibold'>
                25m 10s
              </p>
            </div>
          </div>
        </details>
      </div>
    </div>
  );
};

export default Videos;
