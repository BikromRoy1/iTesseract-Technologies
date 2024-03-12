import React from 'react';
import { Link } from 'react-router-dom';
import playingimage from '../../../../Images/univerBanner.jpg';

const UniBanner = () => {
  return (
    <div
      className='hero h-[420px] text-center object-cover'
      style={{
        backgroundImage: `url(${playingimage})`,
      }}
    >
      <div className='hero-overlay bg-opacity-80'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-2xl'>
          <h1 className='mb-5 text-4xl font-bold '>
            শিখতে একটি রাইড নিন সবচেয়ে উত্তেজনাপূর্ণ এবং কার্যকর উপায়ে
            প্রোগ্রামিং!
          </h1>
          <p className='mb-5 text-gray-300'>
            তাদের আগ্রহের উপর ভিত্তি করে বিশ্ববিদ্যালয়ের শিক্ষার্থীদের জন্য
            সার্টিফিকেট প্রোগ্রাম। 99% এরও বেশি শিক্ষার্থী এই কোর্সের বিষয়বস্তু
            এবং ফলাফলকে সুপার হিসেবে রেট দেয়
          </p>
          <Link to='/registration'>
            <button className='px-8 py-3 font-semibold rounded text-white custom-button'>
              নিবন্ধন করুন
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UniBanner;
