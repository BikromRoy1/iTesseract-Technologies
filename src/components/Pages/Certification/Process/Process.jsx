import React from 'react';
import openbook from '../../../../Images/icons/open-book.png';
import project from '../../../../Images/icons/Project.png';
import projects from '../../../../Images/icons/projects.png';
import robotsandai from '../../../../Images/icons/robotsandai.png';
import skills from '../../../../Images/icons/skill.png';
import Gamification from '../../../../Images/icons/Gamification.png';

const Process = () => {
  return (
    <div>
      <section className='py-10'>
        <div className='container mx-auto'>
          <div className='text-center lg:w-[710px] mx-auto w-full'>
            <a
              href='#'
              className='block mt-4 text-2xl font-semibold text-[#124265] hover:underline '
            >
              আমাদের শিক্ষার প্রক্রিয়া
            </a>

            <p className='mt-3 text-base  dark:text-gray-400 md:text-base mb-4'>
              আমরা সেরা ইন্টারেক্টিভ এবং প্রভাবশালী শিক্ষণ পদ্ধতি প্রদান করি
            </p>
          </div>
        </div>
      </section>
      <section className='pb-14'>
        <div className='container px-6 mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0'>
            <div>
              <div className='bg-white font-semibold text-center rounded-1xl border shadow-lg p-10'>
                <div className='mb-5 flex justify-center items-center w-32 h-32 rounded-full border border-[#1bb57b] shadow-lg mx-auto'>
                  <img
                    loading='lazy'
                    className='w-20 h-20 object-contain'
                    src={openbook}
                    alt='গ্যামিফাইড পাঠ'
                  />
                </div>
                <h1 className='text-xl text-[#124265]'> হাতে-কলমে শিক্ষা</h1>
                <p className='text-sm text-gray-400 mt-4'>
                  {' '}
                  সমস্ত কোর্সের বিষয়বস্তু - প্রোগ্রামিং ভাষা, আইওটি, রোবোটিক্স
                  এবং এআই হাতে-কলমে শেখার প্রশিক্ষণ দেওয়া হয়।
                </p>
              </div>
            </div>
            <div>
              <div className='bg-white font-semibold text-center rounded-1xl border shadow-lg p-10'>
                <div className='mb-5 flex justify-center items-center w-32 h-32 rounded-full border border-[#1bb57b] shadow-lg mx-auto'>
                  <img
                    loading='lazy'
                    className='w-20 h-20 object-contain'
                    src={project}
                    alt='science'
                  />
                </div>
                <h1 className='text-xl text-[#124265]'>
                  {' '}
                  এক থেকে এক মিথস্ক্রিয়া
                </h1>
                <p className='text-sm text-gray-400 mt-4'>
                  {' '}
                  শিক্ষাদানের সময় আমাদের শিক্ষাবিদরা শিক্ষার্থীদের সাথে একের পর
                  এক মিথস্ক্রিয়া করেন এবং আমরা অগ্রগতির উপর অবিরাম প্রতিক্রিয়া
                  জানাই।
                </p>
              </div>
            </div>
            <div>
              <div className='bg-white font-semibold text-center rounded-1xl border shadow-lg p-10'>
                <div className='mb-5 flex justify-center items-center w-32 h-32 rounded-full border border-[#1bb57b] shadow-lg mx-auto'>
                  <img
                    loading='lazy'
                    className='w-20 h-20 object-contain'
                    src={skills}
                    alt='artificial'
                  />
                </div>
                <h1 className='text-xl text-[#124265]'> 4IR দক্ষতা</h1>
                <p className='text-sm text-gray-400 mt-4'>
                  {' '}
                  আমাদের সমস্ত কোর্স 4IR দক্ষতা অর্জনের জন্য বাস্তব জীবনের
                  সমস্যা এবং বিশ্লেষণের সমাধানের জন্য কীভাবে প্রয়োগ করা যায়
                  সেগুলির জন্য সারিবদ্ধ।
                </p>
              </div>
            </div>
            <div>
              <div className='bg-white font-semibold text-center rounded-1xl border shadow-lg p-10'>
                <div className='mb-5 flex justify-center items-center w-32 h-32 rounded-full border border-[#1bb57b] shadow-lg mx-auto'>
                  <img
                    loading='lazy'
                    className='w-20 h-20 object-contain'
                    src={Gamification}
                    alt='artificial'
                  />
                </div>
                <h1 className='text-xl text-[#124265]'> গ্যামিফিকেশন</h1>
                <p className='text-sm text-gray-400 mt-4'>
                  {' '}
                  আমাদের কোর্সগুলি একটি গ্যামিফিকেশন পদ্ধতিতে শেখানো হয় যা
                  শিক্ষার্থীদের বিষয়বস্তু আরও ভাল এবং সহজে ধরতে সাহায্য করে।
                  এটি তাদের মনোযোগের সীমা এবং বক্তৃতাগুলিতে আগ্রহ স্বাভাবিকের
                  চেয়ে বেশি রাখতে সহায়তা করে।
                </p>
              </div>
            </div>
            <div>
              <div className='bg-white font-semibold text-center rounded-1xl border shadow-lg p-10'>
                <div className='mb-5 flex justify-center items-center w-32 h-32 rounded-full border border-[#1bb57b] shadow-lg mx-auto'>
                  <img
                    loading='lazy'
                    className='w-20 h-20 object-contain'
                    src={projects}
                    alt='artificial'
                  />
                </div>
                <h1 className='text-xl text-[#124265]'>
                  {' '}
                  প্রকল্প ভিত্তিক শিক্ষা
                </h1>
                <p className='text-sm text-gray-400 mt-4'>
                  {' '}
                  আমাদের সমস্ত বক্তৃতা একটি প্রকল্প-ভিত্তিক শিক্ষা, প্রতিটি
                  কোর্সের শেষে, স্তরের শিক্ষার্থীদের প্রকল্প তৈরি করে তাদের
                  জ্ঞান প্রদর্শন করতে হবে। এটি তাদের কোর্সের অ্যাপ্লিকেশনগুলিতে
                  আরও ভালভাবে অন্বেষণ করতে সহায়তা করে।
                </p>
              </div>
            </div>
            <div>
              <div className='bg-white font-semibold text-center rounded-1xl border shadow-lg p-10'>
                <div className='mb-5 flex justify-center items-center w-32 h-32 rounded-full border border-[#1bb57b] shadow-lg mx-auto'>
                  <img
                    loading='lazy'
                    className='w-20 h-20 object-contain'
                    src={robotsandai}
                    alt='artificial'
                  />
                </div>
                <h1 className='text-xl text-[#124265]'> রোবোটিক্স এবং আইওটি</h1>
                <p className='text-sm text-gray-400 mt-4'>
                  {' '}
                  10টি লেকচারের একটি সহজ ভাঙ্গন রয়েছে, টাস্ক পরীক্ষা এবং একটি
                  প্রজেক্ট শোকেস, পাসিং স্কোরের 60%। তারা সমস্ত 4IR দক্ষতা শেখার
                  পরে শিক্ষার্থীদের প্রত্যয়িত করা হয় যা তাদের এই দক্ষতাগুলি
                  শিখতে আরও আগ্রহী করে।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;