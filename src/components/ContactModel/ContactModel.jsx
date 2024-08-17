import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ContactModel = () => {
  // const [contact, setContact] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         'https://itesseract.com.bd/master/api/v1/contact-info'
  //       );
  //       setContact(response.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://itesseract.com.bd/main/api/v1/courses'
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const courses = data.data;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const studentName = form.studentname.value;
    const studentEmail = form.email.value;
    const studentPhone = form.phone.value;
    const studentAddress = form.address.value;
    const courseName = form.courseOption.value;

    try {
      const response = await axios.post(
        `https://itesseract.com.bd/main/api/v1/enroll/store?name=${studentName}&phone=${studentPhone}&email=${studentEmail}&address=${studentAddress}&course_id=${courseName}&level=`
      );
      toast.success(' ভর্তির  আবেদন জন্য ধন্যবাদ !', {
        autoClose: 2000,
      });
      form.reset();
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.warning('আপনি একবার নিবন্ধন করে ফেলেছেন  !', {
        autoClose: 3000,
      });
    }
  };

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
            আমাদের সাথে সরাসরি যোগাযোগ করতে নিচের ফর্ম ফিল আপ করতে পারেন।।
          </p>

          {/* <div>
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
          </div> */}

          <div>
            <form
              onSubmit={handleSubmit}
              className='container flex flex-col mx-auto space-y-12'
            >
              <fieldset className='grid grid-cols-6 gap-6 '>
                <div className='grid grid-cols-6 gap-4 col-span-full lg:col-span-12'>
                  <div className='col-span-full sm:col-span-3'>
                    <input
                      id='studentname'
                      type='text'
                      name='studentname'
                      placeholder='শিক্ষার্থীর নাম'
                      className='w-full input-from-contorl px-3 py-2 rounded-md bg-white text-black'
                      required
                    />
                  </div>
                  <div className='col-span-full sm:col-span-3'>
                    <input
                      id='email'
                      type='email'
                      name='email'
                      placeholder='শিক্ষার্থীর ইমেইল'
                      className='w-full px-3 py-2 rounded-md input-from-contorl  text-gray-900'
                      required
                    />
                  </div>
                  <div className='col-span-full sm:col-span-3'>
                    <input
                      id='phone'
                      type='text'
                      name='phone'
                      placeholder='শিক্ষার্থীর নাম্বার'
                      className='w-full px-3 py-2 rounded-md input-from-contorl text-gray-900'
                      required
                    />
                  </div>
                  <div className='col-span-full sm:col-span-3'>
                    <select
                      name='courseOption'
                      id='courseOption'
                      className='w-full px-3 py-[6px] rounded-md input-from-contorl text-gray-900'
                      required
                    >
                      {courses?.map((course) => (
                        <option
                          className='text-xs'
                          key={course?.id}
                          value={course?.id}
                        >
                          {`${course?.course_name}`}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className='col-span-full'>
                    <textarea
                      id='address'
                      cols='10'
                      rows='3'
                      name='address'
                      placeholder='শিক্ষার্থীর এড্রেস'
                      className='w-full p-3 rounded-md input-from-contorl text-gray-900'
                      required
                    ></textarea>
                  </div>

                  <div className='col-span-full'>
                    <div className='text-center'>
                      <button
                        type='submit'
                        className='w-full px-8 py-3 font-semibold rounded-md custom-button text-white'
                      >
                        সাবমিট ইনফরমেশন{' '}
                      </button>
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModel;
