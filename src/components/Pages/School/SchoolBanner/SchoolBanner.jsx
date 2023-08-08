import React from 'react';
import { Link } from 'react-router-dom';
import playingimage from '../../../../Images/playing-banner.jpg';

const SchoolBanner = () => {
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
            প্রোগ্রামিং এর বিস্ময়কর বিশ্বের একটি ট্রিপ নিন
          </h1>
          <p className='mb-5 text-gray-300'>
            5 বছর বা তার বেশি বয়সী শিশুদের জন্য শংসাপত্র প্রোগ্রাম। শীর্ষ
            অনলাইন কোর্সগুলি আপনার নখদর্পণে, তাই আপনি আপনার বাড়িতে বা আমাদের
            ল্যাবে আরাম থেকে অধ্যয়ন করতে পারেন। 99% এরও বেশি শিক্ষার্থী এই
            কোর্সের বিষয়বস্তু এবং ফলাফলকে সুপার হিসেবে রেট দেয়
          </p>
          <Link to='/registration'>
            <button className='px-8 py-3 font-semibold rounded bg-[#ffc107] text-white'>
              নিবন্ধন করুন
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SchoolBanner;
