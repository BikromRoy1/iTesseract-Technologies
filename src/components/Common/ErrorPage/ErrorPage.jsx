import Lottie from 'lottie-react';
import React from 'react';
import { Link } from 'react-router-dom';
import animation from '../../../Images/404-page.json';

const ErrorPage = () => {
  return (
    <section className='flex items-center h-screen p-16 dark:bg-gray-900 dark:text-gray-100'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl dark:text-gray-600'>
            {/* <span className='sr-only'>Error</span>404
            <span className='sr-only'>Error</span> */}
            <span className='logo-color'>
              <Lottie animationData={animation}></Lottie>
            </span>
          </h2>
          <p className='text-2xl font-semibold md:text-3xl'>
            Sorry, we couldn't find this page.
          </p>
          <p className='mt-4 mb-8 dark:text-gray-400'>
            The page you are looking for doesn't exist. Here are some helpful
            Links:
          </p>
          <div className='flex items-center justify-center w-full mt-6 gap-x-3 sm:w-auto mx-auto'>

            <Link to='/'>
              <button className='px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-[#1CB63E] rounded-lg  hover:bg-[#06A12A] dark:hover:bg-[#06A12A] dark:bg-[#1CB63E]'>
                Go To Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
