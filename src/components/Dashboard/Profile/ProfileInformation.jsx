import React from 'react';
import './ProfileInformation.css';

const ProfileInformation = () => {

    


  return (
    <section className='dashboard-box mt-[1.5rem]'>
      <div className='box-header flex justify-between items-center'>
        <div className='box-title relative '>Profile Information</div>
        <div>
          <button className='bg-[#1BB57B] text-white font-medium px-4 py-1 rounded-md'>
            Edit Profile
          </button>
        </div>
      </div>
      <div className='p-[1.25rem]'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
        aperiam eius distinctio sunt perspiciatis esse laudantium eum dolore
        placeat eaque.
      </div>
    </section>
  );
};

export default ProfileInformation;
