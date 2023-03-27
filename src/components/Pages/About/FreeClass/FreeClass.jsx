import React from "react";
import robot from '../../../../Images/student-banner.jpg';
import '../../../css/About.css';

const FreeClass = () => {
  return (
    <section className=''>
      <div
        className='hero h-[450px] text-center object-contain'
        style={{
          backgroundImage: `url(${robot})`,
        }}
      >
        <div className='hero-overlay bg-opacity-70'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className='max-w-3xl'>
            <h1 className='mb-5 text-5xl font-bold'>
              শিক্ষা - ভবিষ্যতে আপনার দরজা
            </h1>
            <p className='mb-5 '>
              সামাজিক সমস্যা মোকাবেলায় দেশগুলিকে সহায়তা করার উদ্দেশ্যে
              একাডেমিক প্রতিষ্ঠান, গবেষক এবং শিক্ষার্থীদের জন্য উদীয়মান
              প্রযুক্তির উপর ভিত্তি করে সফ্টওয়্যার এবং হার্ডওয়্যার তৈরি করা
              হয়েছে।
            </p>
          </div>
        </div>
      </div>
      {/* <div className=''>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='about-bg lg:py-32 py-6'>
            <div className='flex items-center justify-center'>
              <div className='p-7'>
                <h1 className='mb-5 text-center text-3xl lg:text-left font-semibold text-white'>
                  Education – Your Door To The Future
                </h1>
                <p className='text-white text-center lg:text-left '>
                  Developed software and hardware based on emerging technology
                  for academic institutions, researchers, and students with the
                  purpose of supporting countries in addressing social
                  difficulties.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <img className='w-full' src={robot} alt='robot' />
            </div>
          </div>

          <div>
            <div>
              <img className='w-full' src={coding} alt='robot' />
            </div>
          </div>

          <div className='about-bg lg:py-24 py-6'>
            <div className='p-6 lg:p-10'>
              <div className='mb-7'>
                <div className='lg:block hidden'>
                  <div className='flex items-center gap-6'>
                    <div>
                      <h2 className='relative vr-line font-semibold text-4xl text-white'>
                        Free
                      </h2>
                    </div>
                    <div className='text-white'>
                      <h1 className='font-semibold text-4xl mb-1'>
                        Book Your Free Class
                      </h1>
                      <p className='text-sm'>
                        Start The Journey of Robotics World
                      </p>
                    </div>
                  </div>
                </div>
                <div className='text-center text-white lg:hidden block'>
                  <h1 className='font-semibold text-4xl'>
                    Free Book Your Free Class
                  </h1>
                  <p className='text-sm'>Start The Journey of Robotics World</p>
                </div>
              </div>
              <div>
                <form action='' className='flex flex-row'>
                  <input
                    placeholder='Subscribe by e-mail'
                    type='email'
                    name=''
                    id=''
                    className='input-filed'
                  />
                  <button
                    className='start-btn uppercase text-white'
                    type='submit'
                  >
                    Get Started Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default FreeClass;
