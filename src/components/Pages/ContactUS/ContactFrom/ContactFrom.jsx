import React from 'react';
import contactAnimation from '../../../../Images/contact.gif';
import './ContactFrom.css';

const ContactFrom = ({ title }) => {
  return (
    <div className='bg-white'>
      <div className='text-center pt-10'>
        <h1 className='text-[#1bb57b] font-semibold  md:text-4xl text-3xl'>
          {title}
        </h1>
      </div>
      <section class='bg-white'>
        <div class='container px-6 py-10 mx-auto lg:py-2'>
          <div class='lg:flex items-center'>
            <div class='lg:w-1/2'>
              <img
                loading='lazy'
                className='sm:w-full lg:w-[500px]'
                src={contactAnimation}
                alt='contact-animation'
              />
            </div>

            <div class='mt-8 lg:w-1/2 lg:mt-0'>
              <form className='container flex flex-col mx-auto space-y-12'>
                <fieldset className='grid grid-cols-6 gap-6 '>
                  <div className='grid grid-cols-6 gap-4 col-span-full lg:col-span-12'>
                    <div className='col-span-full sm:col-span-3'>
                      <input
                        id='username'
                        type='text'
                        placeholder='ব্যবহারকারীর নাম'
                        className='w-full input-from-contorl p-3 rounded-md bg-white text-black'
                        required
                      />
                    </div>
                    <div className='col-span-full sm:col-span-3'>
                      <input
                        id='email'
                        type='email'
                        placeholder='ইমেইল'
                        className='w-full p-3 rounded-md input-from-contorl  text-gray-900'
                      />
                    </div>
                    <div className='col-span-full sm:col-span-3'>
                      <input
                        id='phone'
                        type='text'
                        placeholder='তোমার নাম্বার'
                        className='w-full p-3 rounded-md input-from-contorl text-gray-900'
                      />
                    </div>
                    <div className='col-span-full sm:col-span-3'>
                      <input
                        id='subject'
                        type='text'
                        placeholder='বিষয়'
                        className='w-full p-3 rounded-md input-from-contorl text-gray-900'
                      />
                    </div>
                    <div className='col-span-full'>
                      <textarea
                        id='bio'
                        cols='10'
                        rows='4'
                        placeholder='আপনার মেসেজেস'
                        className='w-full p-3 rounded-md input-from-contorl text-gray-900'
                      ></textarea>
                    </div>
                    <div className='col-span-full'>
                      <div className='flex items-center gap-3'>
                        <span>
                          <input
                            type='checkbox'
                            name='teramAndCondition'
                            id=''
                          />
                        </span>
                        <p className='text-gray-400'>
                          I agree to the terms of data processing.{' '}
                          <a
                            className='text-[#1bb57b] font-medium'
                            href='https://google.com'
                          >
                            Terms and Conditions
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className='col-span-full'>
                      <div className='text-center'>
                        <button
                          type='button'
                          className='w-full px-8 py-3 font-semibold rounded-md dark:bg-[#1bb57b] dark:text-white'
                        >
                          Send A Message
                        </button>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactFrom;
