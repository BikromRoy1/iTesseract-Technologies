import React, { useEffect, useState } from 'react';
import Title from '../../../Common/Title/Title';
import Services from '../Services/Services';
import './Kits.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Kits = () => {
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
    <section className=''>
      <div className='container px-6 py-10 mx-auto'>
        <Title
          title='প্রশিক্ষণের নিজস্ব'
          text='রোবটিক্স টুলস
'
          details='বাংলাদেশে প্রথম আমরাই তিনটি ধাপে নিজস্ব রোবটিক্স টুলস দিয়ে প্রশিক্ষণ দিচ্ছে আইটেসারেক্ট
।'
        ></Title>

        <div className='grid  grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
          {products?.map((product) => (
            <div
              className='flex flex-col kits-box items-center  text-center bg-gray-100 rounded-lg'
              key={product?.id}
            >
              <img
                loading='lazy'
                className=' object-scale-down rounded-tr-lg rounded-tl-lg w-full h-56 pt-4'
                src={`https://itesseract.com.bd/master/` + product?.image}
                alt={product?.name}
              ></img>
              <div className='p-6'>
                <h1 className=' font-semibold text-[#124265] capitalize kits-title'>
                  {product?.name}
                </h1>

                <p className='kits-details'>
                  {' '}
                  {product?.description?.length > 10 ? (
                    product?.description?.slice(0, 182) + '.....'
                  ) : (
                    <p>not found</p>
                  )}
                </p>
                <Link to={`/${product?.id}`}>
                  <button className='theme-primary-color-bg px-4 py-1 mt-2 text-white rounded-md'>
                    এখান থেকে শিখুন
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Services></Services>
    </section>
  );
};

export default Kits;
