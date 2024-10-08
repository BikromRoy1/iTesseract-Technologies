import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { Pagination, Autoplay } from 'swiper';
import TestimonialCard from './ClientTestimonial.css';
import axios from 'axios';

import { apiUrl } from '../../../../config/config';

const ClientTestimonial = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/api/v1/parent-testimonials`
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
      <div className='bg-[#F1F3F6]'>
        <section className='container mx-auto '>
          <div className=' pt-10 pb-6'>
            <div className='text-center'>
              <p className='text-lg title-gradient uppercase'>
                আমাদের পর্যালোচনা
              </p>

              <h1 className='block mt-4 text-2xl font-semibold text-[#124265]'>
                কেন আমরাই শিক্ষার্থী ও অভিভাবকগণের প্রথম পছন্দ?
              </h1>
            </div>

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
                  <div className='client-item'>
                    <p>
                      <FaQuoteLeft className='inline-block quote-icon-left' />"
                      {item?.body}”
                      <FaQuoteRight className='inline-block quote-icon-right' />
                    </p>
                    <img
                      loading='lazy'
                      src={`${apiUrl}/` + item?.image}
                      className='client-img'
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
      </div>
    </>
  );
};

export default ClientTestimonial;
