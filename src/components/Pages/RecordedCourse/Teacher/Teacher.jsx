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
                      to='/'
                      className='block text-xl font-bold text-gray-800 '
                      tabIndex='0'
                      role='link'
                    >
                      {item?.name}
                    </Link>
                    <span className='text-sm text-gray-700 dark:text-gray-400'>
                      {item?.designation}
                    </span>
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
