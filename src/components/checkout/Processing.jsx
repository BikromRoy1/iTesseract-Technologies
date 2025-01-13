import React from 'react';
import bkash from '../../Images/bkash-gift.gif';
import './Processing.css';

const Processing = () => {
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-white bg-opacity-50 z-50'>
      <div className='flex flex-col items-center'>
        <img
          src={bkash} // Replace with your loader image path
          alt='Loading...'
          className='w-28 h-28' // Customize the size as needed
        />
      </div>
    </div>
  );
};

export default Processing;
