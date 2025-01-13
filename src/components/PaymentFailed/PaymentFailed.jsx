import Lottie from 'lottie-react';
import React from 'react';
import { Link } from 'react-router-dom';
import animation from '../../Images/content.json';

const PaymentFailed = () => {
  return (
    <div className='container mx-auto px-3'>
      <div className='flex items-center justify-center w-full h-[80vh]'>
        <div className='text-center'>
          <h2 className='mb-5 font-extrabold text-9xl dark:text-gray-600'>
            <span className='logo-color'>
              <Lottie animationData={animation}></Lottie>
            </span>
          </h2>
          <p className='text-xl font-semibold md:text-3xl'>
            😥দুর্ভাগ্যবশত, আপনার পেমেন্ট ব্যর্থ হয়েছে।
          </p>
          <p className='mt-4 mb-6 dark:text-gray-400'>
            পৃষ্ঠাটি স্বয়ংক্রিয়ভাবে মূল পৃষ্ঠায় পুনঃনির্দেশিত হওয়ার সময় বা
            নীচের বোতামটি ক্লিক করুন 😢।
          </p>
          <Link
            className='group relative inline-flex items-center overflow-hidden rounded bg-[#1bb57b] px-8 py-3 text-white focus:outline-none focus:ring active:bg-[#52c234]'
            to='/'
          >
            <span className='absolute -end-full transition-all group-hover:end-4'>
              <svg
                className='size-5 rtl:rotate-180'
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
            </span>

            <span className='text-sm font-medium transition-all group-hover:me-4 uppercase'>
              Try again
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailed;
