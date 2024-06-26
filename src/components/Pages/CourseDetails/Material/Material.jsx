import React from 'react';
import './Material.css';

const Material = ({ mainCourse }) => {
  const { course_feature } = mainCourse.course;
  const newArray = course_feature.split(',');

  return (
    <div className='material-card mb-[1.6rem]'>
      <h4 className='font-bold text-[#124265] text-[16px] md:text-[20px] leading-[28px] pb-[10px]'>
        কোর্সে কী কী থাকছে?
      </h4>
      <ul className='grid gap-3 md:grid-cols-1 lg:grid-cols-1'>
        {newArray.map((item, index) => (
          <li key={index} className='flex items-center space-x-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              className='w-5 h-5 bi bi-check-circle-fill text-[#1BB57B]'
              viewBox='0 0 16 16'
            >
              <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z' />
            </svg>
            <span className='text-[16px] font-medium'>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Material;
