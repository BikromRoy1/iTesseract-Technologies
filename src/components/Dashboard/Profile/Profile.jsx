import React from 'react';
import { BiChevronsRight } from 'react-icons/bi';
import profile from '../../../Images/team/abdulhamid.png';

const Profile = () => {
  return (
    <section className='dashboard-section'>
      <div className='page-header flex justify-between items-center pb-[1.25rem]'>
        <h4 className='text-[1.125rem] font-semibold'> Profile</h4>
        <ol className='flex items-center gap-2'>
          <li className='flex items-center gap-2'>
            <span className='text-[#1BB57B] font-medium'>Dashboards</span>{' '}
            <BiChevronsRight className='text-[#8c9097]' />
          </li>
          <li className='text-[15px] font-medium'>Profile</li>
        </ol>
      </div>
      <div class='grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-7'>
        <div class='dashboard-box'>
          <div className='p-[1.25rem]'>
            <div className='flex items-center gap-3 md:gap-6'>
              <div className='avatar online w-[100px] h-[100px]'>
                <img
                  className='object-cover rounded-full border-2 border-[#1BB57B]'
                  src={profile}
                  width={100}
                  height={100}
                  loading='lazy'
                  alt='profile'
                />
              </div>
              <div>
                <h4 className='font-bold tracking-wide text-[16px] md:text-[21px]'>
                  Mohammad Abdul Hamid
                </h4>
                <p>Course Student</p>
                <h3 className='text-[#a1a5b7]'>contact@itesseract.co</h3>
              </div>
            </div>
          </div>
        </div>
        <div class='welcome-box lg:col-span-2'>
          <div className='pl-3 md:pl-[50px] pt-[20px]'>
            <div className='flex items-center gap-4 lg:gap-8 justify-between flex-wrap'>
              <div className=''>
                <h2>Good Morning, Victor!</h2>
                <p>Here’s what happening with your store today</p>
              </div>
              <div className=''>
                <div className='mt-[15px] md:mt-0 pr-0 md:pr-6'>
                  <img
                    src='https://i.ibb.co/J2fJcyh/welcome1-1814fce0.png'
                    alt='icons'
                    loading='lazy'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
