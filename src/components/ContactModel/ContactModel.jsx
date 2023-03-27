import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { HiPhoneIncoming } from 'react-icons/hi';
import { FcAssistant, FcFactory } from 'react-icons/fc';
import { BiMailSend } from 'react-icons/bi';

const ContactModel = () => {
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
                <b>+8801550704720</b>
              </p>
            </div>
            <div className='flex items-center gap-3 mb-1'>
              <FaWhatsapp className='text-[#1bb57b]'></FaWhatsapp>
              <p className=' text-gray-500'>+88013********</p>
            </div>
            <div className='flex items-center gap-3 mb-1'>
              <BiMailSend className='text-[#1bb57b]'></BiMailSend>
              <p className=' text-gray-500'>
                <b>contact@itesseract.co</b>
              </p>
            </div>
            <div className='flex items-center gap-3 mb-1'>
              <FcFactory className='text-[#1bb57b]'></FcFactory>
              <p className=' text-gray-500 font-normal text-sm'>
                <b>151/7(5ম তলা)</b>, গুড লাক সেন্টার, গ্রীন রোড,{' '}
                <b>ঢাকা 1205</b>
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
