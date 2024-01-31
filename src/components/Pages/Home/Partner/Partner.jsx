import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Partner.css';

const Partner = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://itesseract.com.bd/master/api/v1/partners'
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const partnerImages = data.data;

  return (
    <section id='partner' className='bg-white'>
      <div className='container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8'>
        <h2 className='font-bold text-primary-color mb-3 text-xl text-center tracking-[0.20000000298023224px]'>
          আমাদের অন্যান্য পার্টনার প্রতিষ্ঠানসমূহ
        </h2>
        <div className='flex flex-wrap justify-center items-center lg:justify-center gap-2'>
          {loading ? (
            <p>Loading data...</p>
          ) : (
            <>
              {partnerImages?.map((item) => (
                <div className='' key={item?.id}>
                  <a
                    className='proud-partners-images'
                    href={item?.link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img
                      loading='lazy'
                      title={item?.title}
                      className='mx-10 my-3 md:mx-12 lg:m-0 partner-logo'
                      src={`https://itesseract.com.bd/master/` + item?.image}
                      alt={item?.title}
                    />
                  </a>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      {/* <div className='mt-8 rounded-xl bg-[#121220] p-6 md:mt-20 md:px-14'>
        <p className='mb-6 text-xl text-center text-gray-400'>
          দেশের সেরা প্রতিষ্ঠানগুলো নিচ্ছে আমাদের কর্পোরেট স্কিলস ডেভেলপমেন্ট
          প্রোগ্রাম
        </p>
        <div className='mb-4 overflow-x-auto scrollbar-hide'>
          <div className='flex min-w-[800px] flex-nowrap justify-between opacity-30'></div>
        </div>
        <div className='text-center text-gray-400'>
          আরও জানতে{' '}
          <a
            href='mailto:corporate@10minuteschool.com'
            className='underline text-green'
          >
            ইমেইল করুন
          </a>{' '}
          অথবা{' '}
          <a href='tel:01844601475' className='underline text-green'>
            কল করুন
          </a>
        </div>
      </div> */}
    </section>
  );
};

export default Partner;
