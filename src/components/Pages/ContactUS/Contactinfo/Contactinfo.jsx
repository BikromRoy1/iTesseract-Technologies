import React from 'react';
import './Contactinfo.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { BiMapAlt, BiEnvelope } from 'react-icons/bi';

const Contactinfo = ({ title, details, address, phone, email }) => {
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
              <p>
                151/7, গুড লাক সেন্টার (৫ম) তলা, গ্রীণ রোড়, পান্থপথ সিগন্যাল{' '}
                <br />
                (হামদর্দ কলেজের পাশের বিল্ডিং) ঢাকা - 1205
              </p>
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
              <p>+8801550704720</p>
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
              <p>contact@itesseract.co</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactinfo;
