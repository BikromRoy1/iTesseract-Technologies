import React from 'react';
import './Skill.css';
import mit from '../../../../Images/icons/mit-scratch.png';
import mitApp from '../../../../Images/icons/mit-app-inventor.png';
import web from '../../../../Images/icons/bot.png';
import python from '../../../../Images/icons/python.svg';
import Arduino from '../../../../Images/icons/ardutno.png';
import Robotics from '../../../../Images/icons/skillicon2.png';
import science from '../../../../Images/icons/skillicon3.png';
import artificial from '../../../../Images/icons/ai.png';

const Skill = () => {
  return (
    <div>
      <section className='py-14'>
        <div className='container mx-auto'>
          <div className='text-center lg:w-[710px] mx-auto w-full'>
            <p className='text-lg text-[#1bb57b] uppercase'>মাধ্যমিক কোর্স</p>

            <a
              href='#'
              className='block mt-4 text-2xl font-semibold text-[#124265] hover:underline '
            >
              কোর্স দক্ষতা আপনি পাবেন
            </a>

            <p className='mt-3 text-base  dark:text-gray-400 md:text-base mb-4'>
              অধ্যয়ন শুরু করার জন্য আপনার যা দরকার তা হল সঠিক মনের ফ্রেমে।
              আইটেসারেক্ট টেকনোলিজস-এর একজন ছাত্র হিসাবে, আপনি অসামান্য
              প্রশিক্ষক এবং কম্পিউটার বিজ্ঞানে দক্ষতা অর্জনের জন্য একটি
              সু-প্রতিষ্ঠিত পাঠ্যক্রম দ্বারা পরিচালিত হবেন।
            </p>
          </div>
        </div>
      </section>
      <section className='pb-14'>
        <div className='container px-6 mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0'>
            <div className=''>
              <div className='bg-white font-semibold text-center rounded-1xl border shadow-lg p-10 flex flex-col'>
                <div className='mb-5 flex justify-center items-center w-32 h-32 rounded-full border border-[#1bb57b] shadow-lg mx-auto'>
                  <img
                    loading='lazy'
                    className='w-20 h-20 object-contain'
                    src={mit}
                    alt=' MIT Scratch'
                  />
                </div>
                <h1 className='text-xl text-[#124265]'> এম.আই.টি স্ক্র্যাচ</h1>
                <p className='text-sm text-gray-400 mt-4'>
                  {' '}
                  এমআইটি স্ক্র্যাচ প্রোগ্রামিং দিয়ে শুরু করা গ্রাফিকাল
                  কোডিংয়ের মাধ্যমে যুক্তি নির্মাণের মৌলিক বিষয়গুলিকে শক্তিশালী
                  করার জন্য একটি চমৎকার সমাধান।
                </p>
              </div>
            </div>
            <div className=''>
              <div className='bg-white font-semibold text-center rounded-1xl border shadow-lg p-10 flex flex-col'>
                <div className='mb-5 flex justify-center items-center w-32 h-32 rounded-full border border-[#1bb57b] shadow-lg mx-auto'>
                  <img
                    loading='lazy'
                    className='w-20 h-20 object-contain'
                    src={mitApp}
                    alt='  MIT App Inventor'
                  />
                </div>
                <h1 className='text-xl text-[#124265]'>
                  {' '}
                  এম.আই.টি অ্যাপ উদ্ভাবন
                </h1>
                <p className='text-sm text-gray-400 mt-4'>
                  {' '}
                  এমআইটি হল একটি ওয়েব অ্যাপ্লিকেশন ইন্টিগ্রেটেড ডেভেলপমেন্ট
                  এনভায়রনমেন্ট যা শিশুদের শেখানোর জন্য কীভাবে মোবাইল
                  অ্যাপ্লিকেশন তৈরি করতে হয়।
                </p>
              </div>
            </div>
            <div>
              <div className='bg-white font-semibold text-center rounded-1xl border shadow-lg p-10 flex flex-col'>
                <div className='mb-5 flex justify-center items-center w-32 h-32 rounded-full border border-[#1bb57b] shadow-lg mx-auto'>
                  <img
                    loading='lazy'
                    className='w-20 h-20 object-contain'
                    src={web}
                    alt='Web Development'
                  />
                </div>
                <h1 className='text-xl text-[#124265]'> ওয়েব ডেভেলপমেন্ট</h1>
                <p className='text-sm text-gray-400 mt-4'>
                  {' '}
                  শিশুরা মৌলিক এবং জটিল ওয়েব ইন্টারফেস তৈরি করতে পারে এবং HTML
                  এবং CSS ব্যবহার করে জিনিসগুলিকে অ্যানিমেট করতে পারে।
                </p>
              </div>
            </div>
            <div>
              <div className='bg-white font-semibold text-center rounded-1xl border shadow-lg p-10 flex flex-col'>
                <div className='mb-5 flex justify-center items-center w-32 h-32 rounded-full border border-[#1bb57b] shadow-lg mx-auto'>
                  <img
                    loading='lazy'
                    className='w-20 h-20 object-contain'
                    src={python}
                    alt='Python'
                  />
                </div>
                <h1 className='text-xl text-[#124265]'> পাইথন প্রোগ্রামিং</h1>
                <p className='text-sm text-gray-400 mt-4'>
                  {' '}
                  পাইথন একটি অত্যন্ত অভিব্যক্তিপূর্ণ, শক্তিশালী প্রোগ্রামিং ভাষা
                  যা শিখতে সহজ এবং ব্যবহার করা উপভোগ্য।
                </p>
              </div>
            </div>
            <div>
              <div className='bg-white font-semibold text-center rounded-1xl border shadow-lg p-10'>
                <div className='mb-5 flex justify-center items-center w-32 h-32 rounded-full border border-[#1bb57b] shadow-lg mx-auto'>
                  <img
                    loading='lazy'
                    className='w-20 h-20 object-contain'
                    src={Arduino}
                    alt='Arduino'
                  />
                </div>
                <h1 className='text-xl text-[#124265]'> আরডুইনো আইডি</h1>
                <p className='text-sm text-gray-400 mt-4'>
                  {' '}
                  আরডুইনো ও আরডুইনো সি প্রোগ্রামিং রোবট তৈরি করতে এবং এটি এমন
                  একটি দক্ষতা যা তরুণরা ভবিষ্যতের রোবোটিক্স প্রযুক্তির
                  প্রস্তুতির জন্য শিখতে পারে।
                </p>
              </div>
            </div>
            <div>
              <div className='bg-white font-semibold text-center rounded-1xl border shadow-lg p-10'>
                <div className='mb-5 flex justify-center items-center w-32 h-32 rounded-full border border-[#1bb57b] shadow-lg mx-auto'>
                  <img
                    loading='lazy'
                    className='w-20 h-20 object-contain'
                    src={Robotics}
                    alt='Robotics'
                  />
                </div>
                <h1 className='text-xl text-[#124265]'>
                  {' '}
                  রোবোটিক্স এবং আই.ও.টি
                </h1>
                <p className='text-sm text-gray-400 mt-4'>
                  {' '}
                  রোবোটিক্স এবং আইওটি প্রযুক্তির বিকাশ iedu এবং iHero ব্যবহারের
                  মাধ্যমে অন্বেষণ করা হচ্ছে, যা শিক্ষার্থীদের কীভাবে আসন্ন
                  প্রযুক্তি তৈরি করতে হয় তা শেখায়।
                </p>
              </div>
            </div>
            <div>
              <div className='bg-white font-semibold text-center rounded-1xl border shadow-lg p-10'>
                <div className='mb-5 flex justify-center items-center w-32 h-32 rounded-full border border-[#1bb57b] shadow-lg mx-auto'>
                  <img
                    loading='lazy'
                    className='w-20 h-20 object-contain'
                    src={science}
                    alt='science'
                  />
                </div>
                <h1 className='text-xl text-[#124265]'> ডেটা সায়েন্স</h1>
                <p className='text-sm text-gray-400 mt-4'>
                  {' '}
                  ডেটা সায়েন্স হল বিশ্বের সবচেয়ে জনপ্রিয় এবং দ্রুতগতিতে
                  বৃদ্ধি করছে বিশ্বব্যাপী প্রযুক্তি। পাইথন প্রোগ্রামিং ভাষা এবং
                  iHero হার্ডওয়্যার সরঞ্জাম ব্যবহার করে একটি ডেটা সায়েন্স
                  মাস্টার হয়ে উঠুন।
                </p>
              </div>
            </div>
            <div>
              <div className='bg-white font-semibold text-center rounded-1xl border shadow-lg p-10'>
                <div className='mb-5 flex justify-center items-center w-32 h-32 rounded-full border border-[#1bb57b] shadow-lg mx-auto'>
                  <img
                    loading='lazy'
                    className='w-20 h-20 object-contain'
                    src={artificial}
                    alt='artificial'
                  />
                </div>
                <h1 className='text-xl text-[#124265]'> কৃত্রিম বুদ্ধিমত্তা</h1>
                <p className='text-sm text-gray-400 mt-4'>
                  {' '}
                  শিশুদের জন্য কৃত্রিম বুদ্ধিমত্তার বেশ কয়েকটি সুবিধার মধ্যে
                  একটি হল সমস্যা সমাধানের ক্ষমতা উন্নত করা এবং মুখ শনাক্তকরণ
                  প্রক্রিয়া সম্পর্কে আরও ভাল বোঝা এবং জানা
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;
