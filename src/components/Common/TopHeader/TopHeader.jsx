import React from 'react';
import '../../css/Root.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import ContactModel from '../../ContactModel/ContactModel';

const TopHeader = () => {
  return (
    <div>
      <div className='theme-primary-color-bg py-2'>
        <div className='container px-6 mx-auto'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <a target='_blank' href='https://www.facebook.com/itesseractltd'>
                <FaFacebook
                  className='cursor-pointer'
                  size='18'
                  color='#ffffff'
                ></FaFacebook>
              </a>
              <a target='_blank' href='https://twitter.com/itesseractltd'>
                <FaTwitter
                  className='cursor-pointer'
                  size='18'
                  color='#ffffff'
                ></FaTwitter>
              </a>
              <a
                target='_blank'
                href='https://www.instagram.com/itesseractltd/'
              >
                <FaInstagram
                  className='cursor-pointer'
                  size='18'
                  color='#ffffff'
                ></FaInstagram>
              </a>
              <FaLinkedin
                className='cursor-pointer'
                size='18'
                color='#ffffff'
              ></FaLinkedin>
            </div>
            <div className='flex items-center flex-wrap gap-3'>
              <p className='text-font hidden md:block text-white'>
                ডেমো ক্লাসের জন্য বুক করুন!
              </p>
              <label
                htmlFor='my-modal-3'
                className='theme-secondary-color-bg cursor-pointer px-4 py-1 text-sm rounded-full'
              >
                যোগাযোগ করুন
              </label>
            </div>
          </div>
        </div>
      </div>
      <ContactModel></ContactModel>
    </div>
  );
};

export default TopHeader;
