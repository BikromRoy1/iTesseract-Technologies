import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Partner.css';

const Partner = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://itesseract.com.bd/master/api/v1/partners'
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const partnerImages = data.data;

  return (
    <section id='partner' className='bg-white '>
      <div className='container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8'>
        <div className='flex flex-wrap justify-center items-center lg:justify-between'>
          <h2 className='font-bold text-2xl footer-color'>
            আমাদের পার্টনার সমূহঃ
          </h2>

          {/* Render the data */}

          {partnerImages?.map((item) => (
            <div key={item?.id}>
              <a href={item?.link} target='_blank' rel='noopener noreferrer'>
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
        </div>
      </div>
    </section>
  );
};

export default Partner;
