import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import shape04 from '../../../../Images/icons/shape-04.png';
import shape02 from '../../../../Images/icons/shape-05.png';
import Robots from '../../../../Images/roobots.png';
import './ItesseractAbout.css';

import { apiUrl } from '../../../../config/config';

const ItesseractAbout = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/v1/counters`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  let startValue = 0;

  // Ensure data is available and values are valid numbers
  const studentNumber = parseInt(data?.data?.student) || 0;
  const success = parseInt(data?.data?.success) || 0;
  const materials = parseInt(data?.data?.materials) || 0;
  const learning = parseInt(data?.data?.learning_content) || 0;

  return (
    <section className='bg-[#f7f5f2] about-me'>
      <div className='max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 mx-auto'>
        <div className='section-header'>
          <h2>
            আজই জয়েন করুন{' '}
            <span className='title-gradient'>
              বাংলাদেশের সবচেয়ে বড় লার্নিং প্ল্যাটফর্মে
            </span>{' '}
          </h2>
        </div>

        <div className='grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16 about-card'>
          <div className='mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right'>
            <img loading='lazy' src={Robots} alt='Robot' />
          </div>

          <div className='grid grid-cols-2 gap-4 sm:grid-cols-2'>
            <div
              title='মোট শিক্ষার্থী'
              className='block rounded-xl count-card  p-4 shadow-sm hover:border-[#1bb57b] hover:ring-1 hover:ring-[#1bb57b] focus:outline-none focus:ring'
            >
              <span className='inline-block rounded-lg bg-[rgba(26,182,157,.1)] p-3'>
                <svg
                  className='h-6 w-6 text-[#1bb57b]'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M12 14l9-5-9-5-9 5 9 5z'></path>
                  <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'></path>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                  ></path>
                </svg>
              </span>

              <h2 className='mt-2 font-bold leading-[26px] text-[30px] text-[#1bb57b]'>
                <CountUp
                  start={startValue}
                  end={studentNumber}
                  duration={2.75}
                  enableScrollSpy={true}
                />{' '}
                +
              </h2>

              <p className='hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600 font-medium'>
                মোট শিক্ষার্থী
              </p>
            </div>

            <div
              title=' অ্যাপ ব্যবহারকারী'
              className='block rounded-xl count-card  p-4 shadow-sm hover:border-[#ee4a62] hover:ring-1 hover:ring-[#ee4a62] focus:outline-none focus:ring'
            >
              <span className='inline-block rounded-lg bg-[rgba(26,182,157,.1)] p-3'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-6 h-6 text-[#1bb57b]'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'
                  />
                </svg>
              </span>

              <h2 className='mt-2 font-bold leading-[26px] text-[30px] text-[#ee4a62]'>
                <CountUp
                  start={startValue}
                  end={success}
                  duration={2.75}
                  enableScrollSpy={true}
                />{' '}
                +
              </h2>

              <p className='hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600 font-medium'>
                সফল শিক্ষার্থী
              </p>
            </div>

            <div
              title=' স্টাডি ম্যাটেরিয়াল'
              className='block rounded-xl count-card  p-4 shadow-sm hover:border-[#f8941f] hover:ring-1 hover:ring-[#f8941f] focus:outline-none focus:ring'
            >
              <span className='inline-block rounded-lg bg-[rgba(26,182,157,.1)] p-3'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-6 h-6 text-[#1bb57b]'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z'
                  />
                </svg>
              </span>

              <h2 className='mt-2 font-bold leading-[26px] text-[30px] text-[#f8941f]'>
                <CountUp
                  start={startValue}
                  end={materials}
                  duration={2.75}
                  enableScrollSpy={true}
                />
                +
              </h2>

              <p className='hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600 font-medium'>
                স্টাডি ম্যাটেরিয়াল
              </p>
            </div>

            <div
              title='লার্নিং কন্টেন্ট'
              className='block rounded-xl count-card  p-4 shadow-sm hover:border-[#8e56ff] hover:ring-1 hover:ring-[#8e56ff] focus:outline-none focus:ring'
            >
              <span className='inline-block rounded-lg bg-[rgba(26,182,157,.1)] p-3'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-6 h-6 text-[#1bb57b]'
                >
                  <path
                    strokeLinecap='round'
                    d='M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z'
                  />
                </svg>
              </span>

              <h2 className='mt-2 font-bold leading-[26px] text-[30px] text-[#8e56ff]'>
                {' '}
                <CountUp
                  start={startValue}
                  end={learning}
                  duration={2.75}
                  enableScrollSpy={true}
                />
                +
              </h2>

              <p className='hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600 font-medium'>
                লার্নিং কন্টেন্ট
              </p>
            </div>
          </div>
          <div className='shape-group hidden lg:block'>
            <div className='shape02'>
              <img src={shape02} loading='lazy' alt='shape' />
            </div>
            <div className='shape04'>
              <img src={shape04} loading='lazy' alt='shape' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItesseractAbout;
