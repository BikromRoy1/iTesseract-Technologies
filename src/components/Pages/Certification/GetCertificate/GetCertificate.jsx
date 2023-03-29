import React from 'react';
import certificationImage from '../../../../Images/CERTIFICATE.jpg';
import { Link } from 'react-router-dom';

const GetCertificate = () => {
  return (
    <div className='bg-gray-50 py-12'>
      <section class='overflow-hidden  sm:grid sm:grid-cols-2 container mx-auto'>
        <div class='p-8 md:p-12 lg:px-16 lg:py-24'>
          <div class='mx-auto max-w-xl text-center sm:text-left'>
            <h2 class='text-2xl font-bold text-gray-900 md:text-3xl'>
              4IR দক্ষতা শেখার জন্য একটি শংসাপত্র পান
            </h2>

            <p class='hidden text-gray-500 md:mt-4 md:block'>
              আমরা যে কোর্সগুলি প্রদান করি তা প্রোগ্রামিং ভাষার ধারণার উপর
              ভিত্তি করে তৈরি করা হয় এবং এটি কীভাবে IoT, রোবোটিক্স ইত্যাদি
              শেখার জন্য ব্যবহার করা যায়। এটি হাতে-কলমে শেখার সাথে 4IR দক্ষতার
              সাথে শুরু করার জন্য প্রয়োজনীয় সমস্ত কিছু সরবরাহ করে। আমরা
              শিক্ষার্থীদের কোর্সগুলি সফলভাবে সমাপ্ত করার পরে প্রত্যয়িত করব।
            </p>

            <div class='mt-4 md:mt-8'>
              <Link
                to='/contact'
                class='inline-block rounded bg-[#1bb57b] px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400'
              >
                ভর্তি হোন এখনি
              </Link>
            </div>
          </div>
        </div>

        <img
          loading='lazy'
          alt='Student'
          src={certificationImage}
          class='h-56 w-full object-cover sm:h-full'
        />
      </section>
    </div>
  );
};

export default GetCertificate;
