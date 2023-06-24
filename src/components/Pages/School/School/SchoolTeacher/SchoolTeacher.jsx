import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SchoolTeacher = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          ' https://itesseract.com.bd/master/api/v1/trainers'
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const teacherData = data.data;

  return (
    <div>
      <section className='py-14'>
        <div className='container mx-auto'>
          <div className='text-center lg:w-[710px] mx-auto w-full'>
            <p className='text-lg text-[#1bb57b] uppercase'>ক্লাস নেবেন যারা</p>

            <Link
              to='/'
              className='block mt-4 text-2xl font-semibold text-[#124265] hover:underline '
            >
              আমাদের জনপ্রিয় শিক্ষকবৃন্দ
            </Link>

            <p className='mt-3 text-base  dark:text-gray-400 md:text-base mb-4'>
              ২০২৩ সাল জুড়ে অভিজ্ঞ শিক্ষকদের সাথে সম্পূর্ণ কোর্স শেষ করেন !
            </p>
          </div>
        </div>
      </section>
      <section className='pb-14'>
        <div className='container px-6 mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0'>
            {teacherData?.map((item) => (
              <div key={item?.id}>
                <div
                  className='w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg '
                  title={item?.name}
                >
                  <img
                    className='object-cover w-full h-72'
                    loading='lazy'
                    src={`https://itesseract.com.bd/master/` + item?.image}
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolTeacher;
