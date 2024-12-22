import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { apiUrl } from '../../config/config';

const Payment = ({ courseData, formData }) => {
  const [contact, setContact] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/v1/contact-info`);
        setContact(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  // custom request
  const courseID = courseData?.data?.course?.id;
  const batchId = formData?.batchId;
  const totalPrice = formData?.price;
  const courseDurationId = formData?.durationId;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const Transaction = form.Transaction.value;
    const Sender = form.Sender.value;

    const paymentApiUrl = `https://itesseract.com.bd/main/api/v1/order/store?course_id=${courseID}&batch_id=${batchId}&amount=${totalPrice}&transaction_id=${Transaction}&course_duration_id=${courseDurationId}&sender_number=${Sender}`;
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
      toast.success('পেমেন্ট সফলভাবে জমা দেওয়া হয়েছে', {
        autoClose: 2000, // Closes automatically after 2 seconds
      });

      // Reset form data
      form.reset();

      // Navigate to the dashboard after 3 seconds
      setTimeout(() => {
        navigate('/dashboard');
      }, 3000);
    } catch (error) {
      toast.error('পেমেন্ট জমা দিতে ব্যর্থ হয়েছে। আবার চেষ্টা করুন।', {
        autoClose: 2000, // Closes automatically after 2 seconds
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
            পেমেন্ট মেথড <span className='text-[#1bb57b]'>বিকাশ</span>
          </h3>
          <hr className='mt-2' />
          <div className='text-center flex justify-center pt-2 pb-2'>
            <svg
              data-v-aafdb068=''
              width='120'
              height='65'
              viewBox='0 0 140 65'
              fill='none'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              class='header__logo'
            >
              <title id='headerLogo'>Bkash Logo</title>
              <g clip-path='url(#clip0_2750_4283)'>
                <path
                  d='M96.7875 31.0528L100.757 48.8874L126.715 35.7465L96.7875 31.0528Z'
                  fill='#CF1E53'
                ></path>
                <path
                  d='M104.17 4.40625L96.7931 31.0583L126.717 35.7483L104.17 4.40625Z'
                  fill='#DD156E'
                ></path>
                <path
                  d='M72.4613 0.500641L103.413 4.20098L96.0947 30.6935L72.4613 0.500641Z'
                  fill='#CF1E53'
                ></path>
                <path
                  d='M72.2139 5.71484H75.6613L85.3346 18.0786L72.2139 5.71484Z'
                  fill='#9E1C3E'
                ></path>
                <path
                  d='M127.543 35.5723L118.544 23.1242L133.094 20.518L127.543 35.5723Z'
                  fill='#CF1E53'
                ></path>
                <path
                  d='M126.033 39.2287L126.96 36.4521L104.25 47.9747L126.033 39.2287Z'
                  fill='#DD156E'
                ></path>
                <path
                  d='M96.1515 31.7584L100.889 53.0642L86.8228 64.5006L96.1515 31.7584Z'
                  fill='#9E1C3E'
                ></path>
                <path
                  d='M131.676 26.8466L139.936 26.7091L133.967 20.6317L131.676 26.8466Z'
                  fill='#DD156E'
                ></path>
                <path
                  d='M2.75592 25.6223H21.265V28.3256H2.52316V49.9632C2.52316 49.9632 1.71491 49.8404 1.22007 49.8404C0.75638 49.8404 0.0690952 49.9632 0.0690952 49.9632L0.0727607 28.3256V25.6223L0.0654297 25.5361C0.0690952 19.1948 2.46635 15.5934 8.59876 15.1554C14.1245 14.7614 18.2867 17.9998 21.2686 19.5778V22.7284L20.8691 22.7925C20.3376 21.5939 13.8185 16.1158 9.56646 16.5355C5.19533 16.9698 2.49567 20.0745 2.54332 24.1396C2.54332 24.1396 2.57448 25.2356 2.72843 25.5636L2.75959 25.6223H2.75592Z'
                  fill='#DD156E'
                ></path>
                <path
                  d='M40.8425 30.0758C45.4483 29.9439 47.8015 31.5659 47.9463 35.0261C48.0251 36.9688 47.2022 38.7704 45.9248 40.3906L43.6393 40.4548L43.6247 40.0919C44.5136 39.8371 46.3756 38.4974 46.2767 36.0946C46.174 33.6241 44.3853 31.7217 41.3685 31.806C41.3685 31.806 40.9159 31.8096 40.6959 31.9031L40.8425 30.0777V30.0758Z'
                  fill='#211E1F'
                ></path>
                <path
                  d='M18.8091 27.7648H21.265V49.9668L18.8091 49.1439V27.7648Z'
                  fill='#DD156E'
                ></path>
                <path
                  d='M66.0393 30.8878C65.0807 27.5742 62.2583 25.6259 60.2258 25.6259H54.8044V28.3274H58.3417C59.8995 28.3274 61.538 28.1625 62.9896 29.4949C63.6127 30.0667 63.8619 30.7064 64.0434 31.5403C64.4942 33.6296 63.5724 36.146 61.1421 36.2083C60.4145 36.2266 59.555 36.157 58.8567 35.9426L58.6661 36.1332C59.2544 36.9121 59.6997 37.7845 60.1671 38.6312C61.5747 38.3765 63.0354 37.5187 64.0067 36.5474C65.5737 34.9785 66.3142 33.0981 66.0374 30.8896'
                  fill='#211E1F'
                ></path>
                <path
                  d='M70.0237 25.9431C68.4805 26.1593 65.9549 27.5742 65.0935 30.8879C64.8443 33.0982 65.5114 34.9767 66.9226 36.5456C67.7968 37.5169 69.1128 38.3765 70.3774 38.6294C70.7971 37.7827 71.1985 36.9121 71.73 36.1314L71.5577 35.9426C70.929 36.157 70.1574 36.2267 69.5013 36.2065C66.9831 36.1369 66.5231 33.5509 66.9171 31.5403C67.2507 29.823 68.7755 28.1332 70.2857 28.0104C71.9627 27.8711 74.0136 29.2842 74.4259 31.018C74.6459 31.9435 74.7284 32.957 74.7284 33.9082V49.9614C74.7284 49.9614 75.4908 49.8459 75.9306 49.8459C76.4017 49.8459 77.1531 49.9614 77.1531 49.9614V25.6682H74.5414V28.3678C74.5414 28.2982 74.6807 28.19 74.5579 27.9921C73.7277 26.6487 71.3432 25.7598 70.0255 25.9467'
                  fill='#211E1F'
                ></path>
                <path
                  d='M54.1776 25.6223V49.9632C54.1776 49.9632 53.3914 49.8404 52.9295 49.8404C52.4328 49.8404 51.7272 49.9632 51.7272 49.9632V28.3275H21.9082V25.6242H54.1776V25.6223Z'
                  fill='#211E1F'
                ></path>
                <path
                  d='M21.265 49.9668H20.8453C11.3772 49.9668 5.98523 44.7288 5.98523 39.5073C5.98523 35.149 9.99531 30.0612 19.2691 30.0612L20.9094 31.3332C14.4672 31.3735 9.1834 35.422 9.1834 39.6649C9.1834 43.3157 13.8313 49.1659 21.2631 49.1659V49.9668H21.265Z'
                  fill='#DD156E'
                ></path>
                <path
                  d='M38.6615 27.7648H41.1174V49.9668L38.6615 49.1439V27.7648Z'
                  fill='#211E1F'
                ></path>
                <path
                  d='M41.1174 49.9668H40.6977C31.2296 49.9668 25.8358 44.7288 25.8358 39.5073C25.8358 35.149 29.8477 30.0612 39.1197 30.0612L40.7618 31.3332C34.3178 31.3735 29.0358 35.422 29.0358 39.6649C29.0358 43.3157 33.6855 49.1659 41.1174 49.1659V49.9668Z'
                  fill='#211E1F'
                ></path>
              </g>
              <defs>
                <clipPath id='clip0_2750_4283'>
                  <rect
                    width='139.873'
                    height='64'
                    fill='white'
                    transform='translate(0.0637207 0.5)'
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className='text-[16px] md:text-[21px] font-semibold pt-1'>
            BKASH (Make Payment) {contact?.data?.bkash}
          </p>
          <div className='border border-dotted border-[#dfdfdf] my-3'></div>
          <div className='font-medium flex justify-between mt-3'>
            <div className='text-base'>ব্যাচ নাম - </div>
            <div className=''>
              <span className='font-extrabold'>{formData?.batchOption}</span>
            </div>
          </div>
          <div className='font-medium flex justify-between mt-3'>
            <div className='text-base'>ভর্তির মেয়াদ - </div>
            <div className=''>
              <span className='font-extrabold'>{formData?.durationName}</span>
            </div>
          </div>
          <div className='font-medium flex justify-between mt-3 mb-4'>
            <div>
              সর্বমোট
              <span className='text-[11px] text-[#4B5563] ml-1 font-[400]'>
                (ভ্যাট সহ)
              </span>
            </div>
            <div className='text-[#E63C3C]'>
              <span className='font-extrabold'>৳ </span>
              <span className='font-bold text-[16px]'>{formData?.price}</span>
            </div>
          </div>
          <div>
            <form
              onSubmit={handleSubmit}
              className='container flex flex-col mx-auto space-y-12'
            >
              <fieldset className='grid grid-cols-6 gap-6 '>
                <div className='grid grid-cols-6 gap-4 col-span-full lg:col-span-12'>
                  <div className='col-span-full sm:col-span-3'>
                    <input
                      id='Transaction'
                      type='text'
                      name='Transaction'
                      placeholder='Transaction Id'
                      className='w-full input-from-contorl px-3 py-2 rounded-md bg-white text-black'
                      required
                    />
                  </div>
                  <div className='col-span-full sm:col-span-3'>
                    <input
                      id='Sender'
                      type='text'
                      name='Sender'
                      placeholder='Sender Number'
                      className='w-full px-3 py-2 rounded-md input-from-contorl  text-gray-900'
                      required
                    />
                  </div>
                  <div className='col-span-full'>
                    <div className='text-center'>
                      <button
                        type='submit'
                        className='w-full px-8 py-3 font-semibold rounded-md custom-button text-white'
                      >
                        পেমেন্ট
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

export default Payment;
