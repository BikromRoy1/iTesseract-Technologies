import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BiEnvelope, BiMapAlt } from 'react-icons/bi';
import { FaPhoneAlt } from 'react-icons/fa';
import './Contactinfo.css';

const Contactinfo = ({ title, details, subTitle }) => {
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
    <section className='bg-gray-100 contact-info'>
      <div className='container p-6  mx-auto'>
        <div className='section-header'>
          <h4>{subTitle}</h4>
          <h2 className='title-gradient'>{title}</h2>
          <p>{details}</p>
        </div>
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
              <FaPhoneAlt className='' size='24px' color='#ffc107'></FaPhoneAlt>
            </div>
            <h3>আমাদের কল করুন</h3>
            <p className='text-base font-medium'>{contact?.data?.phone}</p>
          </div>
          <div class='info-item  flex flex-col justify-center items-center'>
            <div className='contact-icons'>
              <BiEnvelope className='' size='24px' color='#ffc107'></BiEnvelope>
            </div>
            <h3>আমাদেরকে ইমেইল করুন</h3>
            <p className='text-base font-medium'>{contact?.data?.email}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactinfo;
