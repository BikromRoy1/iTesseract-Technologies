import React, { useState } from 'react';
import CourseDescription from '../CourseDescription/CourseDescription';
import Material from '../Material/Material';
import PricePart from '../PricePart/PricePart';
import TagLine from '../TagLine/TagLine';
import Videos from '../Videos/Videos';
import './CourseVidoes.css';

const CourseVidoes = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <section id='videosCurriculum'>
      <div className=' p-6 container mx-auto'>
        <div className='flex flex-col gap-4 md:flex-row md:gap-12'>
          <div className='md:max-w-[calc(100%_-_448px)] mx-md:order-2'>
            <div className='flex items-center gap-[12px] justify-start flex-nowrap mb-[40px]'>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle='tab'
                href='#link1'
                role='tablist'
              >
                <button
                  className={
                    openTab === 1
                      ? 'text-[#fff] bg-[#1BB57B] button-shadow font-semibold leading-[1] text-[14px] md:text-[16px] border-none rounded-[30px] py-[10px] px-[13px] sm:py-[10px] sm:px-[13px] md:py-[14px] md:px-[30px]'
                      : 'text-[#6D6C80] bg-[#E6E9EF] font-semibold leading-[1] text-[14px] md:text-[16px] border-none rounded-[30px] py-[10px] px-[13px] sm:py-[10px] sm:px-[13px] md:py-[14px] md:px-[30px]'
                  }
                >
                  কোর্সের ওভারভিউ
                </button>
              </a>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle='tab'
                href='#link2'
                role='tablist'
              >
                <button
                  className={
                    openTab === 2
                      ? 'text-[#fff] bg-[#1BB57B] button-shadow font-semibold leading-[1] text-[14px] md:text-[16px] border-none rounded-[30px] py-[10px] px-[13px] sm:py-[10px] sm:px-[13px] md:py-[14px] md:px-[30px]'
                      : 'text-[#6D6C80] bg-[#E6E9EF] font-semibold leading-[1] text-[16px] border-none rounded-[30px] py-[10px] px-[13px] sm:py-[10px] sm:px-[13px] md:py-[14px] md:px-[30px]'
                  }
                >
                  কোর্সের পাঠ্যক্রম
                </button>
              </a>
              {/* <a
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle='tab'
                href='#link3'
                role='tablist'
              >
                <button
                  className={
                    openTab === 3
                      ? 'text-[#fff] bg-[#1BB57B] button-shadow font-semibold leading-[1] text-[14px] md:text-[16px] border-none rounded-[30px] py-[10px] px-[13px] sm:py-[10px] sm:px-[13px] md:py-[14px] md:px-[30px]'
                      : 'text-[#6D6C80] bg-[#E6E9EF] font-semibold leading-[1] text-[16px] border-none rounded-[30px] py-[10px] px-[13px] sm:py-[10px] sm:px-[13px] md:py-[14px] md:px-[30px]'
                  }
                >
                  রিভিউ
                </button>
              </a> */}
            </div>

            <div id='link1' className={openTab === 1 ? 'block' : 'hidden'}>
              <CourseDescription></CourseDescription>
            </div>
            <div id='link2' className={openTab === 2 ? 'block' : 'hidden'}>
              <Videos></Videos>
            </div>
            {/* <div id='link3' className={openTab === 3 ? 'block' : 'hidden'}>
              <p className='text-[16px] leading-[26px] text-gray-500 pb-4'>
                হায়ার স্টাডি কিংবা ক্যারিয়ারের সাফল্যের জন্য ম্যাথ শেখাটা যতটা
                জরুরি, ম্যাথ শেখাটা ঠিক ততোটাই বোরিং। অনেকের কাছে ম্যাথ তো
                রীতিমতো আতঙ্কের নাম। অথচ ম্যাথকে বলা হয় মাদার অব সায়েন্স। অন্য
                সাবজেক্টে ভালো করতেও ম্যাথের বেসিক পাকাপোক্ত করা আবশ্যক। শিশুদের
                ব্রেইন ডেভেলপমেন্ট, চিন্তার দক্ষতা আর দ্রুত সমস্যা সমাধান করতে
                শেখায় ম্যাথ। তাই ম্যাথ শেখার বিকল্প নেই।
              </p>
            </div> */}
          </div>
          <div className='w-full md:mb-10 md:max-w-[400px] mx-md:order-1 -mt-0 lg:-mt-[200px] z-20'>
            <PricePart></PricePart>
            <Material></Material>
            <TagLine></TagLine>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseVidoes;
