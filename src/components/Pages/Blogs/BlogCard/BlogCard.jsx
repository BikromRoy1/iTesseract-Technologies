import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css';

import { apiUrl } from '../../../../config/config';

const BlogCard = ({ blog }) => {
  const { id, title, image, created_at,  body, category } = blog;

  const createdAt = created_at;
  const date = new Date(createdAt);

  // Get the individual components of the date
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // January is 0, so we add 1
  const day = date.getDate();

  // Create the formatted date string
  const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${
    day < 10 ? '0' + day : day
    }`;
  
    function removeHTMLTags(htmlString) {
      const parser = new DOMParser();
      const parsedDocument = parser.parseFromString(htmlString, 'text/html');
      return parsedDocument.body.textContent || '';
    }

    const plainText = removeHTMLTags(body);

  return (
    <div>
      {' '}
      <div className='single-blog-grid container'>
        <div className='blog-img'>
          <Link to={`/blog/${id}`}>
            <img
              className='object-cover'
              loading='lazy'
              src={`${apiUrl}/` + image}
              alt={title}
            />
          </Link>
        </div>
        <div className='blog-content'>
          <div className='meta-info'>
            <Link className='date' to={`/blog/${id}`}>
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
              {formattedDate}
            </Link>
            <Link className='author' to={`/blog/${id}`}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6 watch'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 6h.008v.008H6V6z'
                />
              </svg>

              {category?.name}
            </Link>
          </div>
          <h4>
            <Link to={`/blog/${id}`}>{title}</Link>
          </h4>
          <p className='text-justify'>
            {plainText?.length > 10 ? (
              plainText?.slice(0, 180) + ' .....'
            ) : (
              <p>not found</p>
            )}
          </p>
          <Link to={`/blog/${id}`} className='more-btn'>
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
