import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Videos.css';

const Videos = ({ mainCourse }) => {
  const { modules, course } = mainCourse;

  const navigate = useNavigate();

  const handleViewClick = (content) => {
    navigate('/videosPlay', { state: { modules, course } });
  };

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

    return `${hours}${' '} ঘন্টা  ${minutes} ${' '} মিনিট ${remainingSeconds}${' '}সেকেন্ড`;
  }

  let totalDurationInSeconds = 0;

  modules.forEach((module) => {
    module.course_contents.forEach((content) => {
      totalDurationInSeconds += parseDuration(content.duration);
    });
  });

  const totalDuration = formatDuration(totalDurationInSeconds);

  // Function to zero-pad numbers less than 10
  const zeroPad = (num) => (num < 10 ? `0${num}` : num);
  return (
    <div className='videos-card-title'>
      <div className='videos-title'>
        <h3 className='w-full'>কোর্সের পাঠ্যক্রম</h3>
      </div>
      <div className='videos-timing'>
        <ul className='flex pb-3 flex-wrap items-center'>
          <li className='mr-[30px] text-[#7b7b8a] text-[17px] font-medium'>
            <span className='text-[#124265] font-semibold'>ক্লাস-</span>{' '}
            {zeroPad(modules?.length)}
          </li>
          <li className='mr-[30px] text-[#7b7b8a] text-[17px] font-medium'>
            <span className='text-[#124265] font-semibold'>মোট:</span>{' '}
            {totalDuration}
          </li>
        </ul>
      </div>
      <div className='pb-4'>
        <p className='text-[#7b7b8a]'>
          আপনার সন্তানের স্মার্টফোন এডিকশন এখন আর আপনার মাথাব্যথার কারণ হবে না।
          কারণ সারাদিন মোবাইলে গেম না খেলে ও নিজেই গেম বানাবে এখন। কোডিং শেখা ওর
          কাছে একদমই বোরিং মনে হবে না কারণ আপনার সন্তান এবার প্রোগ্রামিং এর এ টু
          জেড শিখবে খেলতে খেলতে।
        </p>
      </div>

      <div className='videos-module'>
        {modules.map((module, index) => (
          <details
            key={module.id}
            className='group rounded-lg [&_summary::-webkit-details-marker]:hidden mb-[1rem]'
            open={index === 0} // Open the first item by default
          >
            <summary className='flex items-center justify-between cursor-pointer bg-[#F5F7F9] py-[1rem] px-[1.25rem] rounded-[6px]'>
              <h2
                className={`font-bold text-[#124265] videos-class-title text-[14px] sm:text-[14px] md:text-[16px]`}
              >
                {module?.name}{' '}
                <span className='font-medium text-[#7b7b8a]'>
                  ( {zeroPad(module?.course_contents?.length)} Lectures )
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
              {module?.course_contents?.map((content, contentIndex) => (
                <div key={content?.id}>
                  <div className='flex justify-between items-center flex-wrap'>
                    <div className='relative flex items-center videos-name-main flex-wrap'>
                      <a href={content.file} className='btn-danger-soft mb-0'>
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
                        {content?.title}{' '}
                        {content?.is_preview ? (
                          <span className='badge bg-[#1CAB55] border-none text-[14px] font-medium whitespace-nowrap text-white  ml-1'>
                            ফ্রি
                          </span>
                        ) : (
                          <span className='badge bg-[#FD7E14] border-none text-[14px] font-medium whitespace-nowrap text-white  ml-1 capitalize'>
                            Premium
                          </span>
                        )}
                      </span>
                    </div>
                    <p className='mb-0 text-[#7b7b8a] text-[16px] font-semibold flex items-center gap-2'>
                      {content?.duration}
                      <span className=''>
                        <a
                          className={`flex items-center gap-1 badge py-[11px]  ${
                            content.is_preview
                              ? 'bg-[#1CAB55] border-[#1CAB55]'
                              : 'bg-[#FD7E14] border-[#FD7E14]'
                          } `}
                          onClick={() => {
                            if (content?.is_preview) {
                              handleViewClick();
                            } else {
                              navigate('/registration');
                            }
                          }}
                          style={{ cursor: 'pointer' }}
                        >
                          {content?.is_preview ? (
                            <>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='18'
                                height='18'
                                fill='currentColor'
                                className='bi bi-eye'
                                viewBox='0 0 16 16'
                              >
                                <path d='M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z' />
                                <path d='M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0' />
                              </svg>
                              দেখুন
                            </>
                          ) : (
                            <>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 512 512'
                                width='15'
                                height='15'
                                fill='currentColor'
                              >
                                <path d='M307 34.8c-11.5 5.1-19 16.6-19 29.2l0 64-112 0C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96l96 0 0 64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z' />
                              </svg>
                              রেজিস্ট্রেশন
                            </>
                          )}
                        </a>
                      </span>
                    </p>
                  </div>
                  {contentIndex < module?.course_contents?.length - 1 && (
                    <hr className='hr-style my-[1rem] text-[#9a9ea4]' />
                  )}
                </div>
              ))}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
};

export default Videos;
