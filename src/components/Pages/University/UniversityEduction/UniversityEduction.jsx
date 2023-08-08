import React from 'react';
import gameing from '../../../../Images/icons/Gamification.png';
import project from '../../../../Images/icons/Project.png';
import projects from '../../../../Images/icons/projects.png';
import teacher from '../../../../Images/icons/teacher.png';
import skills from '../../../../Images/icons/skill.png';
import homeWorks from '../../../../Images/icons/courseiCon.png';

const UniversityEduction = () => {
  return (
    <div>
      <section className='py-14'>
        <div className='container mx-auto'>
          <div className='text-center lg:w-[710px] mx-auto w-full'>
            <a
              href='#'
              className='block mt-4 text-2xl font-semibold text-[#124265] hover:underline '
            >
              আমাদের শিক্ষা প্রক্রিয়া এবং বৈশিষ্ট্য
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
                <div className='mb-5 flex justify-center items-center w-32 h-32 rounded-full border-[3px] border-[#1bb57b] shadow-lg mx-auto'>
                  <img
                    loading='lazy'
                    className='w-20 h-20 object-contain'
                    src={gameing}
                    alt='গ্যামিফাইড পাঠ'
                  />
                </div>
                <h1 className='text-xl text-[#124265]'> 12 গ্যামিফাইড পাঠ</h1>
                <p className='text-sm text-gray-400 mt-4'>
                  {' '}
                  গ্যামিফাইড হল একটি প্রযুক্তি যা একটি সিস্টেম বা অ্যাপ্লিকেশনে।
                  প্রযুক্তি সম্পর্কে শেখার সবচেয়ে সৃজনশীল, প্রভাবশালী এবং
                  সৃজনশীল উপায়। পাঠ এবং কোর্সের বিষয়বস্তু বোঝার ইন্টারেক্টিভ
                  উপায়।
                </p>
              </div>
            </div>
            <div>
              <div className='bg-white font-semibold text-center rounded-1xl border shadow-lg p-10'>
                <div className='mb-5 flex justify-center items-center w-32 h-32 rounded-full border-[3px] border-[#1bb57b] shadow-lg mx-auto'>
                  <img
                    loading='lazy'
                    className='w-20 h-20 object-contain'
                    src={project}
                    alt='science'
                  />
                </div>
                <h1 className='text-xl text-[#124265]'> 10 স্মার্ট প্রকল্প</h1>
                <p className='text-sm text-gray-400 mt-4'>
                  {' '}
                  IoT এর ধারণা এবং ধারণা বিকাশ করা এবং এটি কীভাবে কোনও শারীরিক
                  সিস্টেমকে অনলাইন এবং স্মার্ট করে তুলতে পারে। 10টি স্মার্ট
                  প্রকল্প হাতে-কলমে শেখানো হবে, এবং শিক্ষার্থীরা স্ক্র্যাচ থেকে
                  সিস্টেমটি বুঝতে পারবে।
                </p>
              </div>
            </div>
            <div>
              <div className='bg-white font-semibold text-center rounded-1xl border shadow-lg p-10'>
                <div className='mb-5 flex justify-center items-center w-32 h-32 rounded-full border-[3px] border-[#1bb57b] shadow-lg mx-auto'>
                  <img
                    loading='lazy'
                    className='w-20 h-20 object-contain'
                    src={homeWorks}
                    alt='artificial'
                  />
                </div>
                <h1 className='text-xl text-[#124265]'> কোন হোমওয়ার্ক নেই</h1>
                <p className='text-sm text-gray-400 mt-4'>
                  {' '}
                  কোনো হোমওয়ার্কের প্রয়োজন হয় না কারণ শেখার নিজেই
                  ইন্টারেক্টিভ এবং জ্ঞানের প্রয়োগকে অন্তর্ভুক্ত করে, তাই
                  শিক্ষার ফলাফল পরামর্শদাতাদের কাছে পরিষ্কার এবং কোনো
                  হোমওয়ার্কের প্রয়োজন নেই।
                </p>
              </div>
            </div>
            <div>
              <div className='bg-white font-semibold text-center rounded-1xl border shadow-lg p-10'>
                <div className='mb-5 flex justify-center items-center w-32 h-32 rounded-full border-[3px] border-[#1bb57b] shadow-lg mx-auto'>
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
                  পেশাদার পদ্ধতিতে প্রযুক্তি শেখার দিকে অগ্রসর হওয়া, এবং
                  শিল্পগতভাবে প্রয়োজনীয় দক্ষতাগুলিও শেখা। এটি শিক্ষার্থীদের
                  প্রযুক্তি শিল্পে প্রবেশের জন্য প্রয়োজনীয় প্রস্তুতির সাথে
                  প্রস্তুত করবে।
                </p>
              </div>
            </div>
            <div>
              <div className='bg-white font-semibold text-center rounded-1xl border shadow-lg p-10'>
                <div className='mb-5 flex justify-center items-center w-32 h-32 rounded-full border-[3px] border-[#1bb57b] shadow-lg mx-auto'>
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
                  শিশুদের জন্য কৃত্রিম বুদ্ধিমত্তার বিভিন্ন সুবিধার মধ্যে একটি
                  হল সমস্যা সমাধানের ক্ষমতা উন্নত করা এবং মুখ শনাক্তকরণ
                  প্রক্রিয়া সম্পর্কে আরও ভাল বোঝা
                </p>
              </div>
            </div>
            <div>
              <div className='bg-white font-semibold text-center rounded-1xl border shadow-lg p-10'>
                <div className='mb-5 flex justify-center items-center w-32 h-32 rounded-full border-[3px] border-[#1bb57b] shadow-lg mx-auto'>
                  <img
                    loading='lazy'
                    className='w-20 h-20 object-contain'
                    src={teacher}
                    alt='artificial'
                  />
                </div>
                <h1 className='text-xl text-[#124265]'> প্রত্যয়িত শিক্ষক</h1>
                <p className='text-sm text-gray-400 mt-4'>
                  {' '}
                  আমাদের সকল শিক্ষক ইতিমধ্যেই শত শত ব্যাচকে প্রশিক্ষণ দিয়েছেন,
                  খেলা পরিবর্তনের ফলাফল এবং ফলাফল সহ। আমাদের শিক্ষক
                  শিক্ষার্থীদের মধ্যে প্রতিযোগিতামূলক ক্ষমতা স্থাপনের পরিবর্তে
                  জ্ঞান তৈরিতে বেশি কাজ করেন।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UniversityEduction;
