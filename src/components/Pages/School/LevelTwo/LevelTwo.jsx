import React from 'react';
import course01 from '../../../../Images/course-01.jpg';
import './LevelTwo.css';

const LevelTwo = () => {
  return (
    <section className='py-14'>
      <div className='container mx-auto'>
        <div className='section-header'>
          <h4>কোর্স লেভেল সমূহ</h4>
          <h2>
            প্রতিটি স্তরে
            <span className='title-gradient'> ০৬ টি পাঠ আছে</span>
          </h2>
        </div>

        <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6 p-6'>
          <div className='Level-items'>
            <div className='bottom-shapes'>
              <div className='shapes-raps'></div>
            </div>
            <div className='max-w-full mx-auto overflow-hidden md:max-w-full'>
              <div className='md:flex'>
                <div className='md:flex-shrink-0'>
                  <img
                    className='h-full w-full object-cover md:w-56 level-image'
                    loading='lazy'
                    src={course01}
                    alt='Level-image'
                  />
                </div>
                <div className='p-6'>
                  <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
                    <h4 className='text-[19px] mb-[15px] font-bold text-[#1c1c24] leading-[1.2]'>
                      কম্পিউটার প্রোগ্রামিং ফান্ডামেন্টাল
                    </h4>
                  </div>

                  <p className='text-[#888888] tracking-[.20000000298023224px] leading-[26px] pb-[15px]'>
                    শিক্ষার্থীদের মৌলিক যুক্তিবিদ্যা, কোডিং বোঝা এবং প্রোগ্রামিং
                    ভাষার মৌলিক বিষয়গুলির সাথে পরিচিত করা হবে। বিট বিট করে তারা
                    খুব সহজ গ্রাফিকাল প্রোগ্রামিং এর সাহায্যে গেম ডেভেলপমেন্ট
                    করতে সক্ষম হবে।
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='h-32 rounded-lg bg-gray-200'></div>
        </div>
      </div>
    </section>
  );
};

export default LevelTwo;
