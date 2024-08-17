import React from 'react';
import robot from '../../../../Images/student-banner.jpg';
import '../../../css/About.css';

const FreeClass = () => {
  return (
    <section className=''>
      <div
        className='hero h-[450px] text-center object-contain'
        style={{
          backgroundImage: `url(${robot})`,
        }}
      >
        <div className='hero-overlay bg-opacity-70'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className='max-w-3xl'>
            <h1 className='mb-5 text-5xl font-bold'>
              শিক্ষা - ভবিষ্যতে আপনার দরজা
            </h1>
            <p className='mb-5 '>
              সামাজিক সমস্যা মোকাবেলায় দেশগুলিকে সহায়তা করার উদ্দেশ্যে
              একাডেমিক প্রতিষ্ঠান, গবেষক এবং শিক্ষার্থীদের জন্য উদীয়মান
              প্রযুক্তির উপর ভিত্তি করে সফ্টওয়্যার এবং হার্ডওয়্যার তৈরি করা
              হয়েছে।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeClass;
