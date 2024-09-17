import React from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

import course02 from '../../Images/course-02.jpg';

import Checkouts from '../../Images/Checkout.jpg';
import './Checkout.css';

const Checkout = () => {
  return (
    <div>
      <Breadcrumb
        title=' আমার কার্ট'
        subTitle=' আমার কার্ট  '
        slgs='/checkout'
        img={Checkouts}
      ></Breadcrumb>
      <div className='container mx-auto lg:px-14 xl:px-20 pb-20 pt-11'>
        <div className='px-4'>
          <p className='text-xl font-bold text-[#1cab55]'>🎁 অর্ডার সামারি</p>
          <p className='text-[#9ca3af] font-normal text-base'>
            আপনার আইটেম পরীক্ষা করুন. এবং একটি উপযুক্ত শিপিং পদ্ধতি নির্বাচন
            করুন.
          </p>
        </div>
        <div className='grid lg:grid-cols-2'>
          <div class='px-4 pt-4 h-full'>
            <div class='mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-2 w-full'>
              <div class='flex flex-col rounded-lg bg-white sm:flex-row items-start w-full'>
                <img
                  class='m-2 h-36 w-44 rounded-md border object-cover object-center'
                  src={course02}
                  alt=''
                />
                <div className='w-full'>
                  <div className='border-b border-dashed pb-1 mb-4 mx-4'>
                    <div class='w-full flex items-center justify-between  pt-2 '>
                      <h4 class='font-semibold text-base'>
                        মোবাইল অ্যাপ্লিকেশন ও ওয়েবসাইট ডেভেলপমেন্ট
                      </h4>
                      <p class='primary-color font-bold text-[20px] tracking-[0.20000000298023224px]'>
                        ৳7500
                      </p>
                    </div>
                    <h6 className='pb-3 text-[#9ca3af] font-normal text-[16px]'>
                      প্রশিক্ষক নাম– তাসনিম জামান
                    </h6>
                  </div>
                  <div>
                    <ul class='flex flex-wrap justify-start gap-3 md:gap-4 px-4'>
                      <li class='flex items-center gap-1 md:gap-2'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='17px'
                          height='17px'
                          fill='#F7C32E'
                          class='bi bi-star-fill'
                          viewBox='0 0 16 16'
                        >
                          <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z'></path>
                        </svg>
                        <span class='font-medium text-base text-[#9ca3af]'>
                          20 প্রজেক্ট
                        </span>
                      </li>
                      <li class='flex items-center gap-1 md:gap-2'>
                        <svg
                          stroke='currentColor'
                          fill='currentColor'
                          stroke-width='0'
                          viewBox='0 0 448 512'
                          class='text-[#FD7E14]'
                          width='17px'
                          height='17px'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8zM13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3 0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57 0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6z'></path>
                        </svg>{' '}
                        <span class='font-medium text-base text-[#9ca3af]'>
                          30 ক্লাস
                        </span>
                      </li>
                      <li class='flex items-center gap-1 md:gap-2'>
                        <svg
                          stroke='currentColor'
                          fill='currentColor'
                          stroke-width='0'
                          viewBox='0 0 640 512'
                          width='17px'
                          height='17px'
                          class='text-success'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M216 288h-48c-8.84 0-16 7.16-16 16v192c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16V304c0-8.84-7.16-16-16-16zM88 384H40c-8.84 0-16 7.16-16 16v96c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16v-96c0-8.84-7.16-16-16-16zm256-192h-48c-8.84 0-16 7.16-16 16v288c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16V208c0-8.84-7.16-16-16-16zm128-96h-48c-8.84 0-16 7.16-16 16v384c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16V112c0-8.84-7.16-16-16-16zM600 0h-48c-8.84 0-16 7.16-16 16v480c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16V16c0-8.84-7.16-16-16-16z'></path>
                        </svg>
                        <span class='font-medium text-base text-[#9ca3af]'>
                          লেভেল - 02
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='px-4 pt-4 h-full'>
            <div class='mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-4 w-full'>
              <div class='flex flex-col rounded-lg bg-white sm:flex-row items-start w-full'>
                <div className='w-full'>
                  <div className='border-b border-dashed pb-5 mx-4'>
                    <div class='w-full flex items-center justify-between  mb-1 mt-1'>
                      <h4 class='font-normal text-lg text-gray-600'>
                        প্রোডাক্টের মূল্য
                      </h4>
                      <p class='font-semibold text-[20px] tracking-[0.20000000298023224px]'>
                        ৳7500
                      </p>
                    </div>
                    <div class='w-full flex items-center justify-between pt-2'>
                      <h4 class='font-normal text-lg text-gray-600'>
                        ডিস্কাউন্ট
                      </h4>
                      <p class='font-semibold text-[#E63C3C] text-[20px] tracking-[0.20000000298023224px]'>
                        -৳1650
                      </p>
                    </div>
                  </div>
                  <div>
                    <div class='flex justify-between p-4 text-lg font-semibold'>
                      <h4>
                        {' '}
                        সর্বমোট{' '}
                        <span class='text-base font-normal text-gray-600'>
                          (ভ্যাট সহ)
                        </span>
                      </h4>
                      <h4> ৳ 5850 </h4>
                    </div>
                    <div className='mx-3'>
                      <button class='max-w[300px] mx-auto block w-full bg-[#1bb57b] px-4 py-[6px] rounded-md font-medium text-base tracking-wide text-white transition-colors whitespace-nowrap duration-200'>
                        শুরু করুন
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
