import axios from 'axios';
import Lottie from 'lottie-react';
import React from 'react';
import { toast } from 'react-toastify';
import animationContact from '../../../../Images/contact.json';
import './ContactFrom.css';

import { apiUrl } from '../../../../config/config';

const ContactFrom = ({ title, subTitle }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = form.username.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const subject = form.subject.value;
    const message = form.message.value;

    try {
      const response = await axios.post(
        `${apiUrl}/api/v1/message/store?name=${userName}&phone=${phone}&email=${email}&subject=${subject}&details=${message}`
      );
      toast.success('যোগাযোগ করা জন্য ধন্যবাদ !', {
        autoClose: 2000,
      });
      form.reset();
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('আপনি আবার চেষ্টা করেন  !', {
        autoClose: 3000,
      });
    }
  };

  return (
    <section className='bg-white contact-from'>
      <div className='container p-6 mx-auto'>
        <div className='section-header'>
          <h4>{subTitle}</h4>
          <h2 className='title-gradient'>{title}</h2>
        </div>
        <div className='lg:flex items-center'>
          <div className='lg:w-1/2'>
            <Lottie
              className='sm:w-full lg:w-[500px]'
              animationData={animationContact}
            ></Lottie>
          </div>

          <div className='mt-8 lg:w-1/2 lg:mt-0'>
            <form
              onSubmit={handleSubmit}
              className='container flex flex-col mx-auto space-y-12'
            >
              <fieldset className='grid grid-cols-6 gap-6 '>
                <div className='grid grid-cols-6 gap-4 col-span-full lg:col-span-12'>
                  <div className='col-span-full sm:col-span-3'>
                    <input
                      id='username'
                      type='text'
                      name='username'
                      placeholder='ব্যবহারকারীর নাম'
                      className='w-full input-from-contorl p-3 rounded-md bg-white text-black'
                      required
                    />
                  </div>
                  <div className='col-span-full sm:col-span-3'>
                    <input
                      id='email'
                      type='email'
                      name='email'
                      placeholder='ইমেইল'
                      className='w-full p-3 rounded-md input-from-contorl  text-gray-900'
                      required
                    />
                  </div>
                  <div className='col-span-full sm:col-span-3'>
                    <input
                      id='phone'
                      type='text'
                      name='phone'
                      placeholder='তোমার নাম্বার'
                      className='w-full p-3 rounded-md input-from-contorl text-gray-900'
                      required
                    />
                  </div>
                  <div className='col-span-full sm:col-span-3'>
                    <input
                      id='subject'
                      type='text'
                      name='subject'
                      placeholder='বিষয়'
                      className='w-full p-3 rounded-md input-from-contorl text-gray-900'
                      required
                    />
                  </div>
                  <div className='col-span-full'>
                    <textarea
                      id='bio'
                      cols='10'
                      rows='4'
                      name='message'
                      placeholder='আপনার মেসেজেস'
                      className='w-full p-3 rounded-md input-from-contorl text-gray-900'
                      required
                    ></textarea>
                  </div>
                  <div className='col-span-full'>
                    <div className='flex items-center gap-3'>
                      <span>
                        <input
                          type='checkbox'
                          name='teramAndCondition'
                          id=''
                          required
                        />
                      </span>
                      <p className='text-gray-400'>
                        I agree to the terms of data processing.{' '}
                        <a className='text-[#1bb57b] font-medium' href='/terms'>
                          Terms and Conditions
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className='col-span-full'>
                    <div className='text-center'>
                      <button
                        type='submit'
                        className='w-full px-8 py-3 font-semibold rounded-md custom-button text-white'
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
  );
};

export default ContactFrom;
