import React, { useEffect, useState } from 'react';
import { BiChevronsRight } from 'react-icons/bi';
import profile from '../../../Images/team/abdulhamid.png';
import ProfileInformation from './ProfileInformation';

import evening from '../../../Images/icons/Evening.png';
import afternoon from '../../../Images/icons/afternoon.png';
import morning from '../../../Images/icons/morning.png';
import DBLoader from '../../DBLoader/DBLoader';

const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Retrieve token from localStorage
    const getInfo = JSON.parse(localStorage.getItem('userInfo'));
    const token = getInfo?.token; // Assuming the token is stored inside `userInfo`

    // Fetch the API data with token in headers
    fetch('https://itesseract.com.bd/main/api/v1/get-user-info', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // Pass the token as a Bearer token
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setUserInfo(data); // Store the API data in the state
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []); // Empty dependency array means this useEffect runs only once when the component mounts

  if (loading) {
    return <DBLoader />;
  }

  if (error) {
    return <p className='flex items-center justify-center h-[80vh] w-full capitalize font-medium text-base'>Error: {error.message}</p>;
  }

  const morningIcons = morning;
  const afternoonIcons = afternoon;
  const eveningIcons = evening;

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      return {
        message: 'Good Morning',
        icon: morningIcons,
      };
    } else if (hour >= 12 && hour < 18) {
      return {
        message: 'Good Afternoon',
        icon: afternoonIcons,
      };
    } else {
      return {
        message: 'Good Evening',
        icon: eveningIcons,
      };
    }
  };

  const greeting = getGreeting();

  const UserName = userInfo?.data?.user?.name;

  // Split the name string into an array of words
  const words = UserName.split(' ');

  // Select the last word
  const lastWord = words[words.length - 1];

  return (
    <section class='dashboard-section'>
      <div class='page-header flex justify-between items-center pb-[1.25rem]'>
        <h4 class='text-[1.125rem] font-semibold'> Profile</h4>
        <ol class='flex items-center gap-2'>
          <li class='flex items-center gap-2'>
            <span class='text-[#1BB57B] font-medium'>Dashboards</span>{' '}
            <BiChevronsRight class='text-[#8c9097]' />
          </li>
          <li class='text-[15px] font-medium'>Profile</li>
        </ol>
      </div>
      <div class='grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-7'>
        <div class='dashboard-box flex items-center'>
          <div class='p-[1.25rem]'>
            <div class='flex items-center gap-3 md:gap-6'>
              <div>
                <div class='avatar online w-[100px] h-[100px]'>
                  <img
                    class='object-cover rounded-full border-2 border-[#36D399]'
                    src={profile}
                    width={100}
                    height={100}
                    loading='lazy'
                    alt='profile'
                  />
                </div>
              </div>
              <div>
                <h4 class='font-bold tracking-wide text-[16px] md:text-[21px]'>
                  {UserName}
                </h4>
                <p>Course Student</p>
                <h3 class='text-[#a1a5b7]'>{userInfo?.data?.user?.email}</h3>
              </div>
            </div>
            <div class='flex items-center gap-2 pt-4'>
              <div class='bg-[#20d489] text-white w-7 h-7 rounded-full flex items-center justify-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  class='bi bi-shield-check'
                  viewBox='0 0 16 16'
                >
                  <path d='M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56' />
                  <path d='M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0' />
                </svg>
              </div>
              <p class='text-[#20d489] font-semibold'>Verify account</p>
            </div>
          </div>
        </div>
        <div class='welcome-box lg:col-span-2 rounded-lg'>
          <div class='pl-3 md:pl-[50px] pt-[20px]'>
            <div class='flex items-center gap-4 lg:gap-8 justify-between flex-wrap'>
              <div class=''>
                <h2 class='mb-[3px] font-medium text-[#2b2a3f] text-[16px] md:text-[2rem]'>
                  {greeting.message}, <span class='font-bold'>{lastWord}!</span>
                </h2>
                <p>Here’s what happening with your store today</p>
              </div>
              <div class=''>
                <div class='mt-[15px] md:mt-0 pr-0 md:pr-6'>
                  <img
                    src={greeting.icon}
                    alt='icons'
                    width={150}
                    loading='lazy'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProfileInformation userInfo={userInfo} />
    </section>
  );
};

export default Profile;
