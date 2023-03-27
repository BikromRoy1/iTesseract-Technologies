import React from 'react';
import Robotics from '../../../../Images/icons/skillicon2.png';
import science from '../../../../Images/icons/skillicon3.png';
import artificial from '../../../../Images/icons/ai.png';

const UniSkills = () => {
  return (
    <div>
      <section className='py-14'>
        <div className='container mx-auto'>
          <div className='text-center lg:w-[710px] mx-auto w-full'>
            <p className='text-lg text-[#1bb57b] uppercase'>
              বিশ্ববিদ্যালয় কোর্স
            </p>

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
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0'>
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

export default UniSkills;
