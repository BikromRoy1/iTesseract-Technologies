import React from 'react';

const TestimonialCard = ({ img, text, author, company }) => {
  return (
    <div className='pt-40'>
      <div className='flex flex-col items-center justify-center p-8 rounded-lg bg-white'>
        <img
          loading='lazy'
          src={img}
          alt=''
          className='w-40 h-40 card-shadow mb-2 -mt-44 bg-center object-center bg-cover rounded-full '
        />

        <p className='px-0 text-justify md:px-6 mt-2'>{text}</p>

        <div className='flex items-center justify-between mt-4 space-x-5'>
          <div className='flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-8 h-8 text-yellow-500'
            >
              <path d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z' />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-8 h-8 text-yellow-500'
            >
              <path d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z' />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-8 h-8 text-yellow-500'
            >
              <path d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z' />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-8 h-8 text-yellow-500 hidden md:block'
            >
              <path d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z' />
            </svg>
          </div>

          <div>
            <p className='text-sm md:text-lg font-semibold'>{author}</p>
            <p className='text-xs md:text-sm dark:text-gray-400'>{company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
