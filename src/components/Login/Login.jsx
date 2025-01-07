import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import roundedLogo from '../../Images/Round-logo.png';
import loginSVG from '../../Images/icons/login.png';
import mainLogo from '../../Images/main-logo.svg';
import './Login.css';

import { apiUrl } from '../../config/config';

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const userLogin = form.loginEmail.value;
    const userPassword = form.password.value;

    if (userLogin === '' || userPassword === '') {
      toast.warning('Please fill in all fields !', {
        autoClose: 2000,
      });
    }

    try {
      const data = {
        userLogin,
        userPassword,
      };

      const result = await axios.post(
        `${apiUrl}/api/v1/login?email=${userLogin}&password=${userPassword}`
      );
      toast.success('Successfully login', {
        autoClose: 2000,
      });

      const userInfo = {
        email: result.data.user.email,
        token: result.data.authorisation.token,
      };

      localStorage.setItem('userInfo', JSON.stringify(userInfo));

      window.location.replace('/');
      // navigate('/');
      form.reset();
    } catch (error) {
      // Check if there's a specific error message from the response
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.warning(`The email has already been taken.`);
      } else {
        // If no specific error message, show the generic error message
        console.log(`Error: ${error.message}`);
      }
    }
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

        <div className='w-full px-6 py-8 md:px-8 lg:w-1/2 login-background-color'>
          <div className='flex justify-center mx-auto'>
            <img
              className='w-[60px] h-15 sm:h-8 md:w-auto'
              src={roundedLogo}
              alt=''
            />
          </div>

          <p className='mt-3 text-xl text-center text-gray-200'>
            আপনাকে লগইন পৃষ্ঠায় স্বাগতম!
          </p>

          <span className='flex cursor-pointer items-center justify-center mt-4  transition-colors duration-300 transform border rounded-lg border-gray-[#15BD13] text-gray-200  hover:bg-[#24a15b]'>
            <div className='px-1 md:px-4 py-2'>
              <img
                className='w-7 h-7'
                src={loginSVG}
                alt='login'
                loading='lazy'
              />
            </div>

            <span className='w-5/6 px-1 md:px-4 py-3 font-bold text-center'>
              ইমেইল দিয়ে লগইন করুন
            </span>
          </span>

          <div className='flex items-center justify-between mt-4'>
            <span className='w-1/5 border-b border-gray-400 lg:w-1/4'></span>

            <span className='text-xs text-center  uppercase text-gray-300 hover:underline cursor-pointer'>
              Valid Email and Password
            </span>

            <span className='w-1/5 border-b border-gray-400 lg:w-1/4'></span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-medium text-gray-200'
                htmlFor='LoggingEmailAddress'
              >
                Email Address
              </label>
              <input
                placeholder='ইমেইল '
                id='LoggingEmailAddress'
                name='loginEmail'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300'
                type='email'
                required
              />
            </div>

            <div className='mt-4'>
              <div className='flex flex-col my-4'>
                <div className='flex justify-between'>
                  <label
                    className='block mb-2 text-sm font-medium text-gray-200'
                    htmlFor='loggingPassword'
                  >
                    Password
                  </label>
                </div>
                <div className='relative flex items-center'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id='loggingPassword'
                    name='password'
                    required
                    className='flex-1 px-4 py-2  border-gray-300 block w-full text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300'
                    placeholder='পাসওয়ার্ড'
                    autoComplete='on'
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    type='button'
                    className='absolute right-2 bg-transparent flex items-center justify-center text-gray-700'
                  >
                    {!showPassword ? (
                      <svg
                        className='w-5 h-5 text-[#4caf50]'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21'
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        className='w-5 h-5 text-[#4caf50]'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                        ></path>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                        ></path>
                      </svg>
                    )}
                  </button>
                </div>
              </div>
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
              to='/UserRegistration'
              className='title-gradient underline text-base font-semibold decoration-[#07bc0c]'
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
