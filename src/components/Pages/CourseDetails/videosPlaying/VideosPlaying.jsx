import { MediaPlayer, MediaProvider } from '@vidstack/react';
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from '@vidstack/react/player/layouts/default';

import React, { useEffect, useRef, useState } from 'react';
import { FaLock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './VideosPlaying.css';

import { useLocation } from 'react-router-dom';

const VideosPlaying = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { modules, course } = location.state || {};

  // Total number of videos
  const courseContent = modules.map((module) => module.course_contents);
  const totalCourseContent = courseContent.map((content) => content.length);
  const totalVideoContent = totalCourseContent.reduce(
    (acc, curr) => acc + curr,
    0
  );

  function parseDuration(duration) {
    const parts = duration.split(' ');
    let totalSeconds = 0;

    parts.forEach((part) => {
      if (part.includes('h')) {
        totalSeconds += parseInt(part) * 3600;
      } else if (part.includes('m')) {
        totalSeconds += parseInt(part) * 60;
      } else if (part.includes('s')) {
        totalSeconds += parseInt(part);
      }
    });

    return totalSeconds;
  }

  function formatDuration(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${hours}h ${minutes}m ${remainingSeconds}s`;
  }

  let totalDurationInSeconds = 0;

  modules.forEach((module) => {
    module.course_contents.forEach((content) => {
      totalDurationInSeconds += parseDuration(content.duration);
    });
  });

  const totalDuration = formatDuration(totalDurationInSeconds);

  const handleGoBack = () => {
    navigate(-1); // Goes back to the previous route
  };

  // 01

  // const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  // const [activeVideoTitle, setActiveVideoTitle] = useState(
  //   modules[0].course_contents[0].title
  // );
  // const [videoDuration, setVideoDuration] = useState(
  //   modules[0].course_contents[0].duration
  // );
  // const videoRef = useRef(null);

  // const handleVideoChange = (index) => {
  //   setCurrentVideoIndex(index);
  //   setActiveVideoTitle(module.course_contents[index].title);
  //   setVideoDuration(module.course_contents[index].duration);
  // };

  // const handleLoadedMetadata = () => {
  //   if (videoRef.current) {
  //     // Example of getting video duration in seconds and formatting it
  //     const durationInSeconds = videoRef.current.duration;
  //     const formattedDuration = formatVideoDuration(durationInSeconds);
  //     setVideoDuration(formattedDuration);
  //   }
  // };

  // const formatVideoDuration = (seconds) => {
  //   const h = Math.floor(seconds / 3600)
  //     .toString()
  //     .padStart(2, '0');
  //   const m = Math.floor((seconds % 3600) / 60)
  //     .toString()
  //     .padStart(2, '0');
  //   const s = Math.floor(seconds % 60)
  //     .toString()
  //     .padStart(2, '0');
  //   return `${h}:${m}:${s}`;
  // };

  // const videoContents = modules.flatMap((module) => module.course_contents);
  const [currentVideoId, setCurrentVideoId] = useState(
    modules[0]?.course_contents[0]?.id
  );
  const [activeVideoTitle, setActiveVideoTitle] = useState(
    modules[0]?.course_contents[0]?.title || 'No Title'
  );
  const [videoDuration, setVideoDuration] = useState(
    modules[0]?.course_contents[0]?.duration || '00:00:00'
  );
  const videoRef = useRef(null);

  // Flatten modules to get all course contents
  const videoContents = modules.flatMap((module) => module.course_contents);

  const currentVideo = videoContents.find(
    (video) => video.id === currentVideoId
  );

  useEffect(() => {
    if (videoRef.current && currentVideo) {
      const durationInSeconds = videoRef.current.duration;
      const formattedDuration = formatVideoDuration(durationInSeconds);
      setVideoDuration(formattedDuration);
    }
  }, [currentVideoId]);

  const handleVideoChange = (videoId) => {
    setCurrentVideoId(videoId);
    const videoData = videoContents.find((video) => video.id === videoId);
    if (videoData) {
      setActiveVideoTitle(videoData.title);
      setVideoDuration(videoData.duration);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      const durationInSeconds = videoRef.current.duration;
      const formattedDuration = formatVideoDuration(durationInSeconds);
      setVideoDuration(formattedDuration);
    }
  };

  const formatVideoDuration = (seconds) => {
    const h = Math.floor(seconds / 3600)
      .toString()
      .padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, '0');
    const s = Math.floor(seconds % 60)
      .toString()
      .padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  // Function to zero-pad numbers less than 10
  const zeroPad = (num) => (num < 10 ? `0${num}` : num);

  return (
    <>
      {/* <section className='videosPlaying-section'>
        <div className='container mx-auto p-6'>
          <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5'>
            <div className=''>
              <div className='flex items-center gap-2 lg:gap-4 pb-[20px]'>
                <button className='hidden md:block'>
                  <Link
                    onClick={handleGoBack}
                    className='bg-[#FFBB2C] flex items-center gap-1 uppercase px-4 py-2 rounded-md font-semibold text-[15px]'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      className='bi bi-arrow-left'
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
                  {course?.course_name || 'কোর্সের নাম পাওয়া যায়নি'}
                </h4>
              </div>

              <MediaPlayer
                autoplay
                crossorigin
                playsinline
                width='100%'
                height='420px'
                ref={videoRef}
                title='Sprite Fight'
                onLoadedMetadata={handleLoadedMetadata}
                src={videoContents[currentVideoIndex].file}
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
              <div className='bg-slate-600 px-4 py-7 rounded-md'>
                <div className='videos-module'>
                  <div className='Course-Content flex items-center justify-between pb-4'>
                    <h4 className='font-semibold text-[16px] md:text-[22px] text-gray-300'>
                      Course Content
                    </h4>
                    <h5 className='font-semibold text-[16px] md:text-[22px] text-[#07bc0c]'>
                      {totalVideoContent} Lessons ( {totalDuration} )
                    </h5>
                  </div>
                  {modules.map((module, index) => (
                    <details
                      key={module.id}
                      className='group rounded-lg [&_summary::-webkit-details-marker]:hidden mb-[1rem] bg-[#F5F7F9]'
                      open={index === 0} // Open the first item by default
                    >
                      <summary className='flex items-center justify-between cursor-pointer bg-[#F5F7F9] py-[1rem] px-[1.25rem] rounded-[6px]'>
                        <h2 className='font-bold text-[#124265] videos-class-title text-[14px] sm:text-[14px] md:text-[16px]'>
                          {module?.name}{' '}
                          <span className='font-medium text-[#7b7b8a]'>
                            ( {zeroPad(module?.course_contents?.length)}{' '}
                            Lectures )
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
                        {module?.course_contents?.map((data, index) => (
                          <div key={data.id}>
                            <div className='flex justify-between items-center flex-wrap'>
                              <div className='relative flex items-center videos-name-main flex-wrap'>
                                <a
                                  href='javascript:void(0)'
                                  onClick={() => handleVideoChange(index)}
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
                                  <span
                                    className={`${
                                      currentVideoIndex === index
                                        ? 'active-video text-[#d6293e] font-semibold'
                                        : ''
                                    }`}
                                    // href='#'
                                    onClick={(e) => {
                                      e.preventDefault();
                                      if (data.is_preview) {
                                        handleVideoChange(index); // Open the video
                                      } else {
                                        window.location.href = '/registration'; // Redirect to the login page
                                      }
                                    }}
                                  >
                                    {data.title}{' '}
                                  </span>
                                  {data?.is_preview ? (
                                    <span className='badge bg-[#1CAB55] border-none text-[14px] font-medium whitespace-nowrap text-white  ml-1'>
                                      ফ্রি
                                    </span>
                                  ) : (
                                    <span className='badge bg-[#FD7E14] border-none text-[14px] font-medium whitespace-nowrap text-white  ml-1 capitalize'>
                                      <FaLock className='w-[13px] h-[13px] mr-[3px]' />
                                      premium
                                    </span>
                                  )}
                                </span>
                              </div>
                              <p className='mb-0 text-[#7b7b8a] text-[16px] font-semibold flex items-center gap-2'>
                                {data.duration}
                              </p>
                            </div>
                            {index < module?.course_contents?.length - 1 && (
                              <hr className='hr-style my-[1rem] text-[#9a9ea4]' />
                            )}
                          </div>
                        ))}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className='videosPlaying-section'>
        <div className='container mx-auto p-6'>
          <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5'>
            <div>
              <div className='flex items-center gap-2 lg:gap-4 pb-[20px]'>
                <button className='hidden md:block'>
                  <Link
                    onClick={handleGoBack}
                    className='bg-[#FFBB2C] flex items-center gap-1 uppercase px-4 py-2 rounded-md font-semibold text-[15px]'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      className='bi bi-arrow-left'
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
                  {course?.course_name || 'কোর্সের নাম পাওয়া যায়নি'}
                </h4>
              </div>

              <MediaPlayer
                autoplay
                crossorigin
                playsinline
                width='100%'
                height='420px'
                ref={videoRef}
                title='Sprite Fight'
                onLoadedMetadata={handleLoadedMetadata}
                key={currentVideoId} // Add a key to force re-render
                src={currentVideo?.file || ''}
              >
                <MediaProvider />

                <DefaultVideoLayout
                  thumbnails='https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/storyboard.vtt'
                  icons={defaultLayoutIcons}
                />
              </MediaPlayer>

              <h3 className='font-semibold  text-[16px] md:text-[22px] leading-[28px] pt-[20px]'>
                Video:{' '}
                <span className='text-[#059669] text-[14px] md:text-[17px]'>
                  {activeVideoTitle}
                </span>{' '}
                - Duration:{' '}
                <span className='text-[#0891b2] text-[14px] md:text-[17px]'>
                  {videoDuration}
                </span>
              </h3>
            </div>
            <div>
              <div className='bg-slate-600 px-4 py-7 rounded-md'>
                <div className='videos-module'>
                  <div className='Course-Content flex items-center justify-between pb-4'>
                    <h4 className='font-semibold text-[16px] md:text-[22px] text-gray-300'>
                      Course Content
                    </h4>
                    <h5 className='font-semibold text-[16px] md:text-[22px] text-[#07bc0c]'>
                      {totalVideoContent} Lessons ( {totalDuration} )
                    </h5>
                  </div>
                  {modules.map((module) => (
                    <details
                      key={module.id}
                      className='group rounded-lg [&_summary::-webkit-details-marker]:hidden mb-[1rem] bg-[#F5F7F9]'
                      open={modules.indexOf(module) === 0} // Open the first item by default
                    >
                      <summary className='flex items-center justify-between cursor-pointer bg-[#F5F7F9] py-[1rem] px-[1.25rem] rounded-[6px]'>
                        <h2 className='font-bold text-[#124265] videos-class-title text-[14px] sm:text-[14px] md:text-[16px]'>
                          {module?.name}{' '}
                          <span className='font-medium text-[#7b7b8a]'>
                            ( {zeroPad(module?.course_contents?.length)}{' '}
                            Lectures )
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
                        {module?.course_contents?.map((data) => (
                          <div key={data.id}>
                            <div className='flex justify-between items-center flex-wrap'>
                              <div className='relative flex items-center videos-name-main flex-wrap'>
                                <a
                                  href='javascript:void(0)'
                                  onClick={() => handleVideoChange(data.id)} // Use video ID
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
                                  <span
                                    className={`${
                                      currentVideoId === data.id
                                        ? 'active-video text-[#d6293e] font-semibold'
                                        : ''
                                    }`}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      if (data.is_preview) {
                                        handleVideoChange(data.id); // Open the video
                                      } else {
                                        window.location.href = '/registration'; // Redirect to the login page
                                      }
                                    }}
                                  >
                                    {data.title}{' '}
                                  </span>
                                  {data?.is_preview ? (
                                    <span className='badge bg-[#1CAB55] border-none text-[14px] font-medium whitespace-nowrap text-white  ml-1'>
                                      ফ্রি
                                    </span>
                                  ) : (
                                    <span className='badge bg-[#FD7E14] border-none text-[14px] font-medium whitespace-nowrap text-white  ml-1 capitalize'>
                                      <FaLock className='w-[13px] h-[13px] mr-[3px]' />
                                      premium
                                    </span>
                                  )}
                                </span>
                              </div>
                              <p className='mb-0 text-[#7b7b8a] text-[16px] font-semibold flex items-center gap-2'>
                                {data.duration}
                              </p>
                            </div>
                            {data !== module?.course_contents?.slice(-1)[0] && (
                              <hr className='hr-style my-[1rem] text-[#9a9ea4]' />
                            )}
                          </div>
                        ))}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideosPlaying;
