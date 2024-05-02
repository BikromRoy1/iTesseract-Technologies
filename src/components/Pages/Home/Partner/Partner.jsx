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
      <div className='container p-6 mx-auto text-center z-50'>
        <div className='section-header'>
          <h4>আমাদের সহ-প্রতিষ্ঠান</h4>
          <h2>
            আমাদের অন্যান্য
            <span className='title-gradient'> পার্টনার প্রতিষ্ঠানসমূহ</span>
          </h2>
        </div>

        <div className='flex flex-wrap justify-center items-center lg:justify-center gap-4'>
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
    </section>
  );
};

export default Partner;
