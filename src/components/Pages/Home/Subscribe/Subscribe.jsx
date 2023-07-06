import { data } from 'autoprefixer';
import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const Subscribe = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;

    try {
      const response = await axios.post(
        `https://itesseract.com.bd/master/api/v1/subscriber/store?email=${email}`
      );
      console.log(response.data);
      toast.success('ধন্যবাদ আমাদের সদস্য হওয়ার জন্য !', {
        autoClose: 2000,
      });
      form.reset();
    } catch (error) {
      console.error('Error fetching data:', error);
      form.reset();
      toast.warning('আপনি আমাদের অলরেডি সদস্য হিসেবে আছেন !', {
        autoClose: 2000,
      });
    }
  };

  return (
    <section className='bg-gray-50'>
      <div className='p-8 md:p-12 lg:px-16 lg:py-20'>
        <div className='mx-auto max-w-lg text-center'>
          <h2 className='text-2xl font-bold text-gray-900 md:text-3xl'>
            সর্বশেষ নিউজ & আপডেট পেতে আমাদের নোটিফিকেশনে সাবস্ক্রাইব করুন।
          </h2>
        </div>

        <div className='mx-auto mt-8 max-w-xl'>
          <form onSubmit={handleSubmit} className='sm:flex sm:gap-4'>
            <div className='sm:flex-1'>
              <label htmlFor='email' className='sr-only'>
                Email
              </label>

              <input
                name='email'
                type='email'
                required
                placeholder='Email address'
                className='w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400'
              />
            </div>

            <button
              type='submit'
              className='group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-[#1bb57b] px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto'
            >
              <span className='text-sm font-medium'> সাবস্ক্রাইব </span>

              <svg
                className='h-5 w-5'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M17 8l4 4m0 0l-4 4m4-4H3'
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
