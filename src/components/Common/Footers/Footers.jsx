import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import call from '../../../Images/icons/customer-service.png';
import email from '../../../Images/icons/email.png';
import timeTabel from '../../../Images/icons/timetable.png';
import logo from '../../../Images/main-logo.svg';
import './Footer.css';

import { apiUrl } from '../../../config/config';

const Footers = () => {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/v1/contact-info`);
        setContact(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  // Get the Current Year
  function getCurrentYear() {
    return new Date().getFullYear();
  }

  return (
    <section>
      <footer className='p-6  dark:text-gray-100 footer-area'>
        <div className='container grid grid-cols-1 mx-auto gap-x-3 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          <div className='flex flex-col space-y-4'>
            <Link
              to='/'
              aria-label=' iTesser-act'
              title=' iTesser-act'
              className='inline-flex items-center'
            >
              <img className='w-48' src={logo} alt='logo' />
            </Link>
            <div className='flex flex-col text-sm dark:text-gray-400'>
              <div className='mb-2'>
                <Link to=''>
                  <div className='flex items-center gap-2'>
                    <p className=' text-[#124265] font-bold'>আমাদের ঠিকানাঃ</p>
                  </div>
                </Link>
                <p className='text-font text-sm footer-color2 font-semibold'>
                  {contact?.data?.address}
                </p>
              </div>
              <Link className='mb-2' to=''>
                <div className='flex items-center gap-2'>
                  <div className='call-image'>
                    <img src={call} alt='call' />
                  </div>
                  <p className='text-base footer-color2 font-semibold'>
                    <a href={`tel:${contact?.data?.phone}`}>
                      <b>Phone: </b> {contact?.data?.phone}
                    </a>
                  </p>
                </div>
              </Link>
              <Link className='mb-2' to=''>
                <div className='flex items-center gap-2'>
                  <div className='call-image'>
                    <img src={timeTabel} alt='timetable' />
                  </div>
                  <p className='text-base footer-color2 font-semibold'>
                    <b>Response hours:</b> 24/7
                  </p>
                </div>
              </Link>
              <Link to=''>
                <div className='flex items-center gap-2'>
                  <div className='call-image'>
                    <img src={email} alt='email' />
                  </div>
                  <p className='text-base footer-color2 font-semibold'>
                    <b>Email:</b> {contact?.data?.email}
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className='flex flex-col space-y-4'>
            <h2 className='text-base font-semibold md:text-xl md:font-bold text-base font-semibold md:text-xl md:font-bold footer-color'>
              কোম্পানি পণ্য
            </h2>
            <div className='flex flex-col space-y-2 footer-color2 text-sm font-semibold'>
              <h2>
                <Link to='/product'>~ স্কুলের জন্য রোবোটিক্স টুল</Link>
              </h2>
              <h2>
                <Link to='/product'>~ বিশ্ববিদ্যালয়ের জন্য রোবোটিক্স টুল</Link>
              </h2>
              <h2>
                <Link to='/product'> ~ ব্যক্তির জন্য রোবোটিক্স টুল</Link>
              </h2>
              <h2>
                <Link to='/product'> ~ রিসোর্সেস & কারিকুলাম</Link>
              </h2>
            </div>
          </div>
          <div className='flex flex-col space-y-4'>
            <h2 className=' text-base font-semibold md:text-xl md:font-bold text-base font-semibold md:text-xl md:font-bold footer-color'>
              কোম্পানি
            </h2>
            <div className='flex flex-col space-y-2 text-sm footer-color2 font-semibold'>
              <h2>
                <Link to='/about'>~ আমাদের সম্পর্কে</Link>
              </h2>
              <h2>
                <Link to='/team'>~ টিম</Link>
              </h2>
              <h2>
                <Link to='/'>~ কমিউনিটি পার্টনার</Link>
              </h2>
            </div>
          </div>
          <div className='flex flex-col space-y-4'>
            <h2 className=' text-base font-semibold md:text-xl md:font-bold text-base font-semibold md:text-xl md:font-bold footer-color'>
              শর্তাবলী
            </h2>
            <div className='flex flex-col space-y-2 text-sm footer-color2 font-semibold'>
              <h2>
                <Link to='/terms'>~ টার্মস & কন্ডিশনস - ব্যবহারকারী</Link>
              </h2>
              <h2>
                <Link to='/policy'>~ প্রাইভেসী পলিসি - ব্যবহারকারী</Link>
              </h2>
            </div>
          </div>
        </div>
      </footer>
      <div className='flex items-center justify-center py-4 text-sm theme-primary-color-bg'>
        <span className='text-white font-medium text-lg'>
          কপিরাইট © {getCurrentYear()} আইটেসারেক্ট টেকনোলিজস। সর্বস্বত্ব
          সংরক্ষিত।
        </span>
      </div>
    </section>
  );
};

export default Footers;
