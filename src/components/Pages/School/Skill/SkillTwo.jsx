import React from 'react';
import onlineEducation from '../../../../Images/icons/online-education.png';
import './Skill.css';

const SkillTwo = () => {
  const skills = [
    {
      skill_id: '01',
      skillsIcons: onlineEducation,
      tittle: '  আর্টিফিশিয়াল ইন্টেলিজেন্স',
      Description:
        'শিশুদের জন্য কৃত্রিম বুদ্ধিমত্তার বেশ কয়েকটি সুবিধার মধ্যে একটি হল সমস্যা সমাধানের ক্ষমতা উন্নত করা এবং মুখ শনাক্তকরণ প্রক্রিয়া সম্পর্কে আরও ভাল বোঝা এবং জানা',
    },
    {
      skill_id: '02',
      skillsIcons: onlineEducation,
      tittle: ' ডেটা সায়েন্স',
      Description:
        'ডেটা সায়েন্স হল বিশ্বের সবচেয়ে জনপ্রিয় এবং দ্রুতগতিতে বৃদ্ধি করছে বিশ্বব্যাপী প্রযুক্তি। পাইথন প্রোগ্রামিং ভাষা এবং iHero হার্ডওয়্যার সরঞ্জাম ব্যবহার করে একটি ডেটা সায়েন্স মাস্টার হয়ে উঠুন।',
    },
    {
      skill_id: '03',
      skillsIcons: onlineEducation,
      tittle: ' রোবোটিক্স এবং আই.ও.টি',
      Description:
        'রোবোটিক্স এবং আইওটি প্রযুক্তির বিকাশ iedu এবং iHero ব্যবহারের মাধ্যমে অন্বেষণ করা হচ্ছে, যা শিক্ষার্থীদের কীভাবে আসন্ন প্রযুক্তি তৈরি করতে হয় তা শেখায়।',
    },
    {
      skill_id: '04',
      skillsIcons: onlineEducation,
      tittle: 'আরডুইনো আইডি',
      Description:
        'আরডুইনো ও আরডুইনো সি প্রোগ্রামিং রোবট তৈরি করতে এবং এটি এমন একটি দক্ষতা যা তরুণরা ভবিষ্যতের রোবোটিক্স প্রযুক্তির প্রস্তুতির জন্য শিখতে পারে।',
    },
    {
      skill_id: '05',
      skillsIcons: onlineEducation,
      tittle: 'পাইথন প্রোগ্রামিং',
      Description:
        'পাইথন একটি অত্যন্ত অভিব্যক্তিপূর্ণ, শক্তিশালী প্রোগ্রামিং ভাষা যা শিখতে সহজ এবং ব্যবহার করা উপভোগ্য।',
    },
    {
      skill_id: '06',
      skillsIcons: onlineEducation,
      tittle: 'ওয়েব ডেভেলপমেন্ট',
      Description:
        'শিশুরা মৌলিক এবং জটিল ওয়েব ইন্টারফেস তৈরি করতে পারে এবং HTML এবং CSS ব্যবহার করে জিনিসগুলিকে অ্যানিমেট করতে পারে।',
    },
  ];

  return (
    <section className='py-14'>
      <div className='container p-6 mx-auto'>
        <div className='section-header'>
          <h2>
            কোর্স দক্ষতা
            <span className='title-gradient'> আপনি পাবেন</span>
          </h2>
          <p>
            অধ্যয়ন শুরু করার জন্য আপনার যা দরকার তা হল সঠিক মনের ফ্রেমে।
            আইটেসারেক্ট টেকনোলিজস-এর একজন ছাত্র হিসাবে, আপনি অসামান্য প্রশিক্ষক
            এবং কম্পিউটার বিজ্ঞানে দক্ষতা অর্জনের জন্য একটি সু-প্রতিষ্ঠিত
            পাঠ্যক্রম দ্বারা পরিচালিত হবেন।
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {skills?.map((skill) => (
            <div key={skill?.skill_id} className='skill-items-card'>
              <div className='skill-image mb-[13px]'>
                <img
                  width='80'
                  height='80'
                  src={skill?.skillsIcons}
                  loading='lazy'
                  alt={skill?.tittle}
                />
              </div>
              <div className='skills-body'>
                <h4 className='text-[20px] font-semibold mt-[16px] mb-[15px] tracking-[0.20000000298023224px] leading-[26px]'>
                  {skill?.tittle}
                </h4>
                <p className='text-[16px] tracking-[0.20000000298023224px] leading-[24px] text-gray-500'>
                  {skill?.Description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillTwo;
