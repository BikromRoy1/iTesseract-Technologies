import React from 'react';
import highSchool from '../../../../Images/teacher/website-high-school.jpg';
import university from '../../../../Images/teacher/website-university.jpg';
import school from '../../../../Images/teacher/school.jpg';
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section className='bg-[#F9F9F9]'>
      <div className='container px-6 py-12 mx-auto'>
        <div className='grid grid-cols-1 gap-5  xl:gap-6 md:grid-cols-2 xl:grid-cols-4'>
          <div className='flex flex-col items-center justify-center'>
            <div className='text-center md:text-left'>
              <h1 className=' footer-color banner-title'>
                প্রোগ্রামিং <span className='text-[#f5c310]'>ও</span> কোডিংয়ের
                দুনিয়ায় আপনাকে স্বাগতম !
              </h1>

              <p className=' banner-details mt-5 text-gray-500'>
                ৫ম শ্রেণী থেকে বিশ্ববিদ্যালয়ের শিক্ষার্থীদের জন্য স্পেশাল
                সার্টিফিকেট কোর্স
              </p>
            </div>
          </div>

          <div className='flex flex-col items-center text-center'>
            <div
              aria-hidden='true'
              className='mt-10 lg:mt-0 cursor-pointer relative'
            >
              <img
                loading='lazy'
                src='https://i.ibb.co/bF54byC/website-university-3.jpg'
                alt=''
                className='mx-auto rounded-lg shadow-lg dark:bg-gray-500 h-[530px]'
              />
              <div className='overlay'>
                <div className='absolute bottom-14 left-5'>
                  <p className='text-left text-white hover:text-white eduction-title-home'>
                    বিশ্ববিদ্যালয়ের শিক্ষার্থীদের জন্য
                  </p>
                  <div className='text-left'>
                    <Link to='/university'>
                      <button
                        className='bg-[#1bb57b] text-white font-normal px-4 hover:bg-[#f5c310] py-2 mt-3 text-sm rounded-full'
                        type='button'
                      >
                        ভিজিট করুন
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col items-center xl:mt-8 text-center'>
            <div aria-hidden='true' className='mt-10 lg:mt-0 relative'>
              <img
                loading='lazy'
                src={school}
                alt='roobt'
                className='mx-auto rounded-lg shadow-lg dark:bg-gray-500'
              />
              <div className='overlay'>
                <div className='absolute bottom-14 left-5'>
                  <p className='text-left text-white hover:text-white eduction-title-home'>
                    মাধ্যমিক শিক্ষার্থীদের জন্য
                  </p>
                  <div className='text-left'>
                    <Link to='/school'>
                      <button
                        className='bg-[#1bb57b] text-white font-normal px-4 hover:bg-[#f5c310] py-2 mt-3 text-sm rounded-full'
                        type='button'
                      >
                        ভিজিট করুন
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col items-center text-center'>
            <div aria-hidden='true' className='mt-10 lg:mt-0 relative '>
              <img
                loading='lazy'
                src='https://i.ibb.co/vzRT4kR/website-high-school.jpg'
                alt=''
                className='mx-auto rounded-lg shadow-lg bg-gray-900/40 h-[530px]'
              />
              <div className='overlay'>
                <div className='absolute bottom-14 left-5'>
                  <p className='text-left text-white hover:text-white eduction-title-home'>
                    উচ্চ মাধ্যমিক শিক্ষার্থীদের জন্য
                  </p>
                  <div className='text-left'>
                    <Link to='/certification'>
                      <button
                        className='bg-[#1bb57b] text-white font-normal px-4 hover:bg-[#f5c310] py-2 mt-3 text-sm rounded-full'
                        type='button'
                      >
                        ভিজিট করুন
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
