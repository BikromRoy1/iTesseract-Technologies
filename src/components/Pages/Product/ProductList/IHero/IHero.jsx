import React from 'react';
import { Link } from 'react-router-dom';

const IHero = () => {
    return (
      <section className='bg-white'>
        <div className='container px-6 py-6 mx-auto'>
          <div className='mt-8 lg:-mx-6 lg:flex lg:items-center'>
            <div className='mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 '>
              <p className='text-lg text-[#1bb57b] uppercase'>আইহিরো - টুলস</p>
              <Link
                to='/'
                className='block mt-3 text-2xl font-semibold text-[#124265] hover:underline '
              >
                আইওটি হিরো হওয়ার জন্য সরঞ্জাম
              </Link>

              <p className='mt-3 text-sm text-gray-500 text-justify  md:text-base'>
                আইওটি হচ্ছে ইন্টারনেট অব থিংস এবং মৌলিক ডেটা সায়েন্স সম্পর্কে
                শেখার জন্য একটি পরীক্ষামূলক বিস্ময় বাক্স। অল-ইন-ওয়ান কিটে
                রয়েছে চারটি সেন্সর, দুটি মোটর, একটি প্রপেলার, একটি এসি-টু-ডিসি
                রূপান্তরকারী এবং একটি আইওটি বোর্ড। এই বিস্ময়কর স্টেম বক্সটি
                স্মার্ট হোম, স্মার্ট কৃষি এবং আবহাওয়া পর্যবেক্ষণ প্রকল্প তৈরি
                করতে ব্যবহার করা যেতে পারে।
              </p>

              <div className='mt-6'>
                <button
                  type='button'
                  className='px-8 py-3 font-semibold rounded dark:bg-[#1bb57b] dark:text-white'
                >
                  Buy Now
                </button>
                <button
                  type='button'
                  className='px-8 py-3 ml-6 font-semibold border rounded dark:border-[#1bb57b] dark:text-[#1bb57b]'
                >
                  Explore Now
                </button>
              </div>
            </div>
            <img
              loading='lazy'
              className=' w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96'
              src='https://i.ibb.co/ynwCNd4/mockup.png'
              alt='ihero-box'
            />
          </div>
        </div>
      </section>
    );
};

export default IHero;