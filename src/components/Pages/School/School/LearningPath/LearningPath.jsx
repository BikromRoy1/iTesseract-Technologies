import React from 'react';

const LearningPath = () => {
  return (
    <div
      className='hero h-[420px] text-center object-cover'
      style={{
        backgroundImage: `url(https://i.ibb.co/R40PK61/two-young-girls-using-electronic-parts-build-drone.jpg)`,
      }}
    >
      <div className='hero-overlay bg-opacity-70'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-2xl'>
          <p className='text-lg text-[#ffc107] uppercase'>শেখার পথ</p>
          <h1 className='mb-5 text-4xl font-bold  mt-4'>
            প্রতিটি স্তরে 12 টি পাঠ আছে
          </h1>
          <p className='mb-5 text-gray-300'>
            কোর্সের স্তর রয়েছে, সাবধানে পরিকল্পিত এবং প্রযুক্তিগত বিষয়বস্তুর
            সাথে সংযুক্ত। প্রযুক্তিগত বিষয়বস্তু যেমন প্রোগ্রামিং ভাষা, IoT, AI,
            এবং রোবোটিক্সের ভূমিকা। এখন, এই পদগুলি খুব কঠিন বলে মনে হতে পারে
            কিন্তু আমাদের কোর্সের বিষয়বস্তু প্রতিটি স্তরের জন্য বয়স-উপযুক্ত,
            আমাদের শিক্ষার পদ্ধতিটি মূলত STEM যা গেমফিকেশনের মাধ্যমে হাতে-কলমে
            শেখার অনুমতি দেয় এবং হোমওয়ার্ক-ভিত্তিক শেখার অনুমতি দেয় না।
            আমাদের শেখার পথে 6টি স্তর রয়েছে, যা যথাযথভাবে পরিকল্পিত এবং
            ভবিষ্যতে একজন উচ্চ প্রযুক্তিগত প্রকৌশলী, শিক্ষাবিদ, গবেষক, ইত্যাদি
            হওয়ার জন্য প্রয়োজনীয় দক্ষতা অর্জনের সঠিক ফলাফলের জন্য ডিজাইন করা
            হয়েছে।
          </p>
        </div>
      </div>
    </div>
  );
};

export default LearningPath;