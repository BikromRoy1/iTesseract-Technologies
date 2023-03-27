import React from 'react';
import joti from '../../../../../Images/teacher/Joti.jpg';

const SchoolTeacher = () => {
  return (
    <div>
      <section className='py-14'>
        <div className='container mx-auto'>
          <div className='text-center lg:w-[710px] mx-auto w-full'>
            <p className='text-lg text-[#1bb57b] uppercase'>ক্লাস নেবেন যারা</p>

            <a
              href='#'
              className='block mt-4 text-2xl font-semibold text-[#124265] hover:underline '
            >
              আমাদের জনপ্রিয় শিক্ষকবৃন্দ
            </a>

            <p className='mt-3 text-base  dark:text-gray-400 md:text-base mb-4'>
              ২০২৩ সাল জুড়ে অভিজ্ঞ শিক্ষকদের সাথে সম্পূর্ণ কোর্স শেষ করেন !
            </p>
          </div>
        </div>
      </section>
      <section className='pb-14'>
        <div className='container px-6 mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0'>
            <div>
              <div className='w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg '>
                <img
                  className='object-cover w-full h-72'
                  src={joti}
                  alt='avatar'
                />

                <div className='py-5 text-center'>
                  <a
                    href='#'
                    className='block text-xl font-bold text-gray-800 '
                    tabindex='0'
                    role='link'
                  >
                    তাসনিম জামান
                  </a>
                  <span className='text-sm text-gray-700 dark:text-gray-400'>
                    CS Educator
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolTeacher;
