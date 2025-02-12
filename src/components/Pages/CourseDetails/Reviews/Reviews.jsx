import React from 'react';
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from 'react-icons/io';
import './Reviews.css';
import Avatar from '../../../../Images/icons/avatar-15.png';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <IoIosStar key={i} className='text-[#fc9231] w-5 h-5' />
      ))}

      {hasHalfStar && <IoIosStarHalf className='text-[#fc9231] w-5 h-5' />}

      {[...Array(emptyStars)].map((_, i) => (
        <IoIosStarOutline key={i} className='text-[#fc9231] w-5 h-5' />
      ))}
    </>
  );
};

const Reviews = ({ mainCourse }) => {
  const reviews = mainCourse.course.course_reviews;
  return (
    <div className='review-card bg-white mb-[1.6rem]'>
      <div className='videos-title'>
        <h3 className='w-full'>রেটিং এবং রিভিউ ({reviews?.length})</h3>
      </div>
      <p class='text-[#7b7b8a]'>
        আমাদের রেটিং এবং রিভিউ বিভাগটি শিক্ষার্থী ও অভিভাবকদের জন্য একটি
        উন্মুক্ত মতামত শেয়ার করার জায়গা। এখানে আপনি কোর্সের মান, প্রশিক্ষকের
        দক্ষতা এবং শেখার অভিজ্ঞতা সম্পর্কে আপনার মতামত জানাতে পারবেন।
      </p>
      {reviews.map((review) => (
        <div key={review?.id} className='review-card-border pt-3'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-4'>
              <img
                src={Avatar}
                alt='avatar'
                className='w-16 h-16 rounded-full object-cover ring ring-gray-300'
              />

              <div>
                <h3 className='text-[#124265] text-[17px] font-bold mb-1 leading-6'>
                  {review?.name}
                </h3>

                <p className='text-[#6c727f] text-sm'>শিক্ষার্থী</p>
              </div>
            </div>
            <div className='flex items-center gap-1'>
              <StarRating rating={parseFloat(review?.rating)} />
            </div>
          </div>
          <p
            className='text-[#4e5562] pt-4 text-base'
            dangerouslySetInnerHTML={{ __html: review?.description }}
          ></p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
