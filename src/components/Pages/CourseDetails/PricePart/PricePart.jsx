import React from 'react';
import { FaStopwatch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import playIcons from '../../../../Images/icons/play_icon_2 1.svg';
import VideosModal from '../VideosModal/VideosModal';
import './PricePart.css';

const PricePart = () => {
  return (
    <div className='price-card mb-[1.6rem]'>
      <div className='course-videos relative'>
        <label className='glightbox'>
          <img
            src='https://img.youtube.com/vi/ISs7r8SNjl4/maxresdefault.jpg'
            className='w-full h-full rounded-[6px]'
            alt='course-Banner'
            loading='lazy'
          />
        </label>
        <div className='playing-icons'>
          <label htmlFor='my-modal-videos' className='glightbox cursor-pointer'>
            <img
              className='w-[70px] h-[70px]'
              src={playIcons}
              loading='lazy'
              alt='playIcons'
            />
          </label>
        </div>
      </div>
      <div className='price-card-body pt-[13px]'>
        <div>
          <div className='flex items-center'>
            <h3 className='mb-0 main-price font-bold'>৳150</h3>
            <span className='second-price text-gray-500'>
              <del>৳350</del>
            </span>
            <span className='badge bg-[#FD7E14] border-none mb-0 font-semibold'>
              60% off
            </span>
          </div>
          <div className='mb-0 flex items-center gap-1 md:gap-2 text-[#D83549]'>
            <FaStopwatch className='text-[#D83549]' width='16' height='16' />{' '}
            <span className='font-semibold'>5 days left at this price</span>
          </div>
        </div>
        <div className='mt-4'>
          <Link to='/login'>
            <button className='btn-buy mb-0 rounded-md bg-[#1CAB55] p-3 whitespace-nowrap text-base font-semibold text-white md:w-full  '>
              কোর্সটি কিনুন
            </button>
          </Link>
          <Link to='/UserRegistration'>
            <button className='btn-buy mb-0 mt-2 rounded-md bg-[#FFBB2C] p-3 whitespace-nowrap text-base font-semibold text-[#124265] md:w-full  '>
              কোর্সের জন্য রেজিস্ট্রেশন করুন
            </button>
          </Link>
        </div>
      </div>
      <VideosModal />
    </div>
  );
};

export default PricePart;
