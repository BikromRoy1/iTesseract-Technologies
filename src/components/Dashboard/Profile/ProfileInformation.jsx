import React from 'react';
import { Link } from 'react-router-dom';
import './ProfileInformation.css';

const ProfileInformation = ({ userInfo }) => {
 

  // Date format for the profile
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Intl.DateTimeFormat('en-GB', options).format(date);
  };

  // face all data for the profile
  let name = userInfo?.data?.user?.name ? userInfo.data.user.name : 'N/A';
  let fatherName = userInfo?.data?.user_details?.fathers_name
    ? userInfo.data.user_details.fathers_name
    : 'N/A';
  let motherName = userInfo?.data?.user_details?.mothers_name
    ? userInfo.data.user_details.mothers_name
    : 'N/A';
  let email = userInfo?.data?.user?.email ? userInfo?.data?.user?.email : 'N/A';
  let number = userInfo?.data?.user?.mobile
    ? userInfo?.data?.user?.mobile
    : 'N/A';
  let Gender = userInfo?.data?.user_details?.gender
    ? userInfo?.data?.user_details?.gender
    : 'N/A';
  // let BirthDay = '14 March, 2002';
  let BirthDay = userInfo?.data?.user_details?.date_of_birth
    ? userInfo?.data?.user_details?.date_of_birth
    : 'N/A';
  let location = userInfo?.data?.user_details?.district
    ? userInfo?.data?.user_details?.district
    : 'N/A';
  let school = userInfo?.data?.user_details?.institute
    ? userInfo?.data?.user_details?.institute
    : 'N/A';
  let Class = userInfo?.data?.user_details?.class
    ? userInfo?.data?.user_details?.class
    : 'N/A';
  let Religion = userInfo?.data?.user_details?.religion
    ? userInfo?.data?.user_details?.religion
    : 'N/A';
  let address = userInfo?.data?.user_details?.address
    ? userInfo?.data?.user_details?.address
    : 'N/A';

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
