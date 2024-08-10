import React from 'react';
import sazzad_sir3 from '../../../../Images/hamid.png';
import './ChiefAdvisor.css';

const ChiefAdvisor = () => {
  return (
    <section id='message' className=''>
      <div className='mx-auto container  py-4'>
        <section className='rounded-lg p-6'>
          <div className='grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center'>
            <img
              loading='lazy'
              alt='sazzad-sir'
              src={sazzad_sir3}
              className='aspect-square w-[75%] mx-auto rounded-lg object-cover'
            />

            <blockquote className='sm:col-span-2'>
              <p className='text-xl font-medium sm:text-2xl'>
                <span className='text-[#1bb57b]'>"</span>
                এটি রোবোটিক্স এবং কোডিং শেখার জন্য একটি চমৎকার প্ল্যাটফর্ম। একটি
                অনলাইন কোডিং ক্লাস শেষ করার পরে, আমার বাচ্চারা বেশ ভাল করছে।
                রোবটের সাহায্যে আমার মেয়ে এখন ছোটখাটো সমস্যা সমাধান করতে সক্ষম।
                <span className='text-[#1bb57b]'>”</span>
              </p>

              <cite className='mt-8 inline-flex items-center not-italic'>
                <span className='hidden h-px w-6 bg-gray-400 sm:inline-block'></span>
                <p className='text-sm uppercase title-gradient sm:ml-3'>
                  <strong>Mohammad Abdul Hamid</strong>, Chief Executive
                  Officer.
                </p>
              </cite>
            </blockquote>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ChiefAdvisor;
