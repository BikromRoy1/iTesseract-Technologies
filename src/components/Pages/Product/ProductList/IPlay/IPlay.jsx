import React from 'react';
import { Link } from 'react-router-dom';

const IPlay = ({topTitle, title, details, image}) => {
    return (
      <section className='bg-white'>
        <div className='container px-6 py-6 mx-auto'>
          <div className='mt-8 lg:-mx-6 lg:flex lg:items-center'>
            <img
              loading='lazy'
              className=' w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96'
              src={image}
              alt='ipay-box'
            />

            <div className='mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 '>
              <p className='text-lg text-[#1bb57b] uppercase'>{topTitle}</p>
              <Link
                to='/'
                className='block mt-3 text-2xl font-semibold text-[#124265] hover:underline '
              >
                {title}
              </Link>

              <p className='mt-3 text-sm text-gray-500 text-justify  md:text-base'>
                {details}
              </p>

              <div className='mt-6'>
                <button
                  type='button'
                  className='px-8 py-3 font-semibold rounded dark:bg-[#1bb57b] dark:text-white'
                >
                  Buy Now
                </button>
                <button
                  type='button'
                  className='px-8 py-3 ml-6 font-semibold border rounded dark:border-[#1bb57b] dark:text-[#1bb57b]'
                >
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default IPlay;