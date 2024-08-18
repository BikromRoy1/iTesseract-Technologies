import React, { useEffect } from 'react';
import '../../css/Root.css';
import axios from 'axios';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import ContactModel from '../../ContactModel/ContactModel';
import { useState } from 'react';

import { apiUrl } from '../../../config/config';

const TopHeader = () => {
  const [socials, setSocials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/v1/social-info`);
        setSocials(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const socialLinks = socials.data;


  return (
    <div>
      <div className='theme-primary-color-bg py-2'>
        <div className='container px-6 mx-auto'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={socialLinks?.facebook}
              >
                <FaFacebook
                  className='cursor-pointer'
                  size='18'
                  color='#ffffff'
                ></FaFacebook>
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={socialLinks?.twitter}
              >
                <FaTwitter
                  className='cursor-pointer'
                  size='18'
                  color='#ffffff'
                ></FaTwitter>
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={socialLinks?.instagram}
              >
                <FaInstagram
                  className='cursor-pointer'
                  size='18'
                  color='#ffffff'
                ></FaInstagram>
              </a>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={socialLinks?.linkedin}
              >
                <FaLinkedin
                  className='cursor-pointer'
                  size='18'
                  color='#ffffff'
                ></FaLinkedin>
              </a>
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
