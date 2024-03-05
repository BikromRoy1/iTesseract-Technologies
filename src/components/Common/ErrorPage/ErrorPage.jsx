import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section className='flex items-center h-screen p-16 dark:bg-gray-900 dark:text-gray-100'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl dark:text-gray-600'>
            <span className='sr-only'>Error</span>404
          </h2>
          <p className='text-2xl font-semibold md:text-3xl'>
            Sorry, we couldn't find this page.
          </p>
          <p className='mt-4 mb-8 dark:text-gray-400'>
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <div class='flex items-center justify-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto mx-auto'>
            <Link to='/'>
              <button class='flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  class='w-5 h-5 rtl:rotate-180'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
                  />
                </svg>

                <span>Go back</span>
              </button>
            </Link>

            <Link to='/contact'>
              <button class='w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600'>
                Take me home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
