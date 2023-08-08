import React from 'react';
import { Link } from 'react-router-dom';
import Registrationbanner from '../../../Images/registion.jpg';
import Breadcrumb from '../../Breadcrumb/Breadcrumb';
import contactAnimation from '../../../Images/contact.gif';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Registration = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://itesseract.com.bd/master/api/v1/courses'
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
        `https://itesseract.com.bd/master/api/v1/enroll/store?name=${studentName}&phone=${studentPhone}&email=${studentEmail}&address=${studentAddress}&course_id=${courseName}&level=`
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
    <section>
      <Breadcrumb
        title='নিবন্ধন ফর্ম'
        subTitle='নিবন্ধন ফর্ম'
        img={Registrationbanner}
        slgs='/registration'
      ></Breadcrumb>
      <div className='w-full  mx-auto container text-center p-6'>
        <Link
          to='/'
          className='block mt-4 text-2xl font-semibold text-[#124265] hover:underline '
        >
          ভর্তির জন্য আবেদনপত্র
        </Link>

        <p className='mt-3 text-base  dark:text-gray-400 md:text-base'>
          আইটেসারেক্ট টেকনোলিজস হল একটি উদ্ভাবনী কেন্দ্র যা শিক্ষা ক্ষেত্রে
          চতুর্থ শিল্প বিপ্লবকে ত্বরান্বিত করার উপর দৃষ্টি নিবদ্ধ করে।
          প্রযুক্তির লেন্সের মাধ্যমে, আইটেসারেক্ট বিশ্বকে উন্নত করার জন্য সাধারণ
          চ্যালেঞ্জগুলির উত্তর কল্পনা করে এবং তৈরি করে। আইটেসারেক্ট অত্যাধুনিক
          প্রযুক্তি ব্যবহারের মাধ্যমে সামাজিক জীবনকে প্রভাবিত এবং ক্ষমতায়নের
          আদর্শের উপর দৃষ্টি নিবদ্ধ করে।
        </p>
      </div>
      <section className='bg-white'>
        <div className='container px-6 py-10 mx-auto lg:py-2'>
          <div className='lg:flex items-center'>
            <div className='lg:w-1/2 pb-4'>
              <img
                loading='lazy'
                className='sm:w-full lg:w-[500px]'
                src={contactAnimation}
                alt='contact-animation'
              />
            </div>

            <div className='mt-8 lg:w-1/2 lg:mt-0'>
              <span
                to='/'
                className='block mt-4 text-2xl font-semibold text-[#124265] hover:underline  text-center pb-4'
              >
                শিক্ষার্থীর ব্যক্তিগত তথ্য
              </span>
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
                        className='w-full input-from-contorl p-3 rounded-md bg-white text-black'
                        required
                      />
                    </div>
                    <div className='col-span-full sm:col-span-3'>
                      <input
                        id='email'
                        type='email'
                        name='email'
                        placeholder='শিক্ষার্থীর ইমেইল'
                        className='w-full p-3 rounded-md input-from-contorl  text-gray-900'
                        required
                      />
                    </div>
                    <div className='col-span-full sm:col-span-3'>
                      <input
                        id='phone'
                        type='text'
                        name='phone'
                        placeholder='শিক্ষার্থীর নাম্বার'
                        className='w-full p-3 rounded-md input-from-contorl text-gray-900'
                        required
                      />
                    </div>
                    <div className='col-span-full sm:col-span-3'>
                      <select
                        name='courseOption'
                        id='courseOption'
                        className='w-full p-[10px] rounded-md input-from-contorl text-gray-900'
                        required
                      >
                        {courses?.map((course) => (
                          <option key={course?.id} value={course?.id}>
                            {`${course?.title}`}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className='col-span-full'>
                      <textarea
                        id='address'
                        cols='10'
                        rows='4'
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
                          className='w-full px-8 py-3 font-semibold rounded-md bg-[#1bb57b] text-white'
                        >
                          সাবমিট শিক্ষার্থীর ইনফরমেশন
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
    </section>
  );
};

export default Registration;
