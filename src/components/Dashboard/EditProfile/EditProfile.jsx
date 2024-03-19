import React from 'react';
import './editProfile.css';

const EditProfile = () => {
  let name = 'Bikrom Roy';
  let fatherName = 'Bipul Roy';
  let motherName = 'Sebika Roy';
  let email = 'email@example.com';
  let number = '01795-188538';
  let Gender = 'Male';
  let BirthDay = '14 March, 2002';
  let location = 'Bagerhat-বাগেরহাট';
  let school = 'ATKHALI SECONDARY SCHOOL';
  let Class = 'Higher Secondary Certificate';
  let Religion = 'Hindu';
  let address = 'Dhaka, Bangladesh';
  return (
    <section className='dashboard-section'>
      <div className='dashboard-box mt-[1.5rem] '>
        <div className='box-header flex justify-between items-center'>
          <div className='box-title relative '>প্রোফাইল আপডেট</div>
        </div>
        <div className='p-[1.25rem]'>
          <div className='grid grid-cols-1 gap-x-4 lg:grid-cols-3 lg:gap-x-6'>
            <div className='mb-[16px]'>
              <div>
                <label
                  class='mb-2 font-semibold inline-block text-[#a1a5b7]'
                  for='name'
                >
                  নাম
                  <span className='text-[#f76a78]'>*</span>
                </label>
                <input
                  type='text'
                  name='name'
                  class='form-control w-full rounded-md border-2 border-[#1BB57B] p-[10px] text-[15px] focus:outline-none'
                  id='name'
                  placeholder='আপনার পুরো নাম লিখুন'
                />
              </div>
            </div>
            <div className='mb-[16px]'>
              <div>
                <label
                  class='mb-2 font-semibold inline-block text-[#a1a5b7]'
                  for='name'
                >
                  ফোন নাম্বার
                </label>
                <input
                  type='text'
                  name='name'
                  class='form-control w-full rounded-md border-2 border-[#1BB57B] p-[10px] text-[15px] focus:outline-none'
                  id='name'
                  readOnly
                  value={number}
                />
              </div>
            </div>
            <div className='mb-[16px]'>
              <div>
                <label
                  class='mb-2 font-semibold inline-block text-[#a1a5b7]'
                  for='name'
                >
                  বাবার নাম
                  <span className='text-[#f76a78]'>*</span>
                </label>
                <input
                  type='text'
                  name='name'
                  class='form-control w-full rounded-md border-2 border-[#1BB57B] p-[10px] text-[15px] focus:outline-none'
                  id='name'
                  placeholder='তোমার বাবার নাম লিখ'
                />
              </div>
            </div>
            <div className='mb-[16px]'>
              <div>
                <label
                  class='mb-2 font-semibold inline-block text-[#a1a5b7]'
                  for='name'
                >
                  মায়ের নাম
                  <span className='text-[#f76a78]'>*</span>
                </label>
                <input
                  type='text'
                  name='name'
                  class='form-control w-full rounded-md border-2 border-[#1BB57B] p-[10px] text-[15px] focus:outline-none'
                  id='name'
                  placeholder='তোমার মায়ের নাম লিখ'
                />
              </div>
            </div>
            <div className='mb-[16px]'>
              <div>
                <label
                  class='mb-2 font-semibold inline-block text-[#a1a5b7]'
                  for='name'
                >
                  ইমেইল
                </label>
                <input
                  type='text'
                  name='name'
                  class='form-control w-full rounded-md border-2 border-[#1BB57B] p-[10px] text-[15px] focus:outline-none'
                  id='name'
                  value={email}
                />
              </div>
            </div>
            <div className='mb-[16px]'>
              <div>
                <label
                  class='mb-2 font-semibold inline-block text-[#a1a5b7]'
                  for='name'
                >
                  জন্ম তারিখ
                  <span className='text-[#f76a78]'>*</span>
                </label>
                <input
                  type='date'
                  name='name'
                  class='form-control w-full rounded-md border-2 border-[#1BB57B] p-[10px] text-[15px] focus:outline-none'
                  id='name'
                  placeholder='আপনার জন্ম তারিখ নির্বাচন করুন'
                />
              </div>
            </div>
            <div className=''>
              <div className='user-info bg-[#f5f8fa] my-[15px] rounded-[6px] px-[15px] py-[10px]'>
                <span className='mb-[5px] inline-flex text-[#a1a5b7] text-[14px] font-medium uppercase'>
                  Date Of Birth
                </span>
                <p className='mb-0 text-[17px] text-[#181c32] font-semibold'>
                  {BirthDay}
                </p>
              </div>
            </div>
            <div className=''>
              <div className='user-info bg-[#f5f8fa] my-[15px] rounded-[6px] px-[15px] py-[10px]'>
                <span className='mb-[5px] inline-flex text-[#a1a5b7] text-[14px] font-medium uppercase'>
                  Location
                </span>
                <p className='mb-0 text-[17px] text-[#181c32] font-semibold'>
                  {location}
                </p>
              </div>
            </div>
            <div className=''>
              <div className='user-info bg-[#f5f8fa] my-[15px] rounded-[6px] px-[15px] py-[10px]'>
                <span className='mb-[5px] inline-flex text-[#a1a5b7] text-[14px] font-medium uppercase'>
                  School Name
                </span>
                <p className='mb-0 text-[17px] text-[#181c32] font-semibold'>
                  {school}
                </p>
              </div>
            </div>
            <div className=''>
              <div className='user-info bg-[#f5f8fa] my-[15px] rounded-[6px] px-[15px] py-[10px]'>
                <span className='mb-[5px] inline-flex text-[#a1a5b7] text-[14px] font-medium uppercase'>
                  Class
                </span>
                <p className='mb-0 text-[17px] text-[#181c32] font-semibold'>
                  {Class}
                </p>
              </div>
            </div>
            <div className=''>
              <div className='user-info bg-[#f5f8fa] my-[15px] rounded-[6px] px-[15px] py-[10px]'>
                <span className='mb-[5px] inline-flex text-[#a1a5b7] text-[14px] font-medium uppercase'>
                  Present Address
                </span>
                <p className='mb-0 text-[17px] text-[#181c32] font-semibold'>
                  {address}
                </p>
              </div>
            </div>
            <div className=''>
              <div className='user-info bg-[#f5f8fa] my-[15px] rounded-[6px] px-[15px] py-[10px]'>
                <span className='mb-[5px] inline-flex text-[#a1a5b7] text-[14px] font-medium uppercase'>
                  Religion
                </span>
                <p className='mb-0 text-[17px] text-[#181c32] font-semibold'>
                  {Religion}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditProfile;
