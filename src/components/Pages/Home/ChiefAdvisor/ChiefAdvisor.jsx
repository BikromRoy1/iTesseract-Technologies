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
                শিক্ষার্থীদের হাতে কলমে রোবটিক্স প্রশিক্ষণ দিয়ে ভবিষ্যৎ
                প্রজেন্মের জন্য প্রস্তুত করাটাই আমাদের প্রথম কাজ। নিজে গেইম তৈরি
                করবে এবং সেটি নিয়ে সে নিজে খেলতে পারবে। যে খেলনা নিয়ে খেলতে
                পারবে সেটি দিয়ে অবিশ্বাস্য প্রজেক্ট তৈরী করবে।
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
