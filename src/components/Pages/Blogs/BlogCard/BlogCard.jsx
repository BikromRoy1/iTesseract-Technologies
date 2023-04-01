import React from 'react';
import './BlogCard.css';

const BlogCard = ({ blog }) => {
  const { cat_id, title, img, date, comments } = blog;

  return (
    <div>
      {' '}
      <div class='single-blog-grid'>
        <div class='blog-img'>
          <a href='blog-single.html'>
            <img loading='lazy' src={img} alt='' />
          </a>
        </div>
        <div class='blog-content'>
          <div class='meta-info'>
            <a class='date' href=''>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6 watch'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              10 June 2023
            </a>
            <a class='author' href=''>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6 watch'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
                />
              </svg>
              Anjelio Joly
            </a>
          </div>
          <h4>
            <a href='blog-single.html'>
              Branding Involves Developing a Strategy to Creating.
            </a>
          </h4>
          <p>
            Lorem ipsum dolor sit amet, adipscing elitr, sit gifted sed diam
            nonumy eirmod tempor ividunt dolore.
          </p>
          <a href='blog-single.html' class='more-btn'>
            Read Blog{' '}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 inline-block'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
