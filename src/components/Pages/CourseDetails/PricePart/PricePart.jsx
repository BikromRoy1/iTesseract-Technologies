import React from 'react';
import { FaStopwatch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import playIcons from '../../../../Images/icons/play_icon_2 1.svg';
import RegistrationModal from '../../../ContactModel/RegistrationModal';
import VideosModal from '../VideosModal/VideosModal';
import './PricePart.css';

const PricePart = ({ mainCourse }) => {
  const { promotional_video, price, discount_price, discount, offer_date } =
    mainCourse.course;

  // Your YouTube embed URL
  const url = promotional_video;

  // Extract the part after 'embed/' and before the question mark
  const extractVideoId = (embedUrl) => {
    const embedPart = embedUrl?.split('embed/')[1];
    if (embedPart) {
      return embedPart?.split('?')[0];
    }
    return null;
  };

  const videoId = extractVideoId(url);

  function formatNumberToBangla(number) {
    const banglaDigits = {
      0: '০',
      1: '১',
      2: '২',
      3: '৩',
      4: '৪',
      5: '৫',
      6: '৬',
      7: '৭',
      8: '৮',
      9: '৯',
    };

    // Convert number to string and replace digits with Bangla digits
    const banglaNumber = number
      ?.toString()
      ?.replace(/\d/g, (digit) => banglaDigits[digit]);

    // Add commas for formatting
    return banglaNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  // Target offer date
  const offerDateStr = offer_date;

  // Convert the offer date string to a Date object
  const offerDate = new Date(offerDateStr);

  // Get the current date
  const currentDate = new Date();

  // Calculate the difference in milliseconds between the offer date and the current date
  const timeDiff = offerDate.getTime() - currentDate.getTime();

  // Convert the difference from milliseconds to days
  const daysUntilOffer = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  return (
    <div className='price-card mb-[1.6rem]'>
      <div className='course-videos relative'>
        <label className='glightbox'>
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
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
            <h3 className='mb-0 main-price font-bold'>
              ৳{' '}
              {formatNumberToBangla(
                price ? price?.toLocaleString('en-US') : '0'
              )}
            </h3>

            <span className='second-price text-gray-500'>
              <del>
                ৳
                {formatNumberToBangla(
                  discount_price ? discount_price?.toLocaleString('en-US') : '0'
                )}
              </del>
            </span>
            <span className='badge bg-[#FD7E14] border-none mb-0 font-semibold'>
              {discount}% off
            </span>
          </div>
          <div className='mb-0 flex items-center gap-1 md:gap-2 text-[#D83549]'>
            <FaStopwatch className='text-[#D83549]' width='16' height='16' />{' '}
            <span className='font-semibold'>
              {daysUntilOffer} days left at this price
            </span>
          </div>
        </div>
        <div className='mt-4'>
          <button className='btn-buy mb-0 rounded-md bg-[#1CAB55] p-3 whitespace-nowrap text-base font-semibold text-white md:w-full cursor-pointer'>
            <label className='cursor-pointer' htmlFor='my-modal-4'>
              কোর্সটি কিনুন
            </label>
          </button>
          <button
            htmlFor='my-modal-4'
            className='btn-buy mb-0 mt-2 rounded-md bg-[#FFBB2C] p-3 whitespace-nowrap text-base font-semibold text-[#124265] md:w-full cursor-pointer'
          >
            <label className='cursor-pointer' htmlFor='my-modal-4'>
              কোর্সের জন্য রেজিস্ট্রেশন করুন
            </label>
          </button>
          <Link
            to='/checkout'
            className='btn-buy mb-0 mt-2 rounded-md bg-[#2cff5a] p-3 whitespace-nowrap text-base font-semibold text-[#124265] md:w-full cursor-pointer'
          >
            <span className='cursor-pointer'>কোর্সটি কিনুন</span>
          </Link>
        </div>
      </div>
      <VideosModal promotional_video={promotional_video} />
      <RegistrationModal></RegistrationModal>
    </div>
  );
};

export default PricePart;
