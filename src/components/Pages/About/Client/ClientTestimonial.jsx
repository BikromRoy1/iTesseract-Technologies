import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { Pagination, Autoplay } from 'swiper';
import sazzadSir from '../../../../Images/team/sazzad-sir.jpg';
import AbdulhamidSir from '../../../../Images/team/abdulhamid.png';
import TestimonialCard from './ClientTestimonial.css';

const ClientTestimonial = () => {
  return (
    <>
      <div className='bg-[#F1F3F6]'>
        <section className='container mx-auto '>
          <div className=' pt-10 pb-6'>
            <div className='text-center'>
              <p className='text-lg text-[#1bb57b] uppercase'>
                আমাদের পর্যালোচনা
              </p>

              <a
                href='#'
                className='block mt-4 text-2xl font-semibold text-[#124265] hover:underline '
              >
                কেন আমরাই শিক্ষার্থী ও অভিভাবকগণের প্রথম পছন্দ?
              </a>
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
              <SwiperSlide>
                <div class='client-item'>
                  <p>
                    <FaQuoteLeft className='inline-block quote-icon-left' />
                    "এটি রোবোটিক্স এবং কোডিং শেখার জন্য একটি চমৎকার প্ল্যাটফর্ম।
                    একটি অনলাইন কোডিং ক্লাস শেষ করার পরে, আমার বাচ্চারা বেশ ভাল
                    করছে। রোবটের সাহায্যে, আমার মেয়ে এখন ছোটখাটো সমস্যা সমাধান
                    করতে সক্ষম।"
                    <FaQuoteRight className='inline-block quote-icon-right' />
                  </p>
                  <img
                    loading='lazy'
                    src={sazzadSir}
                    class='client-img'
                    alt=''
                  />
                  <h3>সাজ্জাদ হোসেন, পিএইচডি,</h3>
                  <h4>ছাত্র অভিভাবক</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class='client-item'>
                  <p>
                    <FaQuoteLeft className='inline-block quote-icon-left' />
                    "আইটেসারেক্ট টেকনোলিজস টিম প্রদর্শন করে যে শিশুদের জন্য
                    প্রযুক্তি সম্পর্কে শেখা কতটা সহজ। তাদের কাজের মান খুবই
                    অসাধারণ। আমি বিশ্বাস করি তাদের পণ্য এবং পরিষেবা বিশ্বের
                    EdTech ব্যবসার মধ্যে অন্যতম সেরা হবে”
                    <FaQuoteRight className='inline-block quote-icon-right' />
                  </p>
                  <img
                    loading='lazy'
                    src={AbdulhamidSir}
                    class='client-img'
                    alt=''
                  />
                  <h3>আব্দুল হামিদ</h3>
                  <h4>ছাত্র অভিভাবক</h4>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </div>
    </>
  );
};

export default ClientTestimonial;
