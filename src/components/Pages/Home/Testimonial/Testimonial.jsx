import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Title from '../../../Common/Title/Title';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonial.css';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

// import required modules
import { Pagination, Autoplay } from 'swiper';

const Testimonial = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://itesseract.com.bd/master/api/v1/testimonials'
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const testimonialData = data.data;

  return (
    <>
      <section className='testimonial-bg bg-gray-100'>
        <div className=' pt-14 pb-6 container mx-auto '>
          <Title
            title='কি বলছেন আমাদের প্রাক্তন শিক্ষার্থীবৃন্দ
'
            text=' ও অভিভাবকবৃন্দ?
'
            details='আমাদের প্রশিক্ষণ নিয়ে আমাদের অনেক শিক্ষার্থী আয়ত্ব করেছেন স্টেম শিক্ষা। চলুন জেনে নেই কি বলছেন তারা। 

।'
          ></Title>

          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              1080: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            spaceBetween={30}
            speed={400}
            loop={true}
            autoplay={{
              delay: 2000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className='mySwiper'
          >
            {testimonialData?.map((item) => (
              <SwiperSlide key={item?.id}>
                <div className='testimonial-item' title={item?.name}>
                  <p>
                    <FaQuoteLeft className='inline-block quote-icon-left' />
                    {item?.body}
                    <FaQuoteRight className='inline-block quote-icon-right' />
                  </p>
                  <img
                    loading='lazy'
                    src={`https://itesseract.com.bd/master/` + item?.image}
                    className='testimonial-img'
                    alt={item?.name}
                  />
                  <h3>{item?.name}</h3>
                  <h4>{item?.designation}</h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
