import React from 'react';
import LevelOne from './LevelOne';
import clock from '../../../../Images/icons/clock.svg';
import level01 from '../../../../Images/level-01.jpg';
import level02 from '../../../../Images/level02.jpg';
import playing from '../../../../Images/playing-banner.jpg';
import university from '../../../../Images/university.jpg';
import level05 from '../../../../Images/coding.jpg';
import level06 from '../../../../Images/univerBanner.jpg';
import graph from '../../../../Images/icons/graph.svg';
import cour from '../../../../Images/icons/courseiCon.png';
import './Level.css';

const Level = () => {
  return (
    <div>
      <section className='py-14'>
        <div className='text-center lg:w-[710px] mx-auto w-full pb-10'>
          <p className='text-lg text-[#1bb57b] uppercase'>কোর্স লেভেল সমূহ </p>

          <a
            href='#'
            className='block mt-4 text-2xl font-semibold text-[#124265] hover:underline '
          >
            প্রতিটি স্তরে ০৬ টি পাঠ আছে
          </a>
        </div>
        <div className='container mx-auto'>
          <div class=''>
            <div class='level-listing'>
              <div class='grid lg:grid-cols-12 gap-0 grid-cols-1'>
                <div class='col-span-3'>
                  <div class='level-slot-class'>
                    <span>
                      <span className='uppercase'>লেভেল - 01</span> <br />
                      24 ঘন্টা
                    </span>
                  </div>
                </div>
                <div class='col-span-9'>
                  <div class='level-slot-info'>
                    <a href=''>
                      <img
                        loading='lazy'
                        class='level-slot-student img-fluid'
                        src={level01}
                        alt='কম্পিউটার প্রোগ্রামিং ফান্ডামেন্টাল'
                      />
                    </a>
                    <div class='level-slot-info-content'>
                      <h3>কোর্সঃ কম্পিউটার প্রোগ্রামিং ফান্ডামেন্টাল</h3>
                      <p>
                        শিক্ষার্থীদের মৌলিক যুক্তিবিদ্যা, কোডিং বোঝা এবং
                        প্রোগ্রামিং ভাষার মৌলিক বিষয়গুলির সাথে পরিচিত করা হবে।
                        বিট বিট করে তারা খুব সহজ গ্রাফিকাল প্রোগ্রামিং এর
                        সাহায্যে গেম ডেভেলপমেন্ট করতে সক্ষম হবে।
                      </p>
                      <div className='flex items-center gap-3 mb-2'>
                        <img src={clock} alt='' />
                        <h2 className='text-gray-500'>
                          12টি পাঠ, 8টি প্রজেক্টস, 4টি কাজ
                        </h2>
                      </div>
                      <div className='flex items-center gap-3 mb-2'>
                        <img width='23px' src={cour} alt='' />
                        <h2 className='text-gray-500'>
                          বয়স 6 এবং তার বেশি, যারা আগ্রহী
                        </h2>
                      </div>
                      <div className='flex items-center gap-3 mb-2'>
                        <img width='23px' src={graph} alt='' />
                        <h2 className='text-gray-500'>
                          আপনি যে দক্ষতাগুলি পান: কোডিং, লজিক, গেম ডেভেলপমেন্ট,
                          স্ক্র্যাচ, প্রোগ্রামিং বেসিক
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class=''>
            <div class='level-listing'>
              <div class='grid lg:grid-cols-12 gap-0 grid-cols-1'>
                <div class='col-span-3'>
                  <div class='level-slot-class2'>
                    <span>
                      <span className='uppercase'>লেভেল - 02</span> <br />
                      24 ঘন্টা
                    </span>
                  </div>
                </div>
                <div class='col-span-9'>
                  <div class='level-slot-info'>
                    <a href=''>
                      <img
                        loading='lazy'
                        class='level-slot-student img-fluid'
                        src={level02}
                        alt='মোবাইল অ্যাপ্লিকেশন'
                      />
                    </a>
                    <div class='level-slot-info-content'>
                      <h3>
                        কোর্স: মোবাইল অ্যাপ্লিকেশন ও ওয়েবসাইট ডেভেলপমেন্ট
                      </h3>
                      <p>
                        এই স্তরটি শিক্ষার্থীদের শেখানোর জন্য ডিজাইন করা হয়েছে
                        কিভাবে তাদের নিজস্ব অ্যাপ্লিকেশন ওয়েবসাইট ডিজাইন এবং
                        পোর্টফোলিও তৈরি করতে হয়।
                      </p>
                      <div className='flex items-center gap-3 mb-2'>
                        <img src={clock} alt='' />
                        <h2 className='text-gray-500'>
                          12টি পাঠ, 8টি প্রজেক্টস, 4টি কাজ
                        </h2>
                      </div>
                      <div className='flex items-center gap-3 mb-2'>
                        <img width='23px' src={cour} alt='' />
                        <h2 className='text-gray-500'>
                          12 বছর বা তার বেশি বয়সী এবং সেই ছাত্রদেরও যাদের লেভেল
                          1 এর পূর্বশর্ত রয়েছে
                        </h2>
                      </div>
                      <div className='flex items-center gap-3 mb-2'>
                        <img width='23px' src={graph} alt='' />
                        <h2 className='text-gray-500'>
                          আপনি যে দক্ষতাগুলি পাবেন: HTML, CSS, মোবাইল
                          অ্যাপ্লিকেশন, ওয়েবসাইট ডেভেলপমেন্ট।
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class=''>
            <div class='level-listing'>
              <div class='grid lg:grid-cols-12 gap-0 grid-cols-1'>
                <div class='col-span-3'>
                  <div class='level-slot-class'>
                    <span>
                      <span className='uppercase'>লেভেল - 03</span> <br />
                      24 ঘন্টা
                    </span>
                  </div>
                </div>
                <div class='col-span-9'>
                  <div class='level-slot-info'>
                    <a href=''>
                      <img
                        loading='lazy'
                        class='level-slot-student img-fluid'
                        src={playing}
                        alt='রোবোটিক্স এবং এমবেডেড সিস্টেম'
                      />
                    </a>
                    <div class='level-slot-info-content'>
                      <h3>কোর্স: রোবোটিক্স এবং এমবেডেড সিস্টেম</h3>
                      <p>
                        লেভেল 3 রোবোটিক্স এবং এমবেডেড সিস্টেম চালু করার জন্য
                        ডিজাইন করা হয়েছে। রোবোটিক্স যেমন উত্তেজনাপূর্ণ,
                        রোবোটিক্স কীভাবে কাজ করে তা শিখতে আরও উত্তেজনাপূর্ণ হবে।
                        ইলেকট্রনিক্স এবং হার্ডওয়্যারের পরিচিতি এই কোর্সে
                        শেখানোর জন্য ডিজাইন করা হয়েছে।
                      </p>
                      <div className='flex items-center gap-3 mb-2'>
                        <img src={clock} alt='' />
                        <h2 className='text-gray-500'>
                          12টি পাঠ, 6টি প্রজেক্টস, 4টি কাজ
                        </h2>
                      </div>
                      <div className='flex items-center gap-3 mb-2'>
                        <img width='23px' src={cour} alt='' />
                        <h2 className='text-gray-500'>
                          বয়স 6 এবং তার বেশি, যারা আগ্রহী
                        </h2>
                      </div>
                      <div className='flex items-center gap-3 mb-2'>
                        <img width='23px' src={graph} alt='' />
                        <h2 className='text-gray-500'>
                          আপনি যে দক্ষতাগুলি পান: কোডিং, লজিক, গেম ডেভেলপমেন্ট,
                          স্ক্র্যাচ, প্রোগ্রামিং বেসিক
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class=''>
            <div class='level-listing'>
              <div class='grid lg:grid-cols-12 gap-0 grid-cols-1'>
                <div class='col-span-3'>
                  <div class='level-slot-class2'>
                    <span>
                      <span className='uppercase'>লেভেল - 04</span> <br />
                      24 ঘন্টা
                    </span>
                  </div>
                </div>
                <div class='col-span-9'>
                  <div class='level-slot-info'>
                    <a href=''>
                      <img
                        loading='lazy'
                        class='level-slot-student img-fluid'
                        src={university}
                        alt='পাইথন প্রোগ্রামিং'
                      />
                    </a>
                    <div class='level-slot-info-content'>
                      <h3>কোর্স: পাইথন প্রোগ্রামিং এবং ডেটা সায়েন্স</h3>
                      <p>
                        আমরা পাইথনের একটি ভূমিকা এবং ডেটা সায়েন্সের সাহায্যে
                        এটিকে কীভাবে চালিত করা যায় তা শেখাব। পাইথন সবচেয়ে
                        বহুমুখী এবং জনপ্রিয় ভাষাগুলির মধ্যে একটি এবং উচ্চ দক্ষ
                        পাইথন প্রোগ্রামারদের ব্যাপক চাহিদা রয়েছে। পাইথন শেখার
                        শিক্ষার্থীরা ডেটা সায়েন্স এবং অ্যাপ্লিকেশন সম্পর্কে
                        ধারণা তৈরি করতে এটি ব্যবহার করতে
                      </p>
                      <div className='flex items-center gap-3 mb-2'>
                        <img src={clock} alt='' />
                        <h2 className='text-gray-500'>
                          12টি পাঠ, 4টি প্রজেক্টস, 4টি কাজ
                        </h2>
                      </div>
                      <div className='flex items-center gap-3 mb-2'>
                        <img width='23px' src={cour} alt='' />
                        <h2 className='text-gray-500'>
                          যে কেউ লেভেল 4 থেকে শুরু করতে চান, শুরু করতে পারেন।
                        </h2>
                      </div>
                      <div className='flex items-center gap-3 mb-2'>
                        <img width='23px' src={graph} alt='' />
                        <h2 className='text-gray-500'>
                          আপনি যে দক্ষতাগুলি পান: পাইথন, গেম ডেভেলপমেন্ট, ডেটা
                          সায়েন্স বেসিক।
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class=''>
            <div class='level-listing'>
              <div class='grid lg:grid-cols-12 gap-0 grid-cols-1'>
                <div class='col-span-3'>
                  <div class='level-slot-class'>
                    <span>
                      <span className='uppercase'>লেভেল - 05</span> <br />
                      24 ঘন্টা
                    </span>
                  </div>
                </div>
                <div class='col-span-9'>
                  <div class='level-slot-info'>
                    <a href=''>
                      <img
                        loading='lazy'
                        class='level-slot-student img-fluid'
                        src={level05}
                        alt='আইওটি'
                      />
                    </a>
                    <div class='level-slot-info-content'>
                      <h3>কোর্স: আইওটি এবং ডেটা সায়েন্স</h3>
                      <p>
                        প্রত্যেকেই ইন্টারনেট অফ থিংসের কথা শুনেছে যা মাইক্রোচিপ
                        এবং ইন্টারনেট সংযোগের সাহায্যে সবকিছুকে স্মার্ট, সহজ এবং
                        প্রযুক্তিগতভাবে চালায়। শিক্ষার্থীরা আইওটি সম্পর্কে এবং
                        ডেটা সায়েন্সের সাথে কীভাবে এটি সংযুক্ত করা যায় তা
                        শিখবে।
                      </p>
                      <div className='flex items-center gap-3 mb-2'>
                        <img src={clock} alt='' />
                        <h2 className='text-gray-500'>
                          12টি পাঠ, 10টি প্রজেক্টস, 4টি কাজ
                        </h2>
                      </div>
                      <div className='flex items-center gap-3 mb-2'>
                        <img width='23px' src={cour} alt='' />
                        <h2 className='text-gray-500'>
                          পূর্বের স্তরে জ্ঞান সঙ্গে যে কেউ.
                        </h2>
                      </div>
                      <div className='flex items-center gap-3 mb-2'>
                        <img width='23px' src={graph} alt='' />
                        <h2 className='text-gray-500'>
                          আপনি যে দক্ষতাগুলি পান: IoT, স্মার্ট সিস্টেম ডিজাইন,
                          ডেটা সায়েন্স।
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class=''>
            <div class='level-listing'>
              <div class='grid lg:grid-cols-12 gap-0 grid-cols-1'>
                <div class='col-span-3'>
                  <div class='level-slot-class2'>
                    <span>
                      <span className='uppercase'>লেভেল - 06</span> <br />
                      24 ঘন্টা
                    </span>
                  </div>
                </div>
                <div class='col-span-9'>
                  <div class='level-slot-info'>
                    <a href=''>
                      <img
                        loading='lazy'
                        class='level-slot-student img-fluid'
                        src={level06}
                        alt='রোবোটিক্স ভিশন'
                      />
                    </a>
                    <div class='level-slot-info-content'>
                      <h3>কোর্স: এআই এবং রোবোটিক্স ভিশন</h3>
                      <p>
                        শিক্ষার্থীরা AI এর সাহায্যে তাদের রোবোটিক্স ডিজাইন করবে।
                        আমাদের শিক্ষাবিদ তাদের মূল বিষয়ের মাধ্যমে একেবারে শেষ
                        পর্যন্ত গাইড করবেন।
                      </p>
                      <div className='flex items-center gap-3 mb-2'>
                        <img src={clock} alt='' />
                        <h2 className='text-gray-500'>
                          12টি পাঠ, 2টি প্রজেক্টস, 4টি কাজ
                        </h2>
                      </div>
                      <div className='flex items-center gap-3 mb-2'>
                        <img width='23px' src={cour} alt='' />
                        <h2 className='text-gray-500'>
                          পূর্বের স্তরে জ্ঞান সঙ্গে যে কেউ.
                        </h2>
                      </div>
                      <div className='flex items-center gap-3 mb-2'>
                        <img width='23px' src={graph} alt='' />
                        <h2 className='text-gray-500'>
                          আপনি যে দক্ষতাগুলি পান: এআই, রোবোটিক্স, চিত্র
                          প্রক্রিয়াকরণ
                        </h2>
                      </div>
                    </div>
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

export default Level;
