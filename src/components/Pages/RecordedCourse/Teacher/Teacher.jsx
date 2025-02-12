import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { apiUrl } from '../../../../config/config';

const SchoolTeacher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/v1/trainers`);
        setData(response.data);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false when data is fetched
      }
    };
    fetchData();
  }, []);

  const teacherData = data.data;

  const currentYear = new Date().getFullYear();

  return (
    <section className='py-14'>
      <div className='container p-6 mx-auto'>
        <div className='section-header'>
          <h4>ক্লাস নেবেন যারা</h4>
          <h2>
            আমাদের জনপ্রিয়
            <span className='title-gradient'> শিক্ষকবৃন্দ</span>
          </h2>
          <p>
            {currentYear} সাল জুড়ে অভিজ্ঞ শিক্ষকদের সাথে সম্পূর্ণ কোর্স শেষ করেন
            । তাই ক্লাস বা ক্লাসের বাইরে যেকোনো প্রয়োজনে বন্ধুসুলভ এই মুখগুলোই
            আপনার ক্যারিয়ারের পথচলার মেন্টর হতে পারে।
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
          {loading ? (
            <>
              <div className='flex flex-col m-8 rounded-lg shadow-sm w-full animate-pulse h-96'>
                <div className='h-48 rounded-t bg-[#d1fae5]'></div>
                <div className='flex-1 px-4 py-8 space-y-4 sm:p-8 bg-[#ecfdf5]'>
                  <div className='w-full h-6 rounded bg-[#d1fae5]'></div>
                  <div className='w-full h-6 rounded bg-[#d1fae5]'></div>
                  <div className='w-3/4 h-6 rounded bg-[#d1fae5]'></div>
                </div>
              </div>
              <div className='flex flex-col m-8 rounded-lg shadow-sm w-full animate-pulse h-96'>
                <div className='h-48 rounded-t bg-[#d1fae5]'></div>
                <div className='flex-1 px-4 py-8 space-y-4 sm:p-8 bg-[#ecfdf5]'>
                  <div className='w-full h-6 rounded bg-[#d1fae5]'></div>
                  <div className='w-full h-6 rounded bg-[#d1fae5]'></div>
                  <div className='w-3/4 h-6 rounded bg-[#d1fae5]'></div>
                </div>
              </div>
              <div className='flex flex-col m-8 rounded-lg shadow-sm w-full animate-pulse h-96'>
                <div className='h-48 rounded-t bg-[#d1fae5]'></div>
                <div className='flex-1 px-4 py-8 space-y-4 sm:p-8 bg-[#ecfdf5]'>
                  <div className='w-full h-6 rounded bg-[#d1fae5]'></div>
                  <div className='w-full h-6 rounded bg-[#d1fae5]'></div>
                  <div className='w-3/4 h-6 rounded bg-[#d1fae5]'></div>
                </div>
              </div>
              <div className='flex flex-col m-8 rounded-lg shadow-sm w-full animate-pulse h-96'>
                <div className='h-48 rounded-t bg-[#d1fae5]'></div>
                <div className='flex-1 px-4 py-8 space-y-4 sm:p-8 bg-[#ecfdf5]'>
                  <div className='w-full h-6 rounded bg-[#d1fae5]'></div>
                  <div className='w-full h-6 rounded bg-[#d1fae5]'></div>
                  <div className='w-3/4 h-6 rounded bg-[#d1fae5]'></div>
                </div>
              </div>
            </>
          ) : (
            teacherData?.map((item) => (
              <div key={item?.id}>
                <div
                  className='w-full overflow-hidden bg-white rounded-lg shadow-lg '
                  title={item?.name}
                >
                  <img
                    className='object-cover w-full h-72'
                    loading='lazy'
                    src={`${apiUrl}/` + item?.image}
                    alt={item?.name}
                  />

                  <div className='py-5 text-center'>
                    <Link
                      to={`/trainer/${item?.slug}`}
                      className='block text-xl font-bold text-gray-800 '
                      tabIndex='0'
                      role='link'
                    >
                      {item?.name}
                    </Link>
                    <span className='text-base text-gray-700 dark:text-gray-400'>
                      {item?.designation}
                    </span>
                    <div className='flex items-center justify-center gap-3 pt-4 pb-3'>
                      <a
                        target='_blank'
                        href={item?.facebook}
                        className='text-[#33354d] border border-[#d4d7e5] rounded-md flex justify-center items-center w-9 h-9 hover:text-white hover:bg-[#1877f2] hover:border-[#1877f2] hover:shadow-[0_0.375rem_1.125rem_-0.375rem_rgba(24,119,242,0.8)] cursor-pointer'
                      >
                        <svg
                          width='18'
                          height='18'
                          viewBox='0 0 18 18'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='fill-current'
                        >
                          <path
                            d='M13.3315 7.25625H11.7565H11.194V6.69375V4.95V4.3875H11.7565H12.9377C13.2471 4.3875 13.5002 4.1625 13.5002 3.825V0.84375C13.5002 0.534375 13.2752 0.28125 12.9377 0.28125H10.8846C8.66272 0.28125 7.11584 1.85625 7.11584 4.19062V6.6375V7.2H6.55334H4.64084C4.24709 7.2 3.88147 7.50937 3.88147 7.95937V9.98438C3.88147 10.3781 4.19084 10.7438 4.64084 10.7438H6.49709H7.05959V11.3063V16.9594C7.05959 17.3531 7.36897 17.7188 7.81897 17.7188H10.4627C10.6315 17.7188 10.7721 17.6344 10.8846 17.5219C10.9971 17.4094 11.0815 17.2125 11.0815 17.0437V11.3344V10.7719H11.6721H12.9377C13.3033 10.7719 13.5846 10.5469 13.6408 10.2094V10.1813V10.1531L14.0346 8.2125C14.0627 8.01562 14.0346 7.79063 13.8658 7.56562C13.8096 7.425 13.5565 7.28437 13.3315 7.25625Z'
                            fill=''
                          ></path>
                        </svg>
                      </a>
                      <a
                        target='_blank'
                        href={item?.twitter}
                        className='text-[#33354d] border border-[#d4d7e5] rounded-md flex justify-center items-center w-9 h-9 hover:text-white hover:bg-[#1da1f2] hover:border-[#1da1f2] hover:shadow-[0_0.375rem_1.125rem_-0.375rem_rgba(29,161,242,0.8)] cursor-pointer'
                      >
                        <svg
                          width='18'
                          height='18'
                          viewBox='0 0 18 18'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          className='fill-current'
                        >
                          <path
                            d='M16.4647 4.83752C16.565 4.72065 16.4343 4.56793 16.2859 4.62263C15.9549 4.74474 15.6523 4.82528 15.2049 4.875C15.7552 4.56855 16.0112 4.13054 16.2194 3.59407C16.2696 3.46467 16.1182 3.34725 15.9877 3.40907C15.458 3.66023 14.8864 3.84658 14.2854 3.95668C13.6913 3.3679 12.8445 3 11.9077 3C10.1089 3 8.65027 4.35658 8.65027 6.02938C8.65027 6.26686 8.67937 6.49818 8.73427 6.71966C6.14854 6.59919 3.84286 5.49307 2.24098 3.79696C2.13119 3.68071 1.93197 3.69614 1.86361 3.83792C1.68124 4.21619 1.57957 4.63582 1.57957 5.07762C1.57957 6.12843 2.15446 7.05557 3.02837 7.59885C2.63653 7.58707 2.2618 7.51073 1.91647 7.38116C1.74834 7.31808 1.5556 7.42893 1.57819 7.59847C1.75162 8.9004 2.80568 9.97447 4.16624 10.2283C3.89302 10.2978 3.60524 10.3347 3.30754 10.3347C3.23536 10.3347 3.16381 10.3324 3.0929 10.3281C2.91247 10.3169 2.76583 10.4783 2.84319 10.6328C3.35357 11.6514 4.45563 12.3625 5.73809 12.3847C4.62337 13.1974 3.21889 13.6816 1.69269 13.6816C1.50451 13.6816 1.42378 13.9235 1.59073 14.0056C2.88015 14.6394 4.34854 15 5.90878 15C11.9005 15 15.1765 10.384 15.1765 6.38067C15.1765 6.24963 15.1732 6.11858 15.1672 5.98877C15.6535 5.66205 16.0907 5.27354 16.4647 4.83752Z'
                            fill=''
                          ></path>
                        </svg>
                      </a>
                      <a
                        target='_blank'
                        href={item?.linkedin}
                        className='text-[#33354d] border border-[#d4d7e5] rounded-md flex justify-center items-center w-9 h-9 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] hover:shadow-[0_0.375rem_1.125rem_-0.375rem_rgba(0,119,181,0.8)] cursor-pointer'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='18'
                          height='18'
                          fill='currentColor'
                          className='bi bi-linkedin'
                          viewBox='0 0 16 16'
                        >
                          <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z' />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default SchoolTeacher;
