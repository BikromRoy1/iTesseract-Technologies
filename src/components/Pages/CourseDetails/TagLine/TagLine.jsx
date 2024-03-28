import React from 'react';
import './TagLine.css';

const TagLine = () => {
  return (
    <div className='TagLine-card'>
      <h3>দক্ষতাগুলি পাবেন</h3>

      <div className='TagLine'>
        <h5 className='tag-color01'>#কোডিং</h5>
        <h5 className='bg-[#d7f5fc] text-[#03c3ec]'>#লজিক</h5>
        <h5 className='text-[#ffab00] bg-[#fff2d6]'>#গেম ডেভেলপমেন্ট</h5>
        <h5 className='bg-[#ffeef3] text-[#f8285a]'>#স্ক্র্যাচ</h5>
        <h5 className='text-[#1b84ff] bg-[#1b84ff1a]'>#প্রোগ্রামিং বেসিক</h5>
      </div>
    </div>
  );
};

export default TagLine;
