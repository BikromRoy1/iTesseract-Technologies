import React from 'react';
import { Link } from 'react-router-dom';
import roundedLogo from '../../Images/Round-logo.png';
import loginSVG from '../../Images/icons/login.png';
import mainLogo from '../../Images/main-logo.svg';
import './Login.css';

const Login = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const userLogin = form.loginEmail.value;
    const userPassword = form.loginPassword.value;

    console.log(userLogin, userPassword);
  };

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

        <div className='w-full px-6 py-8 md:px-8 lg:w-1/2 background-color'>
          <div className='flex justify-center mx-auto'>
            <img
              className='w-[60px] h-15 sm:h-8 md:w-auto'
              src={roundedLogo}
              alt=''
            />
          </div>

          <p className='mt-3 text-xl text-center text-gray-600 dark:text-gray-200'>
            আপনাকে লগইন পৃষ্ঠায় স্বাগতম!
          </p>

          <a
            href='#'
            className='flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-[#15BD13] dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600'
          >
            <div className='px-1 md:px-4 py-2'>
              <img
                className='w-7 h-7'
                src={loginSVG}
                alt='login'
                loading='lazy'
              />
            </div>

            <span className='w-5/6 px-1 md:px-4 py-3 font-bold text-center'>
              মোবাইল নাম্বার/ ইমেইল দিয়ে লগইন করুন
            </span>
          </a>

          <div className='flex items-center justify-between mt-4'>
            <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>

            <a
              href='#'
              className='text-xs text-center text-gray-500 uppercase dark:text-gray-300 hover:underline'
            >
              Valid Email and Password
            </a>

            <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200'
                htmlFor='LoggingEmailAddress'
              >
                Email Address
              </label>
              <input
                placeholder='মোবাইল নাম্বার/ ইমেইল '
                id='LoggingEmailAddress'
                name='loginEmail'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300'
                type='email'
                required
              />
            </div>

            <div className='mt-4'>
              <div className='flex justify-between'>
                <label
                  className='block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200'
                  htmlFor='loggingPassword'
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
                name='loginPassword'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300'
                type='password'
                required
              />
            </div>

            <div className='mt-6'>
              <button className='w-full text-white px-6 py-3 custom-button text-sm font-medium tracking-wide  capitalize   focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'>
                সাবমিট করুন
              </button>
            </div>
          </form>
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
