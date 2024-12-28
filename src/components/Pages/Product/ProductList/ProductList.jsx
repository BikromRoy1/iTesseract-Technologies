import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { apiUrl } from '../../../../config/config';

const ProductList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/v1/products`);
        setData(response.data);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false when data is fetched
      }
    };
    fetchData();
  }, []);

  const products = data.data;

  return (
    <section className='container px-6 mx-auto pb-14 pt-14'>
      <div className='section-header'>
        <h4>আমাদের প্রোডাক্টস</h4>
        <h2>
          {' '}
          যেকোনো বিষয়ে যেকোনো কিছু শিখতে{' '}
          <span className='title-gradient'>
            চলে যাও তোমার পছন্দের প্রোডাক্টস
          </span>
        </h2>
      </div>

      <div className='grid grid-cols-1 gap-5 md:grid-cols-1 xl:grid-cols-2'>
        {loading ? (
          <>
            <div className='flex flex-col m-8 rounded-lg shadow-sm w-full animate-pulse h-96'>
              <div className='h-48 rounded-t bg-[#d1fae5]'></div>
              <div className='flex-1 px-4 py-8 space-y-4 sm:p-8 bg-[#ecfdf5]'>
                <div className='w-full h-6 rounded bg-[#d1fae5]'></div>
                <div className='w-full h-6 rounded bg-[#d1fae5]'></div>
                <div className='w-3/4 h-6 rounded bg-[#d1fae5]'></div>
              </div>
            </div>
            <div className='flex flex-col m-8 rounded-lg shadow-sm w-full animate-pulse h-96'>
              <div className='h-48 rounded-t bg-[#d1fae5]'></div>
              <div className='flex-1 px-4 py-8 space-y-4 sm:p-8 bg-[#ecfdf5]'>
                <div className='w-full h-6 rounded bg-[#d1fae5]'></div>
                <div className='w-full h-6 rounded bg-[#d1fae5]'></div>
                <div className='w-3/4 h-6 rounded bg-[#d1fae5]'></div>
              </div>
            </div>
            <div className='flex flex-col m-8 rounded-lg shadow-sm w-full animate-pulse h-96'>
              <div className='h-48 rounded-t bg-[#d1fae5]'></div>
              <div className='flex-1 px-4 py-8 space-y-4 sm:p-8 bg-[#ecfdf5]'>
                <div className='w-full h-6 rounded bg-[#d1fae5]'></div>
                <div className='w-full h-6 rounded bg-[#d1fae5]'></div>
                <div className='w-3/4 h-6 rounded bg-[#d1fae5]'></div>
              </div>
            </div>
          </>
        ) : (
          products?.map((product) => (
            <div
              className='flex flex-col md:flex-row gap-11 py-10 px-5 bg-white rounded-md shadow-lg  border-2'
              key={product?.id}
            >
              <div className='text-indigo-500 flex flex-col justify-between'>
                <img
                  className='lg:w-[800px] lg:h-[250px]'
                  src={`${apiUrl}/` + product?.image}
                  alt=''
                />
              </div>
              <div className='text-indigo-500'>
                <small className='uppercase text-[#1bb57b] text-lg'>
                  {product?.name}
                </small>
                <h3 className=' text-[#124265] text-2xl font-semibold mt-3 mb-3'>
                  {product?.title}
                </h3>
                <small className='text-gray-500 text-justify text-sm'>
                  {product?.description?.length > 10 ? (
                    product?.description?.slice(0, 268) + '.....'
                  ) : (
                    <p>not found</p>
                  )}
                </small>

                <div className='flex gap-0.5 mt-4'>
                  <Link to={`/product/${product?.id}`}>
                    <button
                      id='addToCartButton'
                      className='custom-button rounded-md focus:outline-none transition text-white px-6 py-[10px] flex items-center gap-2'
                    >
                      Explore Now
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        className='bi bi-arrow-right'
                        viewBox='0 0 16 16'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8'
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default ProductList;
