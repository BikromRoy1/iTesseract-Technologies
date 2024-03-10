import React from 'react';
import { Link } from 'react-router-dom';
import roundedLogo from '../../Images/Round-logo.png';
import mainLogo from '../../Images/main-logo.svg';
import './Login.css';

const Login = () => {
  return (
    <section id='loginBanner' className='py-20'>
      <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-5xl'>
        <div className='hidden lg:block lg:w-1/2 bg-slate-200'>
          <div className='flex flex-col justify-center items-center w-full h-full'>
            <Link to='/'>
              <img
                className='mx-auto mb-3'
                width={250}
                height={50}
                src={mainLogo}
                alt='iTesseract Technologies'
                loading='lazy'
              />
            </Link>
            <h2 className='text-[#124265] font-bold leading-5 tracking-widest mx-auto text-[18px] md:text-[22px] lg:text-[30px] mt-5 mb-1'>
              শিশু-কিশোররাই শিখবে{' '}
            </h2>
            <h4 className='title-gradient font-semibold text-[20px] md:text-[22px] lg:text-[25px] tracking-wider pt-2'>
              রোবটিক্স ও প্রোগ্রামিং
            </h4>
          </div>
        </div>

        <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
          <div className='flex justify-center mx-auto'>
            <img className='w-auto h-15 sm:h-8' src={roundedLogo} alt='' />
          </div>

          <p className='mt-3 text-xl text-center text-gray-600 dark:text-gray-200'>
            আপনাকে লগইন পৃষ্ঠায় স্বাগতম!
          </p>

          <a
            href='#'
            className='flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600'
          >
            <div className='px-4 py-2'>
              <svg className='w-6 h-6' viewBox='0 0 40 40'>
                <path
                  d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                  fill='#FFC107'
                />
                <path
                  d='M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z'
                  fill='#FF3D00'
                />
                <path
                  d='M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z'
                  fill='#4CAF50'
                />
                <path
                  d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                  fill='#1976D2'
                />
              </svg>
            </div>

            <span className='w-5/6 px-4 py-3 font-bold text-center'>
              মোবাইল নাম্বার/ ইমেইল দিয়ে লগইন করুন
            </span>
          </a>

          <div className='flex items-center justify-between mt-4'>
            <span className='w-1/5 border-b dark:border-gray-600 lg:w-1/4'></span>

            <a
              href='#'
              className='text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline'
            >
              or login with email
            </a>

            <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
          </div>

          <div className='mt-4'>
            <label
              className='block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200'
              for='LoggingEmailAddress'
            >
              Email Address
            </label>
            <input
              placeholder='মোবাইল নাম্বার/ ইমেইল '
              id='LoggingEmailAddress'
              className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300'
              type='email'
            />
          </div>

          <div className='mt-4'>
            <div className='flex justify-between'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200'
                for='loggingPassword'
              >
                Password
              </label>
              <a
                href='#'
                className='text-xs text-gray-500 dark:text-gray-300 hover:underline'
              >
                পাসওয়ার্ড ভুলে গেছেন?
              </a>
            </div>

            <input
              placeholder='পাসওয়ার্ড'
              id='loggingPassword'
              className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300'
              type='password'
            />
          </div>

          <div className='mt-6'>
            <button className='w-full text-white px-6 py-3 custom-button text-sm font-medium tracking-wide  capitalize   focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'>
              সাবমিট করুন
            </button>
          </div>

          <div className='flex items-center justify-center gap-2 mt-4'>
            <span className='text-white'>You don't have an account?</span>
            <Link
              to='/'
              className='title-gradient underline text-base font-semibold'
            >
              Registration
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
