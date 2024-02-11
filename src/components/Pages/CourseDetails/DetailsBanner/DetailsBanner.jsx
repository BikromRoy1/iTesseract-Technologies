import React from 'react';
import { BsExclamationOctagonFill } from 'react-icons/bs';
import { FaGlobe, FaSignal, FaUserGraduate } from 'react-icons/fa';
import './DetailsBanner.css';

const DetailsBanner = () => {
  return (
    <section id='topBanner'>
      <div className=' container p-6 mx-auto'>
        <article>
          <h2 className=' lg:max-w-2xl w-full  font-bold mb-3 text-[#124265] capitalize text-xl md:text-2xl  lg:text-[31px] title'>
            মোবাইল অ্যাপ্লিকেশন ও ওয়েবসাইট ডেভেলপমেন্ট
          </h2>
          <p className='lg:max-w-3xl w-full text-[17px] font-normal  text-gray-500 subtitle'>
            শিক্ষার্থীদের মৌলিক যুক্তিবিদ্যা, কোডিং বোঝা এবং প্রোগ্রামিং ভাষার
            মৌলিক বিষয়গুলির সাথে পরিচিত করা হবে। বিট বিট করে তারা খুব সহজ
            গ্রাফিকাল প্রোগ্রামিং এর সাহায্যে গেম ডেভেলপমেন্ট করতে সক্ষম হবে।
          </p>

          <ul class='flex flex-wrap justify-start gap-3 md:gap-4'>
            <li class='flex items-center gap-1 md:gap-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                fill='#F7C32E'
                class='bi bi-star-fill'
                viewBox='0 0 16 16'
              >
                <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
              </svg>
              <span className='font-bold'>4.5/5.0</span>
            </li>
            <li class='flex items-center gap-1 md:gap-2'>
              <FaUserGraduate
                className='text-[#FD7E14]'
                width='18'
                height='18'
              />{' '}
              <span className='font-semibold'>12k ভর্তি হয়েছে</span>
            </li>
            <li class='flex items-center gap-1 md:gap-2'>
              <FaSignal width='18' height='18' className='text-success' />
              <span className='font-semibold'>লেভেল - 01</span>
            </li>
            <li class='flex items-center gap-1 md:gap-2'>
              <BsExclamationOctagonFill
                width='18'
                height='18'
                className='text-[#D6293E]'
              />
              <span className='font-semibold'>
                সর্বশেষ আপডেট <span className='font-bold'>০১/২০২৪</span>
              </span>
            </li>
            <li class='flex items-center gap-1 md:gap-2'>
              <FaGlobe width='18' height='18' className='text-[#17A2B8]' />
              <span className='font-semibold'>বাংলা</span>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default DetailsBanner;
