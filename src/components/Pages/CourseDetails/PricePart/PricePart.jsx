import React from 'react';
import { FaStopwatch } from 'react-icons/fa';
import playIcons from '../../../../Images/icons/play_icon_2 1.svg';
import './PricePart.css';

const PricePart = () => {
  return (
    <div className='price-card mb-[1.6rem]'>
      <div className='course-videos relative'>
        <a href='https://www.youtube.com/watch?v=ISs7r8SNjl4'>
          <img
            src='https://img.youtube.com/vi/ISs7r8SNjl4/maxresdefault.jpg'
            class='w-full h-full rounded-[6px]'
            alt='course-Banner'
            loading='lazy'
          />
        </a>
        <div className='playing-icons'>
          <a href='https://www.youtube.com/watch?v=ISs7r8SNjl4'>
            <img
              className='w-[70px] h-[70px]'
              src={playIcons}
              loading='lazy'
              alt='playIcons'
            />
          </a>
        </div>
      </div>
      <div className='price-card-body pt-[13px]'>
        <div>
          <div class='flex items-center'>
            <h3 class='mb-0 main-price font-bold'>৳150</h3>
            <span class='second-price text-gray-500'>
              <del>৳350</del>
            </span>
            <span class='badge bg-[#FD7E14] border-none mb-0 font-semibold'>
              60% off
            </span>
          </div>
          <div class='mb-0 flex items-center gap-1 md:gap-2 text-[#D83549]'>
            <FaStopwatch className='text-[#D83549]' width='16' height='16' />{' '}
            <span className='font-semibold'>5 days left at this price</span>
          </div>
        </div>
        <div class='mt-4'>
          <button class='btn-buy mb-0 rounded-md bg-[#1CAB55] p-3 whitespace-nowrap text-base font-semibold text-white md:w-full  '>
            কোর্সটি কিনুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricePart;
