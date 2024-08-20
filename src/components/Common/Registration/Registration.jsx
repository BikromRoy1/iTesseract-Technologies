import axios from 'axios';
import Lottie from 'lottie-react';
import React, { useEffect, useState } from 'react';
import animationContact from '../../../Images/contact.json';
import Registrationbanner from '../../../Images/registion.jpg';
import Breadcrumb from '../../Breadcrumb/Breadcrumb';

import { apiUrl } from '../../../config/config';
import { toast } from 'react-toastify';

const Registration = () => {
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


    try {
      const response = await axios.post(
        `${apiUrl}/api/v1/enroll/store?name=${studentName}&phone=${studentPhone}&email=${studentEmail}&address=${studentAddress}&course_id=${courseName}&level=`
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
      <Breadcrumb
        title='নিবন্ধন ফর্ম'
        subTitle='নিবন্ধন ফর্ম'
        img={Registrationbanner}
        slgs='/registration'
      ></Breadcrumb>
      <section className='bg-white pt-[50px]'>
        <div className='container px-6 py-10 mx-auto lg:py-2'>
          <div className='section-header'>
            <h2>
              শিক্ষার্থীর ভর্তির{' '}
              <span className='title-gradient'>জন্য আবেদনপত্র</span>
            </h2>
            <p>
              আইটেসারেক্ট টেকনোলিজস হল একটি উদ্ভাবনী কেন্দ্র যা শিক্ষা ক্ষেত্রে
              চতুর্থ শিল্প বিপ্লবকে ত্বরান্বিত করার উপর দৃষ্টি নিবদ্ধ করে।
              প্রযুক্তির লেন্সের মাধ্যমে, আইটেসারেক্ট বিশ্বকে উন্নত করার জন্য
              সাধারণ চ্যালেঞ্জগুলির উত্তর কল্পনা করে এবং তৈরি করে। আইটেসারেক্ট
              অত্যাধুনিক প্রযুক্তি ব্যবহারের মাধ্যমে সামাজিক জীবনকে প্রভাবিত এবং
              ক্ষমতায়নের আদর্শের উপর দৃষ্টি নিবদ্ধ করে।
            </p>
          </div>
          <div className='lg:flex items-center'>
            <div className='lg:w-1/2 pb-4'>
              <Lottie
                className='sm:w-full lg:w-[500px]'
                animationData={animationContact}
              ></Lottie>
            </div>

            <div className='mt-8 lg:w-1/2 lg:mt-0 pb-12'>
              <h3 className='block mt-4 text-2xl font-semibold text-[#124265]  text-center pb-4'>
                শিক্ষার্থীর ব্যক্তিগত তথ্য
              </h3>
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
                        placeholder='শিক্ষার্থীর ইমেইল(অফসনাল)'
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
                          <option key={course?.id} value={course?.course_name}>
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
                        <option selected disabled value='time-01'>
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
                        placeholder='স্কুলের নাম '
                        className='w-full input-from-contorl px-3 py-2 text-base rounded-md bg-white text-black'
                        required
                      />
                    </div>
                    <div className='col-span-full'>
                      <textarea
                        id='address'
                        cols='10'
                        rows='3'
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
      </section>
    </div>
  );
};

export default Registration;
