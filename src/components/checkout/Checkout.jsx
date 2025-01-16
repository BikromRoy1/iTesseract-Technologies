import React, { useEffect, useState } from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

import { Link, useLocation } from 'react-router-dom';
import Checkouts from '../../Images/Checkout.jpg';
import './Checkout.css';

import Lottie from 'lottie-react';
import { toast } from 'react-toastify';
import animation from '../../Images/content.json';
import { apiUrl } from '../../config/config';
import DBLoader from '../DBLoader/DBLoader';
import Processing from './Processing';

const Checkout = () => {
  const location = useLocation();
  const [courseData, setCourseData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    batchOption: '', // Selected batch option (if applicable)
    batchId: '', // Batch ID (if applicable)
    courseDuration: '', // Selected course duration
    durationName: '', // Name of the selected duration
    durationId: '', // ID of the selected duration
    price: '', // Price of the selected duration
  });

  const { courseId = 'No ID' } = location.state || {};

  const getInfo = JSON.parse(localStorage.getItem('userInfo'));
  const token = getInfo?.token;

  useEffect(() => {
    if (courseId) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            'https://itesseract.com.bd/main/api/v1/checkout',
            {
              method: 'POST', // Use POST method
              headers: {
                'Content-Type': 'application/json', // Set the content type to JSON
                Authorization: `Bearer ${token}`, // Include the token in the headers if needed
              },
              body: JSON.stringify({ course_id: courseId }), // Pass courseId in the request body
            }
          );
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          setCourseData(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [courseId, token]);

  if (loading)
    return (
      <div className='w-full h-screen flex items-center justify-center'>
        <DBLoader />
      </div>
    );
  if (error)
    return (
      <div className='w-full h-screen flex items-center justify-center'>
        <div className='text-center'>
          <h2 className='mb-5 font-extrabold text-9xl dark:text-gray-600'>
            <span className='logo-color'>
              <Lottie animationData={animation}></Lottie>
            </span>
          </h2>
          <p className='text-2xl font-semibold md:text-3xl'>
            😥দুঃখিত, এই কোর্সটি আপনার কেনা আছে
          </p>
          <p className='mt-4 mb-4 dark:text-gray-400'>
            দয়া করে অন্য আর একটি কোর্স নির্বাচন করুন. এখানে কিছু সহায়ক লিঙ্ক
            আছে :
          </p>
          <div className='flex items-center justify-center w-full mt-2 gap-x-3 shrink-0 sm:w-auto mx-auto'>
            <Link to='/'>
              <button className='px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-[#1CB63E] rounded-lg  hover:bg-[#06A12A] dark:hover:bg-[#06A12A] dark:bg-[#1CB63E]'>
                Go To Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    );

  // Handle change for BatchOption select field
  const handleBatchChange = (e) => {
    // setFormData({
    //   ...formData,
    //   batchOption: e.target.value,
    //   batchId: e.target.value,
    // });
    const selectedBatchId = Number(e.target.value); // Convert selected value to a number
    const selectedBatch = courseData?.data?.batches?.find(
      (batch) => batch.id === selectedBatchId
    ); // Find the batch object based on the selected id

    setFormData({
      ...formData,
      batchOption: selectedBatch ? selectedBatch.name : '', // Store the batch name
      batchId: selectedBatchId, // Store the batch id
    });
  };

  // Handle change for courseDurations select field and update price
  // const handleDurationChange = (e) => {
  //   const selectedValue = e.target.value;

  //   if (selectedValue === '') {
  //     setFormData({
  //       ...formData,
  //       courseDuration: '',
  //       durationName: '', // Clear duration name
  //       price: '', // Set price to empty string
  //     });
  //     return;
  //   }

  //   const selectedDuration = courseData.data.course_durations.find(
  //     (duration) => duration.duration.name === selectedValue
  //   );

  //   setFormData({
  //     ...formData,
  //     courseDuration: selectedValue,
  //     durationName: selectedDuration ? selectedDuration.duration.name : '', // Update duration name
  //     price: selectedDuration ? selectedDuration.price : '', // Update price or set it as empty string
  //   });
  // };

  const handleDurationChange = (e) => {
    const selectedValue = e.target.value;

    if (selectedValue === '') {
      setFormData({
        ...formData,
        courseDuration: '',
        durationName: '', // Clear duration name
        price: '', // Set price to empty string
        durationId: '', // Clear duration_id
      });
      return;
    }

    const selectedDuration = courseData.data.course_durations.find(
      (duration) => duration.duration.name === selectedValue
    );

    setFormData({
      ...formData,
      courseDuration: selectedValue,
      durationName: selectedDuration ? selectedDuration.duration.name : '', // Update duration name
      price: selectedDuration ? selectedDuration.price : '', // Update price or set it as empty string
      durationId: selectedDuration ? selectedDuration.id : '', // Update duration_id or clear it
    });
  };

  // Extract price and discount price
  const defaultPrice = courseData?.data?.course?.price || 0;
  const defaultDiscountPrice = courseData?.data?.course?.discount_price || 0;
  const offerDate = courseData?.data?.course?.offer_date;

  // Calculate the total price after discount
  // const totalPrice = price - discountPrice;

  // Get today's date
  const today = new Date();
  const offerEndDate = new Date(offerDate);

  // Condition to determine which price to show
  const finalPrice =
    today <= offerEndDate ? defaultDiscountPrice : defaultPrice;

  const discount =
    today <= offerEndDate ? defaultPrice - defaultDiscountPrice : 0;

  // Calculate the total price based on selection
  const totalPrice =
    formData.price !== ''
      ? formData.price // Use user-selected price directly
      : finalPrice; // Apply discount to default price

  // bkash payment add

  const courseID = courseData?.data?.course?.id;
  const batchId = formData?.batchId;
  const totalPriceCourse = formData?.price || finalPrice;
  const courseDurationId = formData?.durationId;

  const durationParam = courseDurationId || null;

  const handleSubmit = async () => {
    if (isSubmitting) return; // Prevent multiple submissions
    setIsSubmitting(true);

    const paymentApiUrl = `https://itesseract.com.bd/main/api/v1/bkash-pay?course_id=${courseID}&batch_id=${batchId}&amount=${totalPriceCourse}&course_duration_id=${durationParam}`;
    // Retrieve token from localStorage
    const getInfo = JSON.parse(localStorage.getItem('userInfo'));
    const token = getInfo?.token; // Assuming the token is stored inside `userInfo`

    try {
      const response = await fetch(paymentApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Replace with actual token if needed
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      // Handle the payment response here
      handlePaymentResponse(result);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false); // Allow resubmission after completion
    }
  };

  const handlePaymentResponse = (response) => {
    if (response?.success) {
      // If success is true, open the URL in a new tab
      window.location.href = response.data.url;
    } else {
      // Handle failure if needed
      toast.error('পেমেন্ট জমা দিতে ব্যর্থ হয়েছে। আবার চেষ্টা করুন।', {
        autoClose: 2000, // Closes automatically after 2 seconds
      });
    }
  };

  return (
    <div>
      <Breadcrumb
        title=' আমার কার্ট'
        subTitle=' আমার কার্ট  '
        slgs='/checkout'
        img={Checkouts}
      ></Breadcrumb>
      <div className='container mx-auto lg:px-14 xl:px-20 pb-20 pt-11'>
        <div className='px-4'>
          <p className='text-xl font-bold text-[#1cab55]'>
            🎁 আমার অর্ডার সামারি
          </p>
          <p className='text-[#9ca3af] font-normal text-base'>
            আপনার আইটেম পরীক্ষা করুন. এবং একটি উপযুক্ত শিপিং পদ্ধতি নির্বাচন
            করুন.
          </p>
        </div>
        <div className='grid lg:grid-cols-2'>
          <div className='px-3 pt-4 h-full'>
            <div className='mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-2 w-full'>
              <div className='flex flex-col rounded-lg bg-white sm:flex-row items-start w-full'>
                <img
                  className='m-2 h-36 w-44 rounded-md border object-cover object-center'
                  src={`${apiUrl}/${courseData?.data?.course?.image}`}
                  alt=''
                />
                <div className='w-full'>
                  <div className='border-b border-dashed pb-4 mb-4 mx-4'>
                    <div className='w-full flex items-center justify-between  pt-2 '>
                      <h4 className='font-semibold text-base'>
                        {courseData?.data?.course?.course_name}
                      </h4>
                      <p className='primary-color font-bold text-[20px] tracking-[0.20000000298023224px]'>
                        ৳{courseData?.data?.course?.price}
                      </p>
                    </div>
                    <h6 className='pb-3 text-[#9ca3af] font-normal text-[16px]'>
                      প্রশিক্ষক নাম– {courseData?.data?.course?.trainer?.name}
                    </h6>
                    <div>
                      <ul className='flex flex-wrap justify-start gap-3 md:gap-4'>
                        <li className='flex items-center gap-1 md:gap-2'>
                          <svg
                            width='17px'
                            height='17px'
                            fill='#1bb57b'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 512 512'
                          >
                            <path d='M215.4 96L144 96l-36.2 0L96 96l0 8.8L96 144l0 40.4 0 89L.2 202.5c1.6-18.1 10.9-34.9 25.7-45.8L48 140.3 48 96c0-26.5 21.5-48 48-48l76.6 0 49.9-36.9C232.2 3.9 243.9 0 256 0s23.8 3.9 33.5 11L339.4 48 416 48c26.5 0 48 21.5 48 48l0 44.3 22.1 16.4c14.8 10.9 24.1 27.7 25.7 45.8L416 273.4l0-89 0-40.4 0-39.2 0-8.8-11.8 0L368 96l-71.4 0-81.3 0zM0 448L0 242.1 217.6 403.3c11.1 8.2 24.6 12.7 38.4 12.7s27.3-4.4 38.4-12.7L512 242.1 512 448s0 0 0 0c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64c0 0 0 0 0 0zM176 160l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z' />
                          </svg>
                          <span className='font-medium text-base text-[#9ca3af]'>
                            {courseData?.data?.course?.project} প্রজেক্ট
                          </span>
                        </li>
                        <li className='flex items-center gap-1 md:gap-2'>
                          <svg
                            stroke='currentColor'
                            fill='currentColor'
                            strokeWidth='0'
                            viewBox='0 0 448 512'
                            className='text-[#FD7E14]'
                            width='17px'
                            height='17px'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8zM13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3 0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57 0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6z'></path>
                          </svg>{' '}
                          <span className='font-medium text-base text-[#9ca3af]'>
                            {courseData?.data?.course?.enroll_student} এনরোল
                            স্টুডেন্ট
                          </span>
                        </li>
                        <li className='flex items-center gap-1 md:gap-2'>
                          <svg
                            stroke='currentColor'
                            fill='currentColor'
                            strokeWidth='0'
                            viewBox='0 0 640 512'
                            width='17px'
                            height='17px'
                            className='text-success'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M216 288h-48c-8.84 0-16 7.16-16 16v192c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16V304c0-8.84-7.16-16-16-16zM88 384H40c-8.84 0-16 7.16-16 16v96c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16v-96c0-8.84-7.16-16-16-16zm256-192h-48c-8.84 0-16 7.16-16 16v288c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16V208c0-8.84-7.16-16-16-16zm128-96h-48c-8.84 0-16 7.16-16 16v384c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16V112c0-8.84-7.16-16-16-16zM600 0h-48c-8.84 0-16 7.16-16 16v480c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16V16c0-8.84-7.16-16-16-16z'></path>
                          </svg>
                          <span className='font-medium text-base text-[#9ca3af]'>
                            লেভেল - 02
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className='mx-4'>
                    <form action=''>
                      <fieldset className='grid grid-cols-6 gap-6 '>
                        <div className='grid grid-cols-6 gap-4 col-span-full lg:col-span-12'>
                          <div className='col-span-full sm:col-span-3'>
                            <label
                              htmlFor='BatchOption'
                              className='block text-sm font-medium text-gray-900 leading-6'
                            >
                              ব্যাচ সিলেক্ট করো
                            </label>
                            {/* <select
                              name='BatchOption'
                              id='BatchOption'
                              className='w-full px-2 py-[4px] rounded-md input-from-contorl text-gray-900'
                              value={formData.batchOption} 
                              onChange={handleBatchChange}
                            >
                              <option className='text-xs' value=''>
                                Select Batch
                              </option>
                              {courseData?.data?.batches?.length > 0 ? (
                                courseData?.data?.batches?.map((batch) => (
                                  <option
                                    className='text-xs'
                                    key={batch.id}
                                    value={batch.id}
                                  >
                                    {batch.name}
                                  </option>
                                ))
                              ) : (
                                <option
                                  className='text-xs'
                                  selected
                                  disabled
                                  value=''
                                >
                                  No Batch Available
                                </option>
                              )}
                            </select> */}
                            <select
                              name='BatchOption'
                              id='BatchOption'
                              className='w-full px-2 py-[4px] rounded-md input-from-contorl text-gray-900'
                              value={formData.batchId} // Set the selected value to batchId
                              onChange={handleBatchChange} // Handle change event
                            >
                              <option className='text-xs' value=''>
                                Select Batch
                              </option>
                              {courseData?.data?.batches?.length > 0 ? (
                                courseData?.data?.batches?.map((batch) => (
                                  <option
                                    className='text-xs'
                                    key={batch.id}
                                    value={batch.id} // Use batch.id as the value
                                  >
                                    {batch.name} {/* Display batch name */}
                                  </option>
                                ))
                              ) : (
                                <option
                                  className='text-xs'
                                  selected
                                  disabled
                                  value=''
                                >
                                  No Batch Available
                                </option>
                              )}
                            </select>
                          </div>
                          <div className='col-span-full sm:col-span-3'>
                            <label
                              htmlFor='course_durations'
                              className='block text-sm leading-6 font-medium text-gray-900'
                            >
                              ভর্তির মেয়াদ সিলেক্ট করো
                            </label>
                            <select
                              name='course_durations'
                              id='course_durations'
                              className='w-full px-2 py-[4px] rounded-md input-from-contorl text-gray-900'
                              value={formData.courseDuration} // Set the selected value
                              onChange={handleDurationChange} // Handle change event
                            >
                              <option className='text-xs'>Select values</option>
                              {courseData?.data?.course_durations?.length >
                              0 ? (
                                courseData.data.course_durations.map(
                                  (durations) => (
                                    <option
                                      className='text-xs'
                                      key={durations?.id}
                                      value={`${durations?.duration?.name}`}
                                    >
                                      {durations?.duration?.name}- ৳(
                                      {durations.price})
                                    </option>
                                  )
                                )
                              ) : (
                                <option
                                  className='text-xs'
                                  selected
                                  disabled
                                  value=''
                                >
                                  ভর্তির মেয়াদ নেই
                                </option>
                              )}
                            </select>
                          </div>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='px-4 pt-4 h-full'>
            <div className='mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-4 w-full'>
              <div className='flex flex-col rounded-lg bg-white sm:flex-row items-start w-full'>
                <div className='w-full'>
                  <div className='border-b border-dashed pb-5 mx-4'>
                    <div className='w-full flex items-center justify-between  mb-1 mt-1'>
                      <h4 className='font-normal text-lg text-gray-600'>
                        প্রোডাক্টের মূল্য
                      </h4>
                      <p className='font-semibold text-[20px] tracking-[0.20000000298023224px]'>
                        ৳{courseData?.data?.course?.price}
                      </p>
                    </div>
                    <div className='w-full flex items-center justify-between pt-2'>
                      <h4 className='font-normal text-lg text-gray-600'>
                        ডিস্কাউন্ট
                      </h4>
                      <p className='font-semibold text-[#E63C3C] text-[20px] tracking-[0.20000000298023224px]'>
                        ৳{discount}
                      </p>
                    </div>
                    {formData?.price !== '' && (
                      <div className='w-full flex items-center justify-between mb-1 mt-1'>
                        <button className='gap-2 py-2  flex ghost text-green-500 ng-star-inserted'>
                          <svg
                            width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M3.67063 12.9386L7.44563 16.7136C8.99563 18.2636 11.5123 18.2636 13.0706 16.7136L16.729 13.0553C18.279 11.5053 18.279 8.98864 16.729 7.43031L12.9456 3.66364C12.154 2.87197 11.0623 2.44697 9.94563 2.50531L5.77896 2.70531C4.1123 2.78031 2.7873 4.10531 2.70396 5.76364L2.50396 9.93031C2.45396 11.0553 2.87896 12.147 3.67063 12.9386Z'
                              stroke='currentColor'
                              strokeWidth='1.41176'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            ></path>
                            <path
                              d='M8.11458 10.1891C9.26518 10.1891 10.1979 9.25639 10.1979 8.10579C10.1979 6.9552 9.26518 6.02246 8.11458 6.02246C6.96399 6.02246 6.03125 6.9552 6.03125 8.10579C6.03125 9.25639 6.96399 10.1891 8.11458 10.1891Z'
                              stroke='currentColor'
                              strokeWidth='1.41176'
                              strokeLinecap='round'
                            ></path>
                            <path
                              d='M11.0312 14.3558L14.3646 11.0225'
                              stroke='currentColor'
                              strokeWidth='1.41176'
                              strokeMiterlimit='10'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            ></path>
                          </svg>
                          <span>{formData?.durationName}</span>
                        </button>
                        <p className='font-semibold text-[20px] tracking-[0.20000000298023224px]'>
                          ৳{formData?.price}
                        </p>
                      </div>
                    )}
                  </div>
                  <div>
                    <div className='flex justify-between p-4 text-lg font-semibold'>
                      <h4>
                        {' '}
                        সর্বমোট{' '}
                        <span className='text-base font-normal text-gray-600'>
                          (ভ্যাট সহ)
                        </span>
                      </h4>
                      <h4> ৳ {totalPrice} </h4>
                    </div>
                    <div className='mx-3 relative'>
                      {isSubmitting && <Processing />}
                      <button
                        className={`max-w[300px] cursor-pointer text-center mx-auto block w-full px-4 py-[6px] rounded-md font-medium text-base tracking-wide transition-colors whitespace-nowrap duration-200 ${
                          formData.batchOption
                            ? 'bg-[#1bb57b] text-white'
                            : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                        }`}
                        onClick={(e) => {
                          if (formData.batchOption) {
                            handleSubmit(); // Call handleSubmit if conditions are met
                          } else {
                            e.preventDefault(); // Prevent modal from opening if conditions are not met
                          }
                        }}
                      >
                        {isSubmitting ? 'পেমেন্ট প্রসেসিং...' : 'পেমেন্ট করুন'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
