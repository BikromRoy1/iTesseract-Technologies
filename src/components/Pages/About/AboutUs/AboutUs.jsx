import React from 'react';
import about from '../../../../Images/About.jpg';
import aboutbaby from '../../../../Images/About-baby.png';
import ternative from '../../../../Images/icons/alternative.png';
import ai from '../../../../Images/icons/ai.png';
import Breadcrumb from '../../../Breadcrumb/Breadcrumb';

const AboutUs = () => {
  return (
    <div>
      <Breadcrumb
        title='আমাদের সম্পর্কে'
        subTitle='আমাদের সম্পর্কে'
        img={about}
        slgs='/about'
      ></Breadcrumb>
      <section className='bg-white '>
        <div className='container px-6 py-10 mx-auto'>
          <div className='mt-8 lg:-mx-6 lg:flex lg:items-center'>
            <img
              loading='lazy'
              className='object-contain w-full lg:mx-6 lg:w-1/2 h-72 lg:h-96'
              src={aboutbaby}
              alt='About-us'
            />

            <div className='mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 '>
              <p className='text-lg text-[#1bb57b] uppercase'>
                আমাদের সম্পর্কে
              </p>

              <a
                href='#'
                className='block mt-4 text-2xl font-semibold text-[#124265] hover:underline '
              >
                আমরা 10 বছর ধরে টেক এরিয়াতে সমৃদ্ধ হয়েছি
              </a>

              <p className='mt-3 text-base  dark:text-gray-400 md:text-base mb-4'>
                আইটেসারেক্ট টেকনোলিজস হল একটি উদ্ভাবনী কেন্দ্র যা শিক্ষা
                ক্ষেত্রে চতুর্থ শিল্প বিপ্লবকে ত্বরান্বিত করার উপর দৃষ্টি নিবদ্ধ
                করে। প্রযুক্তির লেন্সের মাধ্যমে, আইটেসারেক্ট বিশ্বকে উন্নত করার
                জন্য সাধারণ চ্যালেঞ্জগুলির উত্তর কল্পনা করে এবং তৈরি করে।
                আইটেসারেক্ট অত্যাধুনিক প্রযুক্তি ব্যবহারের মাধ্যমে সামাজিক
                জীবনকে প্রভাবিত এবং ক্ষমতায়নের ধারণার উপর দৃষ্টি নিবদ্ধ করে।
              </p>
              <hr />
              <div class='mt-5 grid grid-cols-1 gap-8 md:mt-5 md:grid-cols-2 md:gap-12 lg:grid-cols-2'>
                <div class='flex items-start gap-4'>
                  <span class='shrink-0 rounded-lg bg-[#ffc107a3] p-3'>
                    <img
                      className='w-7 h-7'
                      loading='lazy'
                      src={ternative}
                      alt='ternative'
                    />
                  </span>

                  <div>
                    <h2 class='text-lg font-bold text-[#124265]'>
                      দক্ষতা সেবা প্রদান |{' '}
                    </h2>

                    <p class='mt-1 text-sm text-gray-400'>
                      আমাদের কোম্পানি দক্ষতা সেবা প্রদানে উপরে নির্ভর করে। আমরা
                      আমাদের ক্লায়েন্টদের প্রয়োজনীয় সেবা সর্বদা সম্ভব সহজে
                      এবং সুবিধাজনকভাবে প্রদান করতে সমর্থ।
                    </p>
                  </div>
                </div>

                <div class='flex items-start gap-4'>
                  <span class='shrink-0 rounded-lg bg-[#ffc107a3] p-3'>
                    <img className='w-7 h-7' src={ai} alt='ai' loading='lazy' />
                  </span>

                  <div>
                    <h2 class='text-lg font-bold text-[#124265]'>
                      ছাত্রদের জন্য জরুরী সহায়তা
                    </h2>

                    <p class='mt-1 text-sm text-gray-400'>
                      ছাত্রদের প্রশিক্ষণ এবং শিক্ষার জন্য জরুরী সহায়তা সরবরাহ
                      করা প্রয়োজন। এটি তাদের পেশাদারী জীবনে প্রভাব ফেলবে এবং
                      সমাজের উন্নয়নের একটি গুরুত্বপূর্ণ অংশ।
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
