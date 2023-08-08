import React, { useState } from 'react';
import openbook from '../../../../Images/icons/open-book.png';
import './CerCourse.css';
import { useEffect } from 'react';
import axios from 'axios';

const CerCourse = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://itesseract.com.bd/master/api/v1/certification-courses'
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const Certifications = data.data;

  return (
    <div>
      <section className='py-10'>
        <div className='container mx-auto'>
          <div className='text-center lg:w-[710px] mx-auto w-full'>
            <a
              href='#'
              className='block mt-4 text-2xl font-semibold text-[#124265] hover:underline '
            >
              কোর্স দক্ষতা আপনি পাবেন
            </a>

            <p className='mt-3 text-base  dark:text-gray-400 md:text-base mb-4'>
              সেরা শিক্ষকদের পরিচর্যায় দেশের যেকোন প্রান্ত থেকে অব্যাহত থাকুক
              পড়াশুনার অগ্রযাত্রা
            </p>
          </div>
        </div>
      </section>
      <section className='pb-14'>
        <div className='container px-6 mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]'>
            {Certifications?.map((Certification) => (
              <div>
                <div className='bg-[#F4F7FB] font-semibold text-center rounded-[10px] p-9'>
                  <div className='mb-5 course-image flex justify-center items-center w-32 h-32 rounded-full  mx-auto'>
                    <img
                      loading='lazy'
                      className='w-20 h-20 object-contain'
                      src={
                        `https://itesseract.com.bd/master/` +
                        Certification?.image
                      }
                      alt={Certification.title}
                    />
                  </div>
                  <h1 className='text-xl text-[#124265]'>
                    {Certification.title}
                  </h1>
                  <p className='text-sm text-gray-400 mt-4'>
                    {' '}
                    {Certification?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CerCourse;
