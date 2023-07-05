import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FcAssistant, FcFactory } from 'react-icons/fc';
import { BiMailSend } from 'react-icons/bi';

const ContactModel = () => {
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
    <div>
      <input type='checkbox' id='my-modal-3' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box relative'>
          <label
            htmlFor='my-modal-3'
            className='btn btn-sm btn-circle border-0 bg-[#f5c310] absolute right-2 top-2'
          >
            ✕
          </label>
          <h3 className='text-lg font-bold'>
            আমাদের সাথে <span className='text-[#1bb57b]'>যোগাযোগ</span>
          </h3>
          <hr />
          <p className='py-3 font-normal text-sm text-gray-500'>
            আমাদের সাথে সরাসরি যোগাযোগ করতে নিচের যেকোন মাধ্যম ব্যবহার করতে
            পারেন।
          </p>

          <div>
            <div className='flex items-center gap-3 mb-1'>
              <FcAssistant className='text-[#1bb57b]'></FcAssistant>
              <p className=' text-gray-500'>
                <b>{contact?.data?.phone}</b>
              </p>
            </div>
            <div className='flex items-center gap-3 mb-1'>
              <FaWhatsapp className='text-[#1bb57b]'></FaWhatsapp>
              <p className=' text-gray-500'>{contact?.data?.phone}</p>
            </div>
            <div className='flex items-center gap-3 mb-1'>
              <BiMailSend className='text-[#1bb57b]'></BiMailSend>
              <p className=' text-gray-500'>
                <b>{contact?.data?.email}</b>
              </p>
            </div>
            <div className='flex items-center gap-3 mb-1'>
              <FcFactory className='text-[#1bb57b]'></FcFactory>
              <p className=' text-gray-500 font-normal text-sm'>
                <b> {contact?.data?.address}</b>
              </p>
            </div>
            <div className=' mb-1 mt-4'>
              <p className=' text-gray-700 font-medium text-base'>
                যোগাযোগের সময় <b>- সকাল 10 টা</b> থেকে <b>রাত 10 টা.</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModel;
