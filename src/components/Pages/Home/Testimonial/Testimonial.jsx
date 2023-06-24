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
import TestimonialCard from './TestimonialCard';

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

  console.log(data.data);

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
            <SwiperSlide>
              <div class='testimonial-item'>
                <p>
                  <FaQuoteLeft className='inline-block quote-icon-left' />
                  আমি গাজিপুর থেকে ক্লাসের জন্য ০৬ ঘন্টা বাসে চড়ে আইটেসারেক্টে
                  এসে ক্লাস করেছি। আমার জন্য খুব কঠিন ছিল কিন্তু ক্লাসগুলো খুব
                  এনজয় করতাম তাই কষ্ট হলেও ক্লাস মিস দিতাম না।
                  <FaQuoteRight className='inline-block quote-icon-right' />
                </p>
                <img
                  loading='lazy'
                  src='https://images.pexels.com/photos/7869041/pexels-photo-7869041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  class='testimonial-img'
                  alt=''
                />
                <h3>গাজী</h3>
                <h4>প্রাক্তন শিক্ষার্থী</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class='testimonial-item'>
                <p>
                  <FaQuoteLeft className='inline-block quote-icon-left' />
                  আমি ওয়াইডব্লিউসি এর ৫ম শ্রেণীতে পড়াশোনা করছি। আমি কোর্স করার
                  সময় ম্যামের ক্লাসেই গেইম বানিয়েছি ০৩ টি। ম্যাম অনেক যত্ন
                  সহকারে আমাদের পড়িয়েছেন। আমি স্ক্রাচ প্রোগ্রামিং ও ব্লক
                  প্রোগ্রামিং শিখেছি।
                  <FaQuoteRight className='inline-block quote-icon-right' />
                </p>
                <img
                  loading='lazy'
                  src='https://images.pexels.com/photos/7750716/pexels-photo-7750716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  class='testimonial-img'
                  alt=''
                />
                <h3>জান্নাত</h3>
                <h4>প্রাক্তন শিক্ষার্থী</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class='testimonial-item'>
                <p>
                  <FaQuoteLeft className='inline-block quote-icon-left' />
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam, risus at
                  semper.
                  <FaQuoteRight className='inline-block quote-icon-right' />
                </p>
                <img
                  loading='lazy'
                  src='https://images.pexels.com/photos/7751001/pexels-photo-7751001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                  class='testimonial-img'
                  alt=''
                />
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
