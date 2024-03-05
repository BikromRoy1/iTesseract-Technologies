import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Skill.css';

const SkillTwo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://itesseract.com.bd/master/api/v1/school-courses'
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const schoolCourseData = data.data;

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
          {schoolCourseData?.map((skill) => (
            <div key={skill?.id} className='skill-items-card'>
              <div className='skill-image mb-[13px]'>
                <img
                  width='80'
                  height='80'
                  src={`https://itesseract.com.bd/master/` + skill?.image}
                  loading='lazy'
                  alt={skill?.title}
                />
              </div>
              <div className='skills-body'>
                <h4 className='text-[20px] font-semibold mt-[16px] mb-[15px] tracking-[0.20000000298023224px] leading-[26px]'>
                  {skill?.title}
                </h4>
                <p className='text-[16px] tracking-[0.20000000298023224px] leading-[24px] text-gray-500'>
                  {skill?.description}
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
