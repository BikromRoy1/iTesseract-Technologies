import React from 'react';
import { apiUrl } from '../../../../config/config';
import './Instructors.css';

const Instructors = ({ mainCourse }) => {
  const { designation, name, image } = mainCourse?.course?.trainer;
  return (
    <div className='Instructors-card mb-[1.6rem]'>
      <h3>কোর্স ইন্সট্রাক্টর</h3>
      <div className='pt-1 pb-1'>
        <div className='flex items-center gap-4'>
          <img
            src={`${apiUrl}/` + image}
            alt='avatar'
            className='w-16 h-16 rounded-lg object-cover'
          />
          <div>
            <h4 className='text-[18px] font-bold mb-1 leading-6 capitalize'>
              {name}
            </h4>
            <p className='text-[#6c727f] text-base capitalize'>{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
