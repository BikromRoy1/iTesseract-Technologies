import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import './Contactinfo.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { BiMapAlt, BiEnvelope } from 'react-icons/bi';

const Contactinfo = ({ title, details }) => {
  
  const [contact, setContact] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://itesseract.com.bd/master/api/v1/contact-info'
        );
        setContact(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='bg-gray-100'>
      <div className='text-center pt-12'>
        <h1 className='text-[#1bb57b] font-semibold mb-4 md:text-4xl text-3xl'>
          {title}
        </h1>
        <p className='text-gray-400'>{details}</p>
      </div>
      <section className=''>
        <div className='container px-6 py-12 mx-auto'>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            <div class='info-item  flex flex-col justify-center items-center'>
              <div className='contact-icons'>
                <BiMapAlt className='' size='24px' color='#ffc107'></BiMapAlt>
              </div>
              <h3>আমাদের ঠিকানা</h3>
              <p className='text-base font-medium'>{contact?.data?.address}</p>
            </div>
            <div class='info-item  flex flex-col justify-center items-center'>
              <div className='contact-icons'>
                <FaPhoneAlt
                  className=''
                  size='24px'
                  color='#ffc107'
                ></FaPhoneAlt>
              </div>
              <h3>আমাদের কল করুন</h3>
              <p className='text-base font-medium'>{contact?.data?.phone}</p>
            </div>
            <div class='info-item  flex flex-col justify-center items-center'>
              <div className='contact-icons'>
                <BiEnvelope
                  className=''
                  size='24px'
                  color='#ffc107'
                ></BiEnvelope>
              </div>
              <h3>আমাদেরকে ইমেইল করুন</h3>
              <p className='text-base font-medium'>{contact?.data?.email}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactinfo;
