import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import faq from '../../../Images/faq.png';

const Questions = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://itesseract.com.bd/main/api/v1/faq'
        );
        setFaqs(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const questions = faqs.data;

  return (
    <div>
      <section className='bg-white '>
        <div className='container px-6 py-10 mx-auto'>
          <div className='mt-8 lg:-mx-6 lg:flex lg:items-center'>
            <div className='w-full lg:mx-6 lg:w-1/2'>
              <Link
                to='/'
                className='block mt-4 text-2xl font-semibold text-[#124265] hover:underline '
              >
                আপনার সাধারণ প্রশ্নের উত্তর
              </Link>

              <p className='mt-3 text-base  dark:text-gray-400 md:text-base'>
                আমাদের শেখার উপকরণের মধ্যে রয়েছে বিস্তৃত শিক্ষামূলক, পেশাদার
                এবং দক্ষতা-ভিত্তিক কোর্স। আমরা সমস্ত স্কুল এবং কলেজ গ্রেড স্তর,
                সেইসাথে বিশ্ববিদ্যালয়ের কোর্স কভার করি
              </p>
              <img
                loading='lazy'
                className='object-contain w-full lg:mx-6 lg:w-1/2 h-72 lg:h-60'
                src={faq}
                alt='faq'
              />
            </div>
            <div className='mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 '>
              <div className='space-y-4'>
                {questions?.map((item, index) => (
                  <details
                    key={item?.id}
                    className='group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden'
                    open={index === 0}
                  >
                    <summary className='flex items-center justify-between cursor-pointer'>
                      <h2 className='font-medium text-gray-900'>
                        {item.question}
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

                    <p className='mt-4 leading-relaxed text-gray-500 text-justify'>
                      {item?.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Questions;
