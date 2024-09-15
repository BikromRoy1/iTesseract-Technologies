import React from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

import course01 from '../../Images/course-01.jpg';
import course02 from '../../Images/course-02.jpg';

import Checkouts from '../../Images/Checkout.jpg';
import './Checkout.css';

const Checkout = () => {
  return (
    <div>
      <Breadcrumb
        title=' আমার কার্ট'
        subTitle=' আমার কার্ট  '
        slgs='/checkout'
        img={Checkouts}
      ></Breadcrumb>
      <div class='flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32'>
        <a href='#' class='text-2xl font-bold text-gray-800'>
          sneekpeeks
        </a>
        <div class='mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base'>
          <div class='relative'>
            <ul class='relative flex w-full items-center justify-between space-x-2 sm:space-x-4'>
              <li class='flex items-center space-x-3 text-left sm:space-x-4'>
                <a
                  class='flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700'
                  href='#'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='h-4 w-4'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    stroke-width='2'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                </a>
                <span class='font-semibold text-gray-900'>Shop</span>
              </li>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='h-4 w-4 text-gray-400'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M9 5l7 7-7 7'
                />
              </svg>
              <li class='flex items-center space-x-3 text-left sm:space-x-4'>
                <a
                  class='flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2'
                  href='#'
                >
                  2
                </a>
                <span class='font-semibold text-gray-900'>Shipping</span>
              </li>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='h-4 w-4 text-gray-400'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M9 5l7 7-7 7'
                />
              </svg>
              <li class='flex items-center space-x-3 text-left sm:space-x-4'>
                <a
                  class='flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white'
                  href='#'
                >
                  3
                </a>
                <span class='font-semibold text-gray-500'>Payment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class='grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32'>
        <div class='px-4 pt-8'>
          <p class='text-xl font-bold text-[#1cab55]'>🎁 অর্ডার সামারি</p>
          <p class='text-[#9ca3af] font-normal text-base'>
            আপনার আইটেম পরীক্ষা করুন. এবং একটি উপযুক্ত শিপিং পদ্ধতি নির্বাচন
            করুন.
          </p>
          <div class='mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-4 w-full'>
            <div class='flex flex-col rounded-lg bg-white sm:flex-row items-start w-full'>
              <img
                class='m-2 h-24 w-44 rounded-md border object-cover object-center'
                src={course02}
                alt=''
              />
              <div className='w-full '>
                <div class='w-full flex items-center justify-between px-4 pt-2'>
                  <h4 class='font-semibold text-lg'>
                    মোবাইল অ্যাপ্লিকেশন ও ওয়েবসাইট ডেভেলপমেন্ট
                  </h4>
                  <p class='primary-color font-bold text-[22px] tracking-[0.20000000298023224px]'>
                    ৳১৬,০০০
                  </p>
                </div>
                <div>
                  <h6 className='pb-3 px-4 text-[#9ca3af] font-normal text-base'>
                    প্রশিক্ষক নাম– তাসনিম জামান
                  </h6>
                  <ul class='flex flex-wrap justify-start gap-3 md:gap-4 px-4'>
                    <li class='flex items-center gap-1 md:gap-2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='17px'
                        height='17px'
                        fill='#F7C32E'
                        class='bi bi-star-fill'
                        viewBox='0 0 16 16'
                      >
                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z'></path>
                      </svg>
                      <span class='font-medium text-base text-[#9ca3af]'>
                        20 প্রজেক্ট
                      </span>
                    </li>
                    <li class='flex items-center gap-1 md:gap-2'>
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        stroke-width='0'
                        viewBox='0 0 448 512'
                        class='text-[#FD7E14]'
                        width='17px'
                        height='17px'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8zM13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3 0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57 0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6z'></path>
                      </svg>{' '}
                      <span class='font-medium text-base text-[#9ca3af]'>
                        30 ক্লাস
                      </span>
                    </li>
                    <li class='flex items-center gap-1 md:gap-2'>
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        stroke-width='0'
                        viewBox='0 0 640 512'
                        width='17px'
                        height='17px'
                        class='text-success'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M216 288h-48c-8.84 0-16 7.16-16 16v192c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16V304c0-8.84-7.16-16-16-16zM88 384H40c-8.84 0-16 7.16-16 16v96c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16v-96c0-8.84-7.16-16-16-16zm256-192h-48c-8.84 0-16 7.16-16 16v288c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16V208c0-8.84-7.16-16-16-16zm128-96h-48c-8.84 0-16 7.16-16 16v384c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16V112c0-8.84-7.16-16-16-16zM600 0h-48c-8.84 0-16 7.16-16 16v480c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16V16c0-8.84-7.16-16-16-16z'></path>
                      </svg>
                      <span class='font-medium text-base text-[#9ca3af]'>
                        লেভেল - 02
                      </span>
                    </li>
                    <li class='flex items-center gap-1 md:gap-2'>
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        stroke-width='0'
                        viewBox='0 0 496 512'
                        width='17px'
                        height='17px'
                        class='text-[#17A2B8]'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z'></path>
                      </svg>
                      <span class='font-medium text-base text-[#9ca3af]'>
                        Offline
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class='flex flex-col rounded-lg bg-white sm:flex-row'>
              <img
                class='m-2 h-24 w-44 rounded-md border object-cover object-center'
                src={course01}
                alt=''
              />
              <div className='w-full '>
                <div class='w-full flex items-center justify-between px-4 pt-2'>
                  <h4 class='font-semibold text-lg'>
                    কম্পিউটার প্রোগ্রামিং ফান্ডামেন্টাল
                  </h4>
                  <p class='primary-color font-bold text-[22px] tracking-[0.20000000298023224px]'>
                    ৳২০,০০০
                  </p>
                </div>
                <div>
                  <h6 className='pb-3 px-4 text-[#9ca3af] font-normal text-base'>
                    প্রশিক্ষক নাম– নাইমুল হাসান সাব্বির
                  </h6>
                  <ul class='flex flex-wrap justify-start gap-3 md:gap-4 px-4'>
                    <li class='flex items-center gap-1 md:gap-2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='17px'
                        height='17px'
                        fill='#F7C32E'
                        class='bi bi-star-fill'
                        viewBox='0 0 16 16'
                      >
                        <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z'></path>
                      </svg>
                      <span class='font-medium text-base text-[#9ca3af]'>
                        20 প্রজেক্ট
                      </span>
                    </li>
                    <li class='flex items-center gap-1 md:gap-2'>
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        stroke-width='0'
                        viewBox='0 0 448 512'
                        class='text-[#FD7E14]'
                        width='17px'
                        height='17px'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8zM13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3 0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57 0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6z'></path>
                      </svg>{' '}
                      <span class='font-medium text-base text-[#9ca3af]'>
                        30 ক্লাস
                      </span>
                    </li>
                    <li class='flex items-center gap-1 md:gap-2'>
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        stroke-width='0'
                        viewBox='0 0 640 512'
                        width='17px'
                        height='17px'
                        class='text-success'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M216 288h-48c-8.84 0-16 7.16-16 16v192c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16V304c0-8.84-7.16-16-16-16zM88 384H40c-8.84 0-16 7.16-16 16v96c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16v-96c0-8.84-7.16-16-16-16zm256-192h-48c-8.84 0-16 7.16-16 16v288c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16V208c0-8.84-7.16-16-16-16zm128-96h-48c-8.84 0-16 7.16-16 16v384c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16V112c0-8.84-7.16-16-16-16zM600 0h-48c-8.84 0-16 7.16-16 16v480c0 8.84 7.16 16 16 16h48c8.84 0 16-7.16 16-16V16c0-8.84-7.16-16-16-16z'></path>
                      </svg>
                      <span class='font-medium text-base text-[#9ca3af]'>
                        লেভেল - 02
                      </span>
                    </li>
                    <li class='flex items-center gap-1 md:gap-2'>
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        stroke-width='0'
                        viewBox='0 0 496 512'
                        width='17px'
                        height='17px'
                        class='text-[#17A2B8]'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z'></path>
                      </svg>
                      <span class='font-medium text-base text-[#9ca3af]'>
                        Offline
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='mt-10 bg-gray-50 px-4 pt-8 lg:mt-0'>
          <p class='text-xl font-medium'>Payment Details</p>
          <p class='text-gray-400'>
            Complete your order by providing your payment details.
          </p>
          <div class=''>
            <label for='email' class='mt-4 mb-2 block text-sm font-medium'>
              Email
            </label>
            <div class='relative'>
              <input
                type='text'
                id='email'
                name='email'
                class='w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500'
                placeholder='your.email@gmail.com'
              />
              <div class='pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='h-4 w-4 text-gray-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  stroke-width='2'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                  />
                </svg>
              </div>
            </div>
            <label
              for='card-holder'
              class='mt-4 mb-2 block text-sm font-medium'
            >
              Card Holder
            </label>
            <div class='relative'>
              <input
                type='text'
                id='card-holder'
                name='card-holder'
                class='w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500'
                placeholder='Your full name here'
              />
              <div class='pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='h-4 w-4 text-gray-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  stroke-width='2'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z'
                  />
                </svg>
              </div>
            </div>
            <label for='card-no' class='mt-4 mb-2 block text-sm font-medium'>
              Card Details
            </label>
            <div class='flex'>
              <div class='relative w-7/12 flex-shrink-0'>
                <input
                  type='text'
                  id='card-no'
                  name='card-no'
                  class='w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500'
                  placeholder='xxxx-xxxx-xxxx-xxxx'
                />
                <div class='pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3'>
                  <svg
                    class='h-4 w-4 text-gray-400'
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    viewBox='0 0 16 16'
                  >
                    <path d='M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z' />
                    <path d='M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z' />
                  </svg>
                </div>
              </div>
              <input
                type='text'
                name='credit-expiry'
                class='w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500'
                placeholder='MM/YY'
              />
              <input
                type='text'
                name='credit-cvc'
                class='w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500'
                placeholder='CVC'
              />
            </div>
            <label
              for='billing-address'
              class='mt-4 mb-2 block text-sm font-medium'
            >
              Billing Address
            </label>
            <div class='flex flex-col sm:flex-row'>
              <div class='relative flex-shrink-0 sm:w-7/12'>
                <input
                  type='text'
                  id='billing-address'
                  name='billing-address'
                  class='w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500'
                  placeholder='Street Address'
                />
                <div class='pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3'>
                  <img
                    class='h-4 w-4 object-contain'
                    src='https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg'
                    alt=''
                  />
                </div>
              </div>
              <select
                type='text'
                name='billing-state'
                class='w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500'
              >
                <option value='State'>State</option>
              </select>
              <input
                type='text'
                name='billing-zip'
                class='flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500'
                placeholder='ZIP'
              />
            </div>

            <div class='mt-6 border-t border-b py-2'>
              <div class='flex items-center justify-between'>
                <p class='text-sm font-medium text-gray-900'>Subtotal</p>
                <p class='font-semibold text-gray-900'>$399.00</p>
              </div>
              <div class='flex items-center justify-between'>
                <p class='text-sm font-medium text-gray-900'>Shipping</p>
                <p class='font-semibold text-gray-900'>$8.00</p>
              </div>
            </div>
            <div class='mt-6 flex items-center justify-between'>
              <p class='text-sm font-medium text-gray-900'>Total</p>
              <p class='text-2xl font-semibold text-gray-900'>$408.00</p>
            </div>
          </div>
          <button class='mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white'>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
