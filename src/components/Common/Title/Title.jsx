import React from 'react';

const Title = ({ title, text, details }) => {
  return (
    <div>
      <div className='w-full text-center mx-auto md:w-6/12 mt-4'>
        <h2 className='text-3xl font-extrabold'>
          <span className='theme-primary-color'>{title}</span>
          <span className='theme-secondary-color'> {text}</span>
        </h2>
        <p className='text-gray-500 mt-1 mb-10'>{details}</p>
      </div>
    </div>
  );
};

export default Title;
