import React from 'react';
import { FaLock } from 'react-icons/fa';
import parrot from '../../../../Images/parrot.mp4';
import './VideosPlaying.css';

const videosPlaying = () => {
  return (
    <section className='videosPlaying-section'>
      <div className='container mx-auto p-6'>
        <div class='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5'>
          <div class=''>
            <h4 className='font-bold text-[#124265] text-[16px] md:text-[22px] leading-[28px] pb-[20px]'>
              মোবাইল অ্যাপ্লিকেশন ও ওয়েবসাইট ডেভেলপমেন্ট
            </h4>
            <video
              controls
              width='100%'
              height='400px'
              src={parrot}
              typeof='mp4'
            ></video>
            <h3 className='font-semibold  text-[16px] md:text-[22px] leading-[28px] pt-[20px]'>
              Video: ঘরে বসে ফ্রিল্যান্সিং করে আসলেই কি টাকা কামানো যায়? আর কত
              টাকা?
            </h3>
          </div>
          <div class=''>
            <div className='videos-module'>
              <details
                className='group rounded-lg [&_summary::-webkit-details-marker]:hidden mb-[1rem]'
                open
              >
                <summary className='flex items-center justify-between cursor-pointer bg-[#F5F7F9] py-[1rem] px-[1.25rem] rounded-[6px]'>
                  <h2 className='font-bold text-[#124265] videos-class-title text-[14px] sm:text-[14px] md:text-[16px]'>
                    মোবাইল অ্যাপ্লিকেশন এবং ওয়েবসাইট বিকাশের ভূমিকা{' '}
                    <span className='font-medium text-[#7b7b8a]'>
                      (3 Lectures)
                    </span>
                  </h2>

                  <span className='relative ml-1.5 h-5 w-5 flex-shrink-0'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='2'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>

                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='2'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </span>
                </summary>

                <div className='mt-[1rem] pl-[1rem] pt-[0.2rem] pr-[0.5rem] pb-[0.5rem]'>
                  <div className='flex justify-between items-center flex-wrap'>
                    <div className='relative flex items-center videos-name-main flex-wrap'>
                      <a href='#' className='btn-danger-soft mb-0'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='23'
                          height='23'
                          fill='currentColor'
                          className='bi bi-play-fill play-icons mr-0 pl-[3px]'
                          viewBox='0 0 16 16'
                        >
                          <path d='m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393' />
                        </svg>
                      </a>
                      <span className='inline-block truncate ml-2 mb-0 text-base font-normal w-[100px] sm:w-[200px] md:w-[400px] cursor-pointer'>
                        Introduction{' '}
                        <span className='badge bg-[#1CAB55] border-none text-[14px] font-medium whitespace-nowrap text-white  ml-1'>
                          ফ্রি
                        </span>
                      </span>
                    </div>
                    <p className='mb-0 text-[#7b7b8a] text-[16px] font-semibold flex items-center gap-2'>
                      2m 10s
                    </p>
                  </div>

                  <hr className='hr-style my-[1rem] text-[#9a9ea4]' />

                  <div className='flex justify-between items-center'>
                    <div className='relative flex items-center videos-name-main'>
                      <a href='#' className='btn-danger-soft mb-0 flex-wrap'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='23'
                          height='23'
                          fill='currentColor'
                          className='bi bi-play-fill play-icons mr-0 pl-[3px]'
                          viewBox='0 0 16 16'
                        >
                          <path d='m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393' />
                        </svg>
                      </a>
                      <span className='videos-name inline-block truncate ml-2 mb-0 text-base font-normal w-[100px] sm:w-[200px] md:w-[400px] cursor-pointer'>
                        {' '}
                        Staying on the Sales Tightrope{' '}
                        <span className='badge bg-[#1CAB55] border-none text-[14px] font-medium whitespace-nowrap text-white  ml-1'>
                          ফ্রি
                        </span>
                      </span>
                    </div>
                    <p className='mb-0 text-[#7b7b8a] text-[16px] font-semibold flex items-center gap-2'>
                      15m 10s{' '}
                    </p>
                  </div>

                  <hr className='hr-style my-[1rem] text-[#9a9ea4]' />

                  <div className='flex justify-between items-center  flex-wrap'>
                    <div className='relative flex items-center videos-name-main flex-wrap'>
                      <a href='#' class='btn-danger-soft mb-0'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='23'
                          height='23'
                          fill='currentColor'
                          class='bi bi-play-fill play-icons mr-0 pl-[3px]'
                          viewBox='0 0 16 16'
                        >
                          <path d='m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393' />
                        </svg>
                      </a>
                      <span className='inline-block truncate ml-2 mb-0 text-base font-normal w-[100px] sm:w-[200px] md:w-[400px] cursor-pointer'>
                        First Impressions and Body Language{' '}
                        <span className='badge bg-[#FD7E14] border-none text-[14px] font-medium whitespace-nowrap text-white  ml-1 capitalize'>
                          <FaLock className='w-[13px] h-[13px] mr-[3px]' />
                          premium
                        </span>
                      </span>
                    </div>
                    <p className='mb-0 text-[#7b7b8a] text-[16px] font-semibold'>
                      18m 10s
                    </p>
                  </div>

                  <hr className='hr-style my-[1rem] text-[#9a9ea4]' />

                  <div className='flex justify-between items-center '>
                    <div className='relative flex items-center videos-name-main'>
                      <a href='#' class='btn-danger-soft mb-0'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='23'
                          height='23'
                          fill='currentColor'
                          class='bi bi-play-fill play-icons mr-0 pl-[3px]'
                          viewBox='0 0 16 16'
                        >
                          <path d='m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393' />
                        </svg>
                      </a>
                      <span className='inline-block truncate ml-2 mb-0 text-base font-normal w-[100px] sm:w-[200px] md:w-[400px] cursor-pointer'>
                        Scratch Programming Basic
                        <span className='badge bg-[#FD7E14] border-none text-[14px] font-medium whitespace-nowrap text-white  ml-1 capitalize'>
                          <FaLock className='w-[13px] h-[13px] mr-[3px]' />
                          premium
                        </span>
                      </span>
                    </div>
                    <p className='mb-0 text-[#7b7b8a] text-[16px] font-semibold'>
                      25m 10s
                    </p>
                  </div>
                </div>
              </details>
              <details className='group rounded-lg   [&_summary::-webkit-details-marker]:hidden mb-[1rem]'>
                <summary className='flex items-center justify-between cursor-pointer bg-[#F5F7F9] py-[1rem] px-[1.25rem] rounded-[6px]'>
                  <h2 className='font-bold text-[#124265] videos-class-title text-[14px] sm:text-[14px] md:text-[16px]'>
                    ক্লাস 01: স্ক্র্যাচ প্রোগ্রামিং এর বেসিক
                    <span className='font-medium text-[#7b7b8a]'>
                      {' '}
                      (06 Lectures)
                    </span>
                  </h2>

                  <span className='relative ml-1.5 h-5 w-5 flex-shrink-0'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='2'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>

                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='2'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </span>
                </summary>

                <div className='mt-[1rem] pl-[1rem] pt-[0.2rem] pr-[0.5rem] pb-[0.5rem]'>
                  <div className='flex justify-between items-center flex-wrap'>
                    <div className='relative flex items-center videos-name-main flex-wrap'>
                      <a href='#' className='btn-danger-soft mb-0'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='23'
                          height='23'
                          fill='currentColor'
                          className='bi bi-play-fill play-icons mr-0 pl-[3px]'
                          viewBox='0 0 16 16'
                        >
                          <path d='m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393' />
                        </svg>
                      </a>
                      <span className='inline-block truncate ml-2 mb-0 text-base font-normal w-[100px] sm:w-[200px] md:w-[400px] cursor-pointer'>
                        Game development using blocks{' '}
                        <span className='badge bg-[#FD7E14] border-none text-[14px] font-medium whitespace-nowrap text-white  ml-1 capitalize'>
                          <FaLock className='w-[13px] h-[13px] mr-[3px]' />
                          premium
                        </span>
                      </span>
                    </div>
                    <p className='mb-0 text-[#7b7b8a] text-[16px] font-semibold'>
                      2m 10s
                    </p>
                  </div>

                  <hr className='hr-style my-[1rem] text-[#9a9ea4]' />

                  <div className='flex justify-between items-center'>
                    <div className='relative flex items-center videos-name-main'>
                      <a href='#' className='btn-danger-soft mb-0 flex-wrap'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='23'
                          height='23'
                          fill='currentColor'
                          className='bi bi-play-fill play-icons mr-0 pl-[3px]'
                          viewBox='0 0 16 16'
                        >
                          <path d='m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393' />
                        </svg>
                      </a>
                      <span className='videos-name inline-block truncate ml-2 mb-0 text-base font-normal w-[100px] sm:w-[200px] md:w-[400px] cursor-pointer'>
                        {' '}
                        Scratch Components{' '}
                        <span className='badge bg-[#FD7E14] border-none text-[14px] font-medium whitespace-nowrap text-white  ml-1 capitalize'>
                          <FaLock className='w-[13px] h-[13px] mr-[3px]' />
                          premium
                        </span>
                      </span>
                    </div>
                    <p className='mb-0 text-[#7b7b8a] text-[16px] font-semibold'>
                      15m 10s
                    </p>
                  </div>

                  <hr className='hr-style my-[1rem] text-[#9a9ea4]' />

                  <div className='flex justify-between items-center  flex-wrap'>
                    <div className='relative flex items-center videos-name-main flex-wrap'>
                      <a href='#' class='btn-danger-soft mb-0'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='23'
                          height='23'
                          fill='currentColor'
                          class='bi bi-play-fill play-icons mr-0 pl-[3px]'
                          viewBox='0 0 16 16'
                        >
                          <path d='m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393' />
                        </svg>
                      </a>
                      <span className='inline-block truncate ml-2 mb-0 text-base font-normal w-[100px] sm:w-[200px] md:w-[400px] cursor-pointer'>
                        Knowing Your Topic and Specification{' '}
                        <span className='badge bg-[#FD7E14] border-none text-[14px] font-medium whitespace-nowrap text-white  ml-1 capitalize'>
                          <FaLock className='w-[13px] h-[13px] mr-[3px]' />
                          premium
                        </span>
                      </span>
                    </div>
                    <p className='mb-0 text-[#7b7b8a] text-[16px] font-semibold'>
                      18m 10s
                    </p>
                  </div>

                  <hr className='hr-style my-[1rem] text-[#9a9ea4]' />

                  <div className='flex justify-between items-center '>
                    <div className='relative flex items-center videos-name-main'>
                      <a href='#' class='btn-danger-soft mb-0'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='23'
                          height='23'
                          fill='currentColor'
                          class='bi bi-play-fill play-icons mr-0 pl-[3px]'
                          viewBox='0 0 16 16'
                        >
                          <path d='m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393' />
                        </svg>
                      </a>
                      <span className='inline-block truncate ml-2 mb-0 text-base font-normal w-[100px] sm:w-[200px] md:w-[400px] cursor-pointer'>
                        Introduction to Box Modelling{' '}
                        <span className='badge bg-[#FD7E14] border-none text-[14px] font-medium whitespace-nowrap text-white  ml-1 capitalize'>
                          <FaLock className='w-[13px] h-[13px] mr-[3px]' />
                          premium
                        </span>
                      </span>
                    </div>
                    <p className='mb-0 text-[#7b7b8a] text-[16px] font-semibold'>
                      25m 10s
                    </p>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default videosPlaying;
