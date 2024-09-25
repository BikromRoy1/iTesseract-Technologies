import { MediaPlayer, MediaProvider } from '@vidstack/react';
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from '@vidstack/react/player/layouts/default';

import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import animation from '../../../Images/content.json';
import Lottie from 'lottie-react';

const DBVideos = () => {
  const location = useLocation();
  const { allCourses } = location.state || {};
  // course contents total items
  const courseContentsLength = allCourses?.course_contents?.length || 0;

  // start
  const [currentVideoId, setCurrentVideoId] = useState(
    allCourses?.course_contents[0]?.id
  );
  const [activeVideoTitle, setActiveVideoTitle] = useState(
    allCourses?.course_contents[0]?.title || 'No Title'
  );
  const [videoDuration, setVideoDuration] = useState(
    allCourses?.course_contents[0]?.duration || '00:00:00'
  );
  const videoRef = useRef(null);

  // Flatten modules to get all course contents
  const videoContents = allCourses?.course_contents;

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

  function durationToSeconds(duration) {
    const timeParts = duration.match(/(\d+h)?(\d+m)?(\d+s)?/);

    let totalSeconds = 0;

    if (timeParts[1]) totalSeconds += parseInt(timeParts[1]) * 3600; // hours to seconds
    if (timeParts[2]) totalSeconds += parseInt(timeParts[2]) * 60; // minutes to seconds
    if (timeParts[3]) totalSeconds += parseInt(timeParts[3]); // seconds

    return totalSeconds;
  }

  const courseContents = allCourses.course_contents; // Array of course contents

  // Calculate total duration in seconds
  const totalDurationInSeconds = courseContents.reduce((total, content) => {
    return total + durationToSeconds(content.duration);
  }, 0);

  // Helper function to convert seconds back to human-readable format
  function formatDuration(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${hours}h ${minutes}m ${secs}s`;
  }

  // Get the total duration in human-readable format
  const totalDuration = formatDuration(totalDurationInSeconds);


  return (
    <section className='dashboard-section'>
      <div className='dashboard-box'>
        <div className='box-header flex justify-between items-center'>
          <div className='box-title relative '>
            {allCourses ? `${allCourses?.course_name}` : 'No Course Selected'}
          </div>
        </div>
        {allCourses?.course_contents?.length > 0 ? (
          <div className='p-[1.25rem]'>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5'>
              <div className=''>
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
                <div className='bg-slate-600 px-4 py-6 rounded-md'>
                  <div className='videos-module'>
                    <div className='Course-Content flex items-center justify-between pb-4'>
                      <h4 className='font-semibold text-[16px] md:text-[22px] text-gray-300'>
                        Course Content
                      </h4>
                      <h5 className='font-semibold text-[16px] md:text-[22px] text-[#07bc0c]'>
                        {courseContentsLength}টি ভিডিও ({totalDuration})
                      </h5>
                    </div>
                    <details
                      className='group rounded-lg [&_summary::-webkit-details-marker]:hidden mb-[1rem] bg-[#F5F7F9]'
                      open
                    >
                      <summary className='flex items-center justify-between cursor-pointer bg-[#F5F7F9] py-[1rem] px-[1.25rem] rounded-[6px]'>
                        <h2 className='font-bold text-[#124265] videos-class-title text-[14px] sm:text-[14px] md:text-[16px]'>
                          এই কোর্স চ্যাপ্টার ম্যাটেরিয়াল{' '}
                          <span className='font-medium text-[#7b7b8a]'>
                            ( {courseContentsLength} Lectures)
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
                        {allCourses?.course_contents?.map((data, index) => (
                          <div key={data.id}>
                            <div className='flex justify-between items-center flex-wrap'>
                              <div className='relative flex items-center videos-name-main flex-wrap'>
                                <a
                                  href='#'
                                  onClick={() => handleVideoChange(data.id)}
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
                                      handleVideoChange(data.id);
                                    }}
                                  >
                                    {data.title}{' '}
                                  </span>
                                </span>
                              </div>
                              <p className='mb-0 text-[#7b7b8a] text-[16px] font-semibold flex items-center gap-2'>
                                {data?.duration}
                              </p>
                            </div>
                            {data !==
                              allCourses?.course_contents?.slice(-1)[0] && (
                              <hr className='hr-style my-[1rem] text-[#9a9ea4]' />
                            )}
                          </div>
                        ))}
                      </div>
                    </details>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className='flex items-center justify-center w-full h-[80vh]'>
            <div class='text-center'>
              <h2 className='mb-5 font-extrabold text-9xl dark:text-gray-600'>
                <span className='logo-color'>
                  <Lottie animationData={animation}></Lottie>
                </span>
              </h2>
              <p class='text-2xl font-semibold md:text-3xl'>
                দুঃখিত, কোর্স কনটেন্ট পৃষ্ঠাটি খুঁজে পাইনি
              </p>
              <p class='mt-4 mb-8 dark:text-gray-400'>
                দয়া করে কোর্স কনটেন্ট জন্য অপেক্ষা করুন।
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
    // <section className='dashboard-section'>
    //   <div className='dashboard-box'>
    //     <div className='box-header flex justify-between items-center'>
    //       <div className='box-title relative '>
    //         {allCourses ? `${allCourses?.course_name}` : 'No Course Selected'}
    //       </div>
    //     </div>
    //     <div className='p-[1.25rem]'>
    //       <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5'>
    //         <div className=''>
    //           <MediaPlayer
    //             autoplay
    //             crossorigin
    //             playsinline
    //             width='100%'
    //             height='420px'
    //             ref={videoRef}
    //             title='Sprite Fight'
    //             onLoadedMetadata={handleLoadedMetadata}
    //             src={videoData[currentVideoIndex].source}
    //           >
    //             <MediaProvider />

    //             <DefaultVideoLayout
    //               thumbnails='https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/storyboard.vtt'
    //               icons={defaultLayoutIcons}
    //             />
    //           </MediaPlayer>

    //           <h3 className='font-semibold  text-[16px] md:text-[22px] leading-[28px] pt-[20px]'>
    //             Video: {activeVideoTitle} - Duration:{' '}
    //             <span className='text-[#1BB57B]'>{videoDuration}</span>
    //           </h3>
    //         </div>
    //         <div>
    //           <div className='bg-slate-600 px-4 py-6 rounded-md'>
    //             <div className='videos-module'>
    //               <div className='Course-Content flex items-center justify-between pb-4'>
    //                 <h4 className='font-semibold text-[16px] md:text-[22px] text-gray-300'>
    //                   Course Content
    //                 </h4>
    //                 <h5 className='font-semibold text-[16px] md:text-[22px] text-[#07bc0c]'>
    //                   {courseContentsLength} Lessons (8h 15m)
    //                 </h5>
    //               </div>
    //               <details
    //                 className='group rounded-lg [&_summary::-webkit-details-marker]:hidden mb-[1rem] bg-[#F5F7F9]'
    //                 open
    //               >
    //                 <summary className='flex items-center justify-between cursor-pointer bg-[#F5F7F9] py-[1rem] px-[1.25rem] rounded-[6px]'>
    //                   <h2 className='font-bold text-[#124265] videos-class-title text-[14px] sm:text-[14px] md:text-[16px]'>
    //                     ক্লাস 01:মোবাইল অ্যাপ্লিকেশন এবং ওয়েবসাইট বিকাশের
    //                     ভূমিকা{' '}
    //                     <span className='font-medium text-[#7b7b8a]'>
    //                       ({videoData.length} Lectures)
    //                     </span>
    //                   </h2>

    //                   <span className='relative ml-1.5 h-5 w-5 flex-shrink-0'>
    //                     <svg
    //                       xmlns='http://www.w3.org/2000/svg'
    //                       className='absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0'
    //                       fill='none'
    //                       viewBox='0 0 24 24'
    //                       stroke='currentColor'
    //                       strokeWidth='2'
    //                     >
    //                       <path
    //                         strokeLinecap='round'
    //                         strokeLinejoin='round'
    //                         d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
    //                       />
    //                     </svg>

    //                     <svg
    //                       xmlns='http://www.w3.org/2000/svg'
    //                       className='absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100'
    //                       fill='none'
    //                       viewBox='0 0 24 24'
    //                       stroke='currentColor'
    //                       strokeWidth='2'
    //                     >
    //                       <path
    //                         strokeLinecap='round'
    //                         strokeLinejoin='round'
    //                         d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
    //                       />
    //                     </svg>
    //                   </span>
    //                 </summary>

    //                 <div className='mt-[1rem] pl-[1rem] pt-[0.2rem] pr-[0.5rem] pb-[0.7rem]'>
    //                   {allCourses?.course_contents?.map((data, index) => (
    //                     <div key={data.id}>
    //                       <div className='flex justify-between items-center flex-wrap'>
    //                         <div className='relative flex items-center videos-name-main flex-wrap'>
    //                           <a
    //                             href='#'
    //                             onClick={() => changeVideoSource(data.id - 1)}
    //                             className='btn-danger-soft mb-0'
    //                           >
    //                             <svg
    //                               xmlns='http://www.w3.org/2000/svg'
    //                               width='23'
    //                               height='23'
    //                               fill='currentColor'
    //                               className='bi bi-play-fill play-icons mr-0 pl-[3px]'
    //                               viewBox='0 0 16 16'
    //                             >
    //                               <path d='m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393' />
    //                             </svg>
    //                           </a>
    //                           <span className='inline-block truncate ml-2 mb-0 text-base font-normal w-[100px] sm:w-[200px] md:w-[400px] cursor-pointer'>
    //                             <a
    //                               className={`${
    //                                 currentVideoIndex === index
    //                                   ? 'active-video text-[#d6293e] font-semibold'
    //                                   : ''
    //                               }`}
    //                               href='#'
    //                               onClick={() => changeVideoSource(data.id - 1)}
    //                             >
    //                               {data?.title}{' '}
    //                             </a>
    //                           </span>
    //                         </div>
    //                         <p className='mb-0 text-[#7b7b8a] text-[16px] font-semibold flex items-center gap-2'>
    //                           {data?.duration}
    //                         </p>
    //                       </div>
    //                       {index !== videoData.length - 1 && (
    //                         <hr className='hr-style my-[1rem] text-[#9a9ea4]' />
    //                       )}
    //                     </div>
    //                   ))}
    //                 </div>
    //               </details>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default DBVideos;
