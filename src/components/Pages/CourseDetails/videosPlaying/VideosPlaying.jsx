import { MediaPlayer, MediaProvider } from '@vidstack/react';
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from '@vidstack/react/player/layouts/default';

import React, { useRef, useState } from 'react';
import { FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Call from '../../../../Images/vidoes/Call-of-Duty.mp4';
import animal from '../../../../Images/vidoes/animal.mp4';
import bird from '../../../../Images/vidoes/bird.mp4';
import parrot from '../../../../Images/vidoes/parrot.mp4';
import production from '../../../../Images/vidoes/production.mp4';
import './VideosPlaying.css';

const VideosPlaying = () => {
  const videoData = [
    {
      id: 1,
      title: 'Introduction',
      source: parrot,
      duration: '2m 10s',
      isPremium: false,
    },
    {
      id: 2,
      title: 'Staying on the Sales Tightrope',
      source: animal,
      duration: '15m 10s',
      isPremium: false,
    },
    {
      id: 3,
      title: 'First Impressions and Body Language',
      source: production,
      duration: '18m 10s',
      isPremium: true,
    },
    {
      id: 4,
      title: 'Scratch Programming Basic',
      source: bird,
      duration: '25m 10s',
      isPremium: true,
    },
    {
      id: 5,
      title: 'Install and Overview',
      source: Call,
      duration: '25m 10s',
      isPremium: true,
    },
    // Add more video data as needed
  ];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [activeVideoTitle, setActiveVideoTitle] = useState(videoData[0].title);
  const [videoDuration, setVideoDuration] = useState('0:00'); // Initial duration
  const videoRef = useRef(null);

  const changeVideoSource = (newIndex) => {
    setCurrentVideoIndex(newIndex);
    setActiveVideoTitle(videoData[newIndex].title);
    setVideoDuration('0:00');
  };

  const handleLoadedMetadata = () => {
    // Update the video duration when metadata is loaded
    if (videoRef.current) {
      const durationInSeconds = videoRef.current.duration;
      const formattedDuration = formatVideoDuration(durationInSeconds);
      setVideoDuration(formattedDuration);
    }
  };

  const formatVideoDuration = (durationInSeconds) => {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = Math.floor(durationInSeconds % 60);
    return `${minutes}m ${seconds}s`;
  };

  return (
    <section className='videosPlaying-section'>
      <div className='container mx-auto p-6'>
        <div class='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5'>
          <div class=''>
            <div className='flex items-center gap-2 lg:gap-4 pb-[20px]'>
              <button className='hidden md:block'>
                <Link
                  to='/courseDetails'
                  className='bg-[#FFBB2C] flex items-center gap-1 uppercase px-4 py-2 rounded-md font-semibold text-[15px]'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    class='bi bi-arrow-left'
                    viewBox='0 0 16 16'
                  >
                    <path
                      fillRule='evenodd'
                      d='M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8'
                    />
                  </svg>
                  পেছনে যাই
                </Link>
              </button>
              <h4 className='font-bold text-[#124265] text-[16px] md:text-[20px] leading-[28px] '>
                মোবাইল অ্যাপ্লিকেশন ও ওয়েবসাইট ডেভেলপমেন্ট
              </h4>
            </div>
            {/* <video
              ref={videoRef}
              controls
              autoPlay
              width='100%'
              height='400px'
              src={videoData[currentVideoIndex].source}
              typeof='mp4'
              onLoadedMetadata={handleLoadedMetadata}
            ></video> */}

            <MediaPlayer
              autoplay
              crossorigin
              playsinline
              width='100%'
              height='420px'
              ref={videoRef}
              title='Sprite Fight'
              onLoadedMetadata={handleLoadedMetadata}
              src={videoData[currentVideoIndex].source}
            >
              <MediaProvider />

              <DefaultVideoLayout
                thumbnails='https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/storyboard.vtt'
                icons={defaultLayoutIcons}
              />
             
            </MediaPlayer>

            <h3 className='font-semibold  text-[16px] md:text-[22px] leading-[28px] pt-[20px]'>
              Video: {activeVideoTitle} - Duration: {videoDuration}
            </h3>
          </div>
          <div>
            <div class='bg-slate-600 px-4 py-7 rounded-md'>
              <div className='videos-module'>
                <div className='Course-Content flex items-center justify-between pb-4'>
                  <h4 className='font-semibold text-[16px] md:text-[22px] text-gray-300'>
                    Course Content
                  </h4>
                  <h5 className='font-semibold text-[16px] md:text-[22px] text-[#07bc0c]'>
                    {videoData.length + 4} Lessons (8h 15m)
                  </h5>
                </div>
                <details
                  className='group rounded-lg [&_summary::-webkit-details-marker]:hidden mb-[1rem] bg-[#F5F7F9]'
                  open
                >
                  <summary className='flex items-center justify-between cursor-pointer bg-[#F5F7F9] py-[1rem] px-[1.25rem] rounded-[6px]'>
                    <h2 className='font-bold text-[#124265] videos-class-title text-[14px] sm:text-[14px] md:text-[16px]'>
                      ক্লাস 01:মোবাইল অ্যাপ্লিকেশন এবং ওয়েবসাইট বিকাশের ভূমিকা{' '}
                      <span className='font-medium text-[#7b7b8a]'>
                        ({videoData.length} Lectures)
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

                  <div className='mt-[1rem] pl-[1rem] pt-[0.2rem] pr-[0.5rem] pb-[0.7rem]'>
                    {videoData.map((data, index) => (
                      <div key={data.id}>
                        <div className='flex justify-between items-center flex-wrap'>
                          <div className='relative flex items-center videos-name-main flex-wrap'>
                            <a
                              href='#'
                              onClick={() => changeVideoSource(data.id - 1)}
                              className='btn-danger-soft mb-0'
                            >
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
                              <a
                                className={`${
                                  currentVideoIndex === index
                                    ? 'active-video text-[#d6293e] font-semibold'
                                    : ''
                                }`}
                                href='#'
                                onClick={() => changeVideoSource(data.id - 1)}
                              >
                                {data.title}{' '}
                              </a>
                              {data.isPremium ? (
                                <span className='badge bg-[#FD7E14] border-none text-[14px] font-medium whitespace-nowrap text-white  ml-1 capitalize'>
                                  <FaLock className='w-[13px] h-[13px] mr-[3px]' />
                                  premium
                                </span>
                              ) : (
                                <span className='badge bg-[#1CAB55] border-none text-[14px] font-medium whitespace-nowrap text-white  ml-1'>
                                  ফ্রি
                                </span>
                              )}
                            </span>
                          </div>
                          <p className='mb-0 text-[#7b7b8a] text-[16px] font-semibold flex items-center gap-2'>
                            {videoDuration}
                          </p>
                        </div>
                        {index !== videoData.length - 1 && (
                          <hr className='hr-style my-[1rem] text-[#9a9ea4]' />
                        )}
                      </div>
                    ))}
                  </div>
                </details>
                <details className='group rounded-lg   [&_summary::-webkit-details-marker]:hidden mb-[1rem] bg-[#F5F7F9]'>
                  <summary className='flex items-center justify-between cursor-pointer bg-[#F5F7F9] py-[1rem] px-[1.25rem] rounded-[6px]'>
                    <h2 className='font-bold text-[#124265] videos-class-title text-[14px] sm:text-[14px] md:text-[16px]'>
                      ক্লাস 02: স্ক্র্যাচ প্রোগ্রামিং এর বেসিক
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
      </div>
    </section>
  );
};

export default VideosPlaying;
