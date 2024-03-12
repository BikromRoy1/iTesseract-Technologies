import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

const UniSkills = () => {
  // https://itesseract.com.bd/master/api/v1/university-courses

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://itesseract.com.bd/master/api/v1/university-courses'
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const universityCourses = data.data;

  return (
    <section className='pb-14 pt-[40px]'>
      <div className='container p-6 mx-auto'>
        <div className='section-header'>
          <h4>বিশ্ববিদ্যালয় কোর্স</h4>
          <h2>
            {' '}
            কোর্স দক্ষতা <span className='title-gradient'>আপনি পাবেন</span>
          </h2>
          <p>
            অধ্যয়ন শুরু করার জন্য আপনার যা দরকার তা হল সঠিক মনের ফ্রেমে।
            আইটেসারেক্ট টেকনোলিজস-এর একজন ছাত্র হিসাবে, আপনি অসামান্য প্রশিক্ষক
            এবং কম্পিউটার বিজ্ঞানে দক্ষতা অর্জনের জন্য একটি সু-প্রতিষ্ঠিত
            পাঠ্যক্রম দ্বারা পরিচালিত হবেন।
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0'>
          {universityCourses?.map((item) => (
            <div key={item?.id}>
              <div className='bg-white font-semibold text-center rounded-1xl border shadow-lg p-10'>
                <div className='mb-5 flex justify-center items-center w-32 h-32 rounded-full border-[3px]  border-[#1bb57b] shadow-lg mx-auto'>
                  <img
                    loading='lazy'
                    className='w-20 h-20 object-contain'
                    src={`https://itesseract.com.bd/master/` + item.image}
                    alt='Robotics'
                  />
                </div>
                <h1 className='text-xl text-[#124265]'>
                  <Link href='#' target='_blank' rel='noopener noreferrer'>
                    {item?.title}
                  </Link>
                </h1>
                <p className='text-sm text-gray-400 mt-4'>
                  {item?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniSkills;
