import React from 'react';
import playIcons from '../../../../Images/icons/play_icon_2 1.svg';
import './PricePart.css';

const PricePart = () => {
  return (
    <div className='price-card'>
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
    </div>
  );
};

export default PricePart;
