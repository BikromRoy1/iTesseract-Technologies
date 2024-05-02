import React from 'react';
import { FaWifi } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { MdOutlineTimer } from 'react-icons/md';
import { Link } from 'react-router-dom';
import courseOne from '../../../../Images/course-01.jpg';
import courseTwo from '../../../../Images/course-02.jpg';
import student from '../../../../Images/teacher/student-02.png';
import '../../Home/Kits/Kits.css';

const UniSkills = () => {
  return (
    <section className='pb-14 pt-[40px]'>
      <div className='container p-6 mx-auto'>
        <div className='section-header'>
          <h4>বিশ্ববিদ্যালয় কোর্স</h4>
          <h2>
            {' '}
            কোর্স দক্ষতা <span className='title-gradient'>আপনি পাবেন</span>
          </h2>
          <p>
            অধ্যয়ন শুরু করার জন্য আপনার যা দরকার তা হল সঠিক মনের ফ্রেমে।
            আইটেসারেক্ট টেকনোলিজস-এর একজন ছাত্র হিসাবে, আপনি অসামান্য প্রশিক্ষক
            এবং কম্পিউটার বিজ্ঞানে দক্ষতা অর্জনের জন্য একটি সু-প্রতিষ্ঠিত
            পাঠ্যক্রম দ্বারা পরিচালিত হবেন।
          </p>
        </div>
        <div className='grid grid-cols-1 gap-8  xl:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
          <div className='single-card'>
            <div className='course-card'>
              <div className='course-card-img'>
                <img src={courseOne} loading='lazy' alt='university' />
                <div className='thumbnail-content'>
                  <span className='bg-[#ffbb2c] text-white rounded-[2px] inline-block px-[12px] font-semibold text-[15px] leading-[26px] m-[5px]'>
                    18% OFF
                  </span>
                </div>
              </div>
              <div className='course-card-body'>
                <div className='price-list flex items-center justify-between pb-[12px]'>
                  <div className='flex items-center'>
                    <h3 className='current-price primary-color font-bold text-[22px] tracking-[0.20000000298023224px]'>
                      ৳ ৩৪,৭০০
                    </h3>
                  </div>
                  <div className='flex items-center gap-2'>
                    <FaWifi className='text-[#4AB2FD] w-5 h-5' />
                    <h5 className='text-primary-color text-[17px] font-semibold'>
                      Online
                    </h5>
                  </div>
                </div>
                <h4 className='font-semibold text-[#124265] capitalize kits-title-2'>
                  আইপ্লে - বিশ্ববিদ্যালয় শিক্ষার্থীদের জন্য টুলস
                </h4>
                <div className='course-timing flex items-center gap-5 pb-4'>
                  <div className='flex items-center gap-2'>
                    <MdOutlineTimer className='text-[#1bb57b] w-5 h-5' />
                    <h4 className='font-semibold text-primary-color'>
                      3h 14m 20s
                    </h4>
                  </div>
                  <div className='flex items-center gap-2'>
                    <FiUsers className='text-[#4AB2FD] w-5 h-5' />
                    <h4 className='font-semibold text-primary-color'>
                      763 Students
                    </h4>
                  </div>
                  <div className='flex items-center gap-2'>
                    <IoDocumentTextOutline className='text-[#9333ea] w-5 h-5' />
                    <h4 className='font-semibold text-primary-color'>
                      4 Tests
                    </h4>
                  </div>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <img
                      src={student}
                      className='rounded-full w-10 h-10'
                      loading='lazy'
                      alt='icons'
                    />
                    <div>
                      <h2 className='font-semibold text-[17px] tracking-[0.20000000298023224px]'>
                        তাসনিম জামান
                      </h2>
                    </div>
                  </div>
                  <div>
                    <Link to='/courseDetails'>
                      <button className='custom-button text-[15px] font-semibold px-[16px] py-[5px] text-white rounded-md flex items-center gap-1'>
                        এখান থেকে শিখুন{' '}
                        <svg
                          stroke='currentColor'
                          fill='currentColor'
                          strokeWidth='0'
                          viewBox='0 0 512 512'
                          height='18'
                          width='18'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill='none'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='48'
                            d='M268 112l144 144-144 144m124-144H100'
                          ></path>
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='single-card'>
            <div className='course-card'>
              <div className='course-card-img'>
                <img src={courseTwo} loading='lazy' alt='university' />
                <div className='thumbnail-content '>
                  <span className='bg-[#ffbb2c] text-white rounded-[2px] inline-block px-[12px] font-semibold text-[15px] leading-[26px] m-[5px]'>
                    40% OFF
                  </span>
                </div>
              </div>
              <div className='course-card-body'>
                <div className='price-list flex items-center justify-between pb-[12px]'>
                  <div className='flex items-center'>
                    <h3 className='current-price primary-color font-bold text-[22px] tracking-[0.20000000298023224px]'>
                      ৳ ৬০,৯০০
                    </h3>
                  </div>
                  <div className='flex items-center gap-2'>
                    <FaWifi className='text-[#4AB2FD] w-5 h-5' />
                    <h5 className='text-primary-color text-[17px] font-semibold'>
                      Offline
                    </h5>
                  </div>
                </div>
                <h4 className='font-semibold text-[#124265] capitalize kits-title'>
                  আইহিরো - উচ্চ মাধ্যমিক শিক্ষার্থীদের জন্য টুলস
                </h4>
                <div className='course-timing flex items-center gap-5 pb-4'>
                  <div className='flex items-center gap-2'>
                    <MdOutlineTimer className='text-[#1bb57b] w-5 h-5' />
                    <h4 className='font-semibold text-primary-color'>
                      5h 56m 20s
                    </h4>
                  </div>
                  <div className='flex items-center gap-2'>
                    <FiUsers className='text-[#4AB2FD] w-5 h-5' />
                    <h4 className='font-semibold text-primary-color'>
                      530 Students
                    </h4>
                  </div>
                  <div className='flex items-center gap-2'>
                    <IoDocumentTextOutline className='text-[#9333ea] w-5 h-5' />
                    <h4 className='font-semibold text-primary-color'>
                      6 Tests
                    </h4>
                  </div>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <img
                      src={student}
                      className='rounded-full w-10 h-10'
                      loading='lazy'
                      alt='icons'
                    />
                    <div>
                      <h2 className='font-semibold text-[17px] tracking-[0.20000000298023224px]'>
                        তাসনিম জামান
                      </h2>
                    </div>
                  </div>
                  <div>
                    <Link to='/courseDetails'>
                      <button className='custom-button text-[15px] font-semibold px-[16px] py-[5px] text-white rounded-md flex items-center gap-1'>
                        এখান থেকে শিখুন{' '}
                        <svg
                          stroke='currentColor'
                          fill='currentColor'
                          strokeWidth='0'
                          viewBox='0 0 512 512'
                          height='18'
                          width='18'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill='none'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='48'
                            d='M268 112l144 144-144 144m124-144H100'
                          ></path>
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='single-card'>
            <div className='course-card'>
              <div className='course-card-img'>
                <img src={courseOne} loading='lazy' alt='university' />
                <div className='thumbnail-content'>
                  <span className='bg-[#ffbb2c] text-white rounded-[2px] inline-block px-[12px] font-semibold text-[15px] leading-[26px] m-[5px]'>
                    {' '}
                    90% OFF
                  </span>
                </div>
              </div>
              <div className='course-card-body'>
                <div className='price-list flex items-center justify-between pb-[12px]'>
                  <div className='flex items-center'>
                    <h3 className='current-price primary-color font-bold text-[22px] tracking-[0.20000000298023224px]'>
                      ৳ ৪৫,৭০০
                    </h3>
                  </div>
                  <div className='flex items-center gap-2'>
                    <FaWifi className='text-[#4AB2FD] w-5 h-5' />
                    <h5 className='text-primary-color text-[17px] font-semibold'>
                      Online
                    </h5>
                  </div>
                </div>
                <h4 className='font-semibold text-[#124265] capitalize kits-title'>
                  আইএডু - মাধ্যমিক শিক্ষার্থীদের জন্য টুলস
                </h4>
                <div className='course-timing flex items-center gap-5 pb-4'>
                  <div className='flex items-center gap-2'>
                    <MdOutlineTimer className='text-[#1bb57b] w-5 h-5' />
                    <h4 className='font-semibold text-primary-color'>
                      23h 55m 26s
                    </h4>
                  </div>
                  <div className='flex items-center gap-2'>
                    <FiUsers className='text-[#4AB2FD] w-5 h-5' />
                    <h4 className='font-semibold text-primary-color'>
                      120 Students
                    </h4>
                  </div>
                  <div className='flex items-center gap-2'>
                    <IoDocumentTextOutline className='text-[#9333ea] w-5 h-5' />
                    <h4 className='font-semibold text-primary-color'>
                      9 Tests
                    </h4>
                  </div>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <img
                      src={student}
                      className='rounded-full w-10 h-10'
                      loading='lazy'
                      alt='icons'
                    />
                    <div>
                      <h2 className='font-semibold text-[17px] tracking-[0.20000000298023224px]'>
                        তাসনিম জামান
                      </h2>
                    </div>
                  </div>
                  <div>
                    <Link to='/courseDetails'>
                      <button className='custom-button text-[15px] font-semibold px-[16px] py-[5px] text-white rounded-md flex items-center gap-1'>
                        এখান থেকে শিখুন{' '}
                        <svg
                          stroke='currentColor'
                          fill='currentColor'
                          strokeWidth='0'
                          viewBox='0 0 512 512'
                          height='18'
                          width='18'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill='none'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='48'
                            d='M268 112l144 144-144 144m124-144H100'
                          ></path>
                        </svg>
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

export default UniSkills;
