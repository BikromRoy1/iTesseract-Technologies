import React from 'react';
import { IoIosStar, IoIosStarHalf } from 'react-icons/io';
import './Reviews.css';

const Reviews = () => {
  return (
    <div className='review-card bg-white mb-[1.6rem]'>
      <div className='videos-title'>
        <h3 className='w-full'>রেটিং এবং রিভিউ</h3>
      </div>
      {/* <p className='text-[16px] leading-[26px] text-gray-500 pb-4'>
        হায়ার স্টাডি কিংবা ক্যারিয়ারের সাফল্যের জন্য ম্যাথ শেখাটা যতটা জরুরি,
        ম্যাথ শেখাটা ঠিক ততোটাই বোরিং। অনেকের কাছে ম্যাথ তো রীতিমতো আতঙ্কের নাম।
        অথচ ম্যাথকে বলা হয় মাদার অব সায়েন্স। অন্য সাবজেক্টে ভালো করতেও ম্যাথের
        বেসিক পাকাপোক্ত করা আবশ্যক। শিশুদের ব্রেইন ডেভেলপমেন্ট, চিন্তার দক্ষতা
        আর দ্রুত সমস্যা সমাধান করতে শেখায় ম্যাথ। তাই ম্যাথ শেখার বিকল্প নেই।
      </p> */}
      <div className='review-card-border pt-3'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-4'>
            <img
              src='https://i.ibb.co.com/rR606fCD/me.jpg'
              alt='avatar'
              className='w-16 h-16 rounded-full object-cover ring ring-gray-300'
            />

            <div>
              <h3 className='text-[#124265] text-[17px] font-bold mb-1 leading-6'>
                বিক্রম রায়
              </h3>

              <p className='text-[#6c727f] text-sm'>20 Days ago</p>
            </div>
          </div>
          <div className='flex items-center gap-1'>
            <IoIosStar className='text-[#fc9231] w-5 h-5' />
            <IoIosStar className='text-[#fc9231] w-5 h-5' />
            <IoIosStar className='text-[#fc9231] w-5 h-5' />
            <IoIosStar className='text-[#fc9231] w-5 h-5' />
            <IoIosStarHalf className='text-[#fc9231] w-5 h-5' />
          </div>
        </div>
        <p className='text-[#4e5562] pt-4 text-base'>
          আমি ওয়াইডব্লিউসি এর ৫ম শ্রেণীতে পড়াশোনা করছি। আমি কোর্স করার সময়
          ম্যামের ক্লাসেই গেইম বানিয়েছি ০৩ টি। ম্যাম অনেক যত্ন সহকারে আমাদের
          পড়িয়েছেন। আমি স্ক্রাচ প্রোগ্রামিং ও ব্লক প্রোগ্রামিং শিখেছি।
        </p>
      </div>
      <div className='review-card-border pt-3'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-4'>
            <img
              src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='avatar'
              className='w-16 h-16 rounded-full object-cover ring ring-gray-300'
            />

            <div>
              <h3 className='text-[#124265] text-[17px] font-bold mb-1 leading-6'>
                মাইকেল উইলিয়ামস
              </h3>

              <p className='text-[#6c727f] text-sm'>Aug 9, 2024</p>
            </div>
          </div>
          <div className='flex items-center gap-1'>
            <IoIosStar className='text-[#fc9231] w-5 h-5' />
            <IoIosStar className='text-[#fc9231] w-5 h-5' />
            <IoIosStar className='text-[#fc9231] w-5 h-5' />
            <IoIosStar className='text-[#fc9231] w-5 h-5' />
            <IoIosStarHalf className='text-[#fc9231] w-5 h-5' />
          </div>
        </div>
        <p className='text-[#4e5562] pt-4 text-base'>
          Hi! I'm Mohiuddin Sumon, and I'm passionate about education. I
          specialize in full-stack web development and have built applications
          for companies like Coca-Cola, Newell-Rubbermaid, Getaround, and more.
          I use a conversational style in my teaching so that students don't get
          bored. I aim to teach more like a friend walking you through the
          material rather than a jargon-heavy, mundane lecturer. Hope you enjoy
          my courses!
        </p>
      </div>
    </div>
  );
};

export default Reviews;
