import React from 'react';
import './Videos.css';

const Videos = () => {
  return (
    <div className='videos-card-title'>
      <div className='videos-title'>
        <h3 className='w-full'>কোর্সের পাঠ্যক্রম</h3>
      </div>
      <div className='videos-timing'>
        <ul className='flex pb-3'>
          <li className='mr-[30px] text-[#7b7b8a] text-[17px] font-medium'>
            {' '}
            বিগিনার লেভেল
          </li>
          <li className='mr-[30px] text-[#7b7b8a] text-[17px] font-medium'>
            30 ভিডিও
          </li>
          <li className='mr-[30px] text-[#7b7b8a] text-[17px] font-medium'>
            মোট: 5 ঘন্টা 56 মিনিট 24 সেকেন্ড
          </li>
        </ul>
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit,
        dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Similique nemo corrupti velit! A recusandae optio repellat
        exercitationem debitis facilis non officia. Beatae eum esse consequuntur
        accusantium pariatur error sapiente suscipit.
      </p>
    </div>
  );
};

export default Videos;
