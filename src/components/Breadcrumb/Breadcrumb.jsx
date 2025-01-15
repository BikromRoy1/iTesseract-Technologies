import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ title, subTitle, img, slgs }) => {
  return (
    <div
      className='hero h-72 text-center object-cover'
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className='hero-overlay bg-opacity-70'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold text-white'>{title}</h1>
          <div className='text-sm breadcrumbs text-center'>
            <ul className='justify-center'>
              <li>
                <Link to='/' className='text-[#1bb57b]'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    className='w-4 h-4 mr-2 stroke-current'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
                    ></path>
                  </svg>
                  <span className='text-[#1bb57b]'>হোম</span>
                </Link>
              </li>
              <li>
                <Link to={slgs} className='text-[#ffc107]'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    className='w-4 h-4 mr-2 stroke-current'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
                    ></path>
                  </svg>
                  {subTitle}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
