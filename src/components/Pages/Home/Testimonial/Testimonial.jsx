import axios from 'axios';
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import shapeImage3 from '../../../../Images/icons/TS-Shape-01.png';
import shapeImage4 from '../../../../Images/icons/TS-Shape-02.png';
import shapeImage2 from '../../../../Images/icons/TS-Shape-03.png';
import shapeImage1 from '../../../../Images/icons/TS-Shape-04.png';
import './Testimonial.css';

// import required modules
import { Autoplay, Pagination } from 'swiper';

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
      <section className='testimonial-bg'>
        <div className=' pt-14 pb-6 container mx-auto testimonial-container'>
          <div className='section-header'>
            <h2>
              কি বলছেন আমাদের প্রাক্তন{' '}
              <span className='title-gradient'>
                শিক্ষার্থীবৃন্দ ও অভিভাবকবৃন্দ ?
              </span>{' '}
            </h2>
          </div>
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              992: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 23,
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
          <div className='testimonial-shape hidden lg:block'>
            <div className='shape-image shape-image-1'>
              <img src={shapeImage1} loading='lazy' alt='shape' />
            </div>
            <div className='shape-image shape-image-2'>
              <img src={shapeImage2} loading='lazy' alt='shape' />
            </div>
            <div className='shape-image shape-image-3'>
              <img src={shapeImage3} loading='lazy' alt='shape' />
            </div>
            <div className='shape-image shape-image-4'>
              <img src={shapeImage4} loading='lazy' alt='shape' />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
