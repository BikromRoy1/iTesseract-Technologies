import React from 'react';
import image from '../../../../Images/img.PNG';
import computer from '../../../../Images/icons/computer.png';
import web from '../../../../Images/icons/web-development.png';
import dimploma from '../../../../Images/icons/diploma.png';
import Testimonial from '../Testimonial/Testimonial';

const Features = () => {
  return (
    <div>
      <section className=' pt-16 lg:flex lg:justify-center lg:items-center'>
        <div className='container mx-auto'>
          <div className='overflow-hidden bg-[#F7F9FF] py-8 md:py-8 md:px-14 px-4 lg:flex lg:w-full lg:items-center rounded-xl'>
            <div className='lg:w-1/2'>
              <img
                loading='lazy'
                src={image}
                alt=''
                className='h-80 dark:bg-gray-500 aspect-video'
              />
            </div>

            <div className='max-w-xl pl-0 lg:pl-4 py-12 lg:max-w-5xl lg:w-1/2'>
              <h2 className='text-3xl font-extrabold mb-7'>
                <span className='theme-primary-color'>কিভাবে আমাদের </span>
                <span className='theme-secondary-color'>
                  {' '}
                  সাথে যুক্ত হবেন ?
                </span>
              </h2>
              <div className='flex'>
                <div className='flex-shrink-0'>
                  <div className='flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-white'>
                    <img
                      className='h-7 w-7'
                      src={computer}
                      alt='ফ্রী ক্লাসে যুক্ত হোন'
                    />
                  </div>
                </div>
                <div className='ml-4'>
                  <h4 className='text-lg font-medium leading-6 footer-color'>
                    ফ্রী ক্লাসে যুক্ত হোন
                  </h4>
                  <p className='mt-2 dark:text-gray-400'>
                    নিজের সক্ষমতা ও টিচারের অভিজ্ঞতা জানতে আমাদের ফ্রী ক্লাসে
                    যুক্ত হতে পারেন। ক্লাসে কি কি মজাদার বিষয় শেখাবেন তা জানতে
                    পারেন।
                  </p>
                </div>
              </div>

              <div className='flex mt-6'>
                <div className='flex-shrink-0'>
                  <div className='flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-white'>
                    <img
                      className='h-7 w-7'
                      src={web}
                      alt=' প্রোগ্রামিং কোর্সের জন্য ভর্তি হোন'
                    />
                  </div>
                </div>
                <div className='ml-4'>
                  <h4 className='text-lg font-medium leading-6 footer-color'>
                    রোবটিক্স বা প্রোগ্রামিং কোর্সের জন্য ভর্তি হোন
                  </h4>
                  <p className='mt-2 dark:text-gray-400'>
                    আমরা স্তর-ভিত্তিক নির্দেশনা প্রদান করি এবং গেমফিকেশন
                    ব্যবহারের মাধ্যমে পাঠকে আরও আকর্ষক করে তুলি। পাঠদান
                    প্রক্রিয়াটি শ্রেণীকক্ষে শেখার লক্ষ্যকে কেন্দ্র করে।
                  </p>
                </div>
              </div>
              <div className='flex mt-6'>
                <div className='flex-shrink-0'>
                  <div className='flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-white'>
                    <img
                      className='h-7 w-7'
                      src={dimploma}
                      alt=' সার্টিফিকেশন'
                    />
                  </div>
                </div>
                <div className='ml-4'>
                  <h4 className='text-lg font-medium leading-6 footer-color'>
                    সার্টিফিকেশন
                  </h4>
                  <p className='mt-2 dark:text-gray-400'>
                    আমরা প্রতিটি স্তর এবং বিষয়ের জন্য সার্টিফিকেশন প্রদান করি।
                    এটি শিক্ষার্থীদের একাডেমিকভাবে, ব্যক্তিগতভাবে এবং পেশাগতভাবে
                    উপকৃত করে।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </div>
  );
};

export default Features;
