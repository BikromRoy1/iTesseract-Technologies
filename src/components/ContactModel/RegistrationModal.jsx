import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { apiUrl } from '../../config/config';

const RegistrationModal = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/v1/courses`);
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
    const studentClassName = form.StudentClassName.value;
    const courseTimings = form.courseTime.value;
    const studentSchoolName = form.studentSchoolName.value;

    // Correctly capture the checkbox state
    const checked = form.marketing_accept.checked;
    // Convert checked state to 'yes' or 'no'
    const marketingAccept = checked ? 'Yes' : 'No';

    try {
      const response = await axios?.post(
        `${apiUrl}/api/v1/enroll/store?name=${studentName}&phone=${studentPhone}&email=${studentEmail}&address=${studentAddress}&course_id=${courseName}&school=${studentSchoolName}&class=${studentClassName}&time=${courseTimings}&weekend_agreement=${marketingAccept}`
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
      <input type='checkbox' id='my-modal-4' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box relative'>
          <label
            htmlFor='my-modal-4'
            className='btn btn-sm btn-circle border-0 bg-[#f5c310] absolute right-2 top-2'
          >
            ✕
          </label>
          <h3 className='text-lg font-bold'>
            শিক্ষার্থীর ভর্তির জন্য{' '}
            <span className='text-[#1bb57b]'> আবেদনপত্র</span>
          </h3>
          <hr />
          <p className='py-3 font-normal text-sm text-gray-500'>
            আমাদের সাথে সরাসরি যোগাযোগ করতে নিচের ফর্ম ফিল আপ করতে পারেন।।
          </p>

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
                      className='w-full input-from-contorl px-3 py-2 text-base rounded-md bg-white text-black '
                      required
                    />
                  </div>

                  <div className='col-span-full sm:col-span-3'>
                    <input
                      id='StudentClassName'
                      type='text'
                      name='StudentClassName'
                      placeholder='ক্লাস  নাম '
                      className='w-full input-from-contorl px-3 py-2 text-base rounded-md bg-white text-black'
                      required
                    />
                  </div>
                  <div className='col-span-full sm:col-span-3'>
                    <input
                      id='email'
                      type='email'
                      name='email'
                      placeholder='শিক্ষার্থীর ইমেইল'
                      className='w-full px-3 py-2 text-base rounded-md input-from-contorl  text-gray-900'
                      required
                    />
                  </div>
                  <div className='col-span-full sm:col-span-3'>
                    <input
                      id='phone'
                      type='text'
                      name='phone'
                      placeholder='শিক্ষার্থীর নাম্বার'
                      className='w-full px-3 py-2 text-base rounded-md input-from-contorl text-gray-900'
                      required
                    />
                  </div>
                  <div className='col-span-full sm:col-span-3'>
                    <select
                      name='courseOption'
                      id='courseOption'
                      className='w-full p-[9px] rounded-md input-from-contorl text-gray-900'
                      required
                    >
                      {courses?.map((course) => (
                        <option key={course?.id} value={course?.id}>
                          {`${course?.course_name}`}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className='col-span-full sm:col-span-3'>
                    <select
                      name='courseTime'
                      id='courseTime'
                      className='w-full p-[9px] rounded-md input-from-contorl text-gray-900'
                      required
                    >
                      <option disabled value=''>
                        সিলেক্ট ক্লাস সময়
                      </option>
                      <option value='09 AM - 01 PM'> 09 AM - 01 PM</option>
                      <option value='03 PM - 06 PM'> 03 PM - 06 PM</option>
                      <option value='06 PM - 09 PM'> 06 PM - 09 PM</option>
                    </select>
                  </div>
                  <div className='col-span-full'>
                    <input
                      id='studentSchoolName'
                      type='text'
                      name='studentSchoolName'
                      placeholder='স্কুলের নাম'
                      className='w-full input-from-contorl px-3 py-2 text-base rounded-md bg-white text-black'
                      required
                    />
                  </div>
                  <div className='col-span-full'>
                    <textarea
                      id='address'
                      cols='10'
                      rows='2'
                      name='address'
                      placeholder='শিক্ষার্থীর ঠিকানা'
                      className='w-full p-3 rounded-md input-from-contorl text-gray-900'
                      required
                    ></textarea>
                  </div>

                  <div className='col-span-6'>
                    <label htmlFor='MarketingAccept' className='flex gap-3'>
                      <input
                        type='checkbox'
                        id='MarketingAccept'
                        name='marketing_accept'
                        className='size-5 rounded-md border-gray-400 bg-white text-[#1bb57b] focus:ring-[#1bb57b] focus:border-[#1bb57b] hover:border-[#1bb57b] checked:bg-[#1bb57b] checked:border-[#1bb57b] shadow-sm'
                      />

                      <span className='text-gray-400 cursor-pointer'>
                        ক্লাসে জয়েন করতে পারবেন?{' '}
                        <span className='text-[#1bb57b] font-medium'>
                          (শুক্র / শনি)
                        </span>
                      </span>
                    </label>
                  </div>

                  <div className='col-span-full'>
                    <div className='text-center'>
                      <button
                        type='submit'
                        className='w-full px-8 py-3 font-semibold rounded-md custom-button text-white'
                      >
                        সাবমিট শিক্ষার্থীর ইনফরমেশন{' '}
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

export default RegistrationModal;