import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileInformation.css';

const ProfileInformation = () => {
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
    <section className='dashboard-box mt-[1.5rem]'>
      <div className='box-header flex justify-between items-center'>
        <div className='box-title relative '>Profile Information</div>
        <div>
          <Link to='/dashboard/profile/edit'>
            <button className='bg-[#1BB57B] text-white font-medium px-4 py-1 rounded-md'>
              Edit Profile
            </button>
          </Link>
        </div>
      </div>
      <div className='p-[1.25rem]'>
        <div className='grid grid-cols-1 gap-x-4 lg:grid-cols-3 lg:gap-x-6'>
          <div className=''>
            <div className='user-info bg-[#f5f8fa] my-[15px] rounded-[6px] px-[15px] py-[10px]'>
              <span className='mb-[5px] inline-flex text-[#a1a5b7] text-[14px] font-medium uppercase'>
                USER NAME
              </span>
              <p className='mb-0 text-[17px] text-[#181c32] font-semibold'>
                {name}
              </p>
            </div>
          </div>
          <div className=''>
            <div className='user-info bg-[#f5f8fa] my-[15px] rounded-[6px] px-[15px] py-[10px]'>
              <span className='mb-[5px] inline-flex text-[#a1a5b7] text-[14px] font-medium uppercase'>
                Father Name
              </span>
              <p className='mb-0 text-[17px] text-[#181c32] font-semibold'>
                {fatherName}
              </p>
            </div>
          </div>
          <div className=''>
            <div className='user-info bg-[#f5f8fa] my-[15px] rounded-[6px] px-[15px] py-[10px]'>
              <span className='mb-[5px] inline-flex text-[#a1a5b7] text-[14px] font-medium uppercase'>
                Mother Name
              </span>
              <p className='mb-0 text-[17px] text-[#181c32] font-semibold'>
                {motherName}
              </p>
            </div>
          </div>
          <div className=''>
            <div className='user-info bg-[#f5f8fa] my-[15px] rounded-[6px] px-[15px] py-[10px]'>
              <span className='mb-[5px] inline-flex text-[#a1a5b7] text-[14px] font-medium uppercase'>
                EMAIL ADDRESS
              </span>
              <p className='mb-0 text-[17px] text-[#181c32] font-semibold'>
                {email}
              </p>
            </div>
          </div>
          <div className=''>
            <div className='user-info bg-[#f5f8fa] my-[15px] rounded-[6px] px-[15px] py-[10px]'>
              <span className='mb-[5px] inline-flex text-[#a1a5b7] text-[14px] font-medium uppercase'>
                Phone Number
              </span>
              <p className='mb-0 text-[17px] text-[#181c32] font-semibold'>
                {number}
              </p>
            </div>
          </div>
          <div className=''>
            <div className='user-info bg-[#f5f8fa] my-[15px] rounded-[6px] px-[15px] py-[10px]'>
              <span className='mb-[5px] inline-flex text-[#a1a5b7] text-[14px] font-medium uppercase'>
                Gender
              </span>
              <p className='mb-0 text-[17px] text-[#181c32] font-semibold'>
                {Gender}
              </p>
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
    </section>
  );
};

export default ProfileInformation;
