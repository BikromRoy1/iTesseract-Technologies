import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Breadcrumb from '../../../Breadcrumb/Breadcrumb';
import ProductBanner from '../../../../Images/prouct-page.jpg';
import ContactFrom from '../../ContactUS/ContactFrom/ContactFrom';

const ProductDetails = () => {
  const product = useLoaderData();
  const singleProduct = product.data;
  console.log(singleProduct);
  return (
    <section>
      <Breadcrumb
        title='প্রোডাক্টস বিস্তারিত'
        subTitle='আমাদের প্রোডাক্টস'
        slgs='/product'
        img={ProductBanner}
      ></Breadcrumb>
      <div className='container mx-auto mt-10 mb-10 '>
        <div className='text-center  pb-10'>
          <h1 className='text-[#ffc107] font-semibold  md:text-4xl text-3xl'>
            {singleProduct?.name}
          </h1>
        </div>
        <div className='flex flex-col md:flex-row gap-11 py-10 px-5 bg-white rounded-md border-[#1bb57b]  border-2'>
          <div className='text-indigo-500 flex flex-col justify-between'>
            <img
              className=''
              src={`https://itesseract.com.bd/master/` + singleProduct?.image}
              alt={singleProduct?.name}
            />
          </div>
          <div className='text-indigo-500'>
            <small className='uppercase text-[#1bb57b] text-lg'>
              {singleProduct?.name}
            </small>
            <h3 className=' text-[#124265] text-2xl font-semibold mt-3 mb-3 hover:underline cursor-pointer'>
              {singleProduct?.title}
            </h3>
            <small className='text-gray-500 text-justify text-sm'>
              {singleProduct.description}
            </small>
          </div>
        </div>
      </div>
      <ContactFrom title='প্রোডাক্টস সম্পর্কিত যেকোনো তথ্যের জন্য যোগাযোগ করুন'></ContactFrom>
    </section>
  );
};

export default ProductDetails;
