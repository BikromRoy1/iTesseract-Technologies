import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://itesseract.com.bd/master/api/v1/products'
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const products = data.data;

  return (
    <section className='container px-6 mx-auto pb-14 pt-14'>
      <div className='text-center pb-10'>
        <p className='text-lg text-[#1bb57b] uppercase'>আমাদের প্রোডাক্টস</p>

        <Link
          to='/'
          className='block mt-4 text-2xl font-semibold text-[#124265] hover:underline '
        >
          যেকোনো বিষয়ে যেকোনো কিছু শিখতে চলে যাও তোমার পছন্দের প্রোডাক্টস
        </Link>
      </div>
      <div className='grid grid-cols-1 gap-5  md:grid-cols-1 xl:grid-cols-2'>
        {products?.map((product) => (
          <div
            className='flex flex-col md:flex-row gap-11 py-10 px-5 bg-white rounded-md shadow-lg  border-2'
            key={product?.id}
          >
            <div className='text-indigo-500 flex flex-col justify-between'>
              <img
                className='lg:w-[800px] lg:h-[250px]'
                src={`https://itesseract.com.bd/master/` + product?.image}
                alt=''
              />
            </div>
            <div className='text-indigo-500'>
              <small className='uppercase text-[#1bb57b] text-lg'>
                {product?.name}
              </small>
              <h3 className=' text-[#124265] text-2xl font-semibold mt-3 mb-3 hover:underline cursor-pointer'>
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
                    className='bg-[#1bb57b] hover:bg-[#1bb57b] focus:outline-none transition text-white uppercase px-8 py-3'
                  >
                    Explore Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
