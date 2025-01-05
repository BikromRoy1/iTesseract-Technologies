import React, { useEffect, useState } from 'react';
import { BiChevronsRight } from 'react-icons/bi';
import welcome from '../../../Images/icons/welcome.png';
import DBLoader from '../../DBLoader/DBLoader';
import Analytics from '../Analytics/Analytics';
import './DBHeader.css';

const DBHeader = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [userInfo, setUserInfo] = useState(null);
  const [myCourse, setMyCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getInfo = JSON.parse(localStorage.getItem('userInfo'));
  const token = getInfo?.token;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update the current date every second

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // Function to format the date in the desired format: "Month Day, Year"
  const formatDate = (date) => {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  useEffect(() => {
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
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // Empty dependency array means this useEffect runs only once when the component mounts

  useEffect(() => {
    // Fetch the API data with token in headers
    fetch('https://itesseract.com.bd/main/api/v1/order-list', {
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
        setMyCourse(data); // Store the API data in the state
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
    return (
      <p className='flex items-center justify-center h-[80vh] w-full capitalize font-medium text-base'>
        Error: {error.message}
      </p>
    );
  }

  // Function to zero-pad numbers less than 10
  const zeroPad = (num) => (num < 10 ? `0${num}` : num);

  // all course length for this
  const totalCourse = myCourse?.data?.length;

  return (
    <section className='pl-0 md:pl-7'>
      <div className='p-6'>
        <div className='page-header flex justify-between items-center pb-[1.25rem]'>
          <h4 className='text-[1.125rem] font-semibold'> ড্যাশবোর্ড</h4>
          <ol className='flex items-center gap-2'>
            <li className='flex items-center gap-2'>
              <span className='text-[#1BB57B] font-medium'>ড্যাশবোর্ড</span>{' '}
              <BiChevronsRight className='text-[#8c9097]' />
            </li>
            <li className='text-[15px] font-medium'>ওভারভিউ</li>
          </ol>
        </div>
        <div className='welcome'>
          <div className='pl-[15px] pr-[15px] lg:pl-[40px] lg:pr-[40px] py-5'>
            <div className='grid gird-cols-1 md:grid-cols-3 grid-rows-1 gap-4'>
              <div className='md:col-span-2 content'>
                <span className='mb-[5px] text-[#cccce1] font-bold block tracking-wide text-sm lg:text-lg'>
                  {formatDate(currentDate)}
                </span>
                <h2 className='mb-[2px] text-[20px] md:text-[30px] text-white font-semibold tracking-wider'>
                  {' '}
                  Welcome Back,{' '}
                  <span className='font-bold'>
                    {userInfo?.data?.user?.name}!
                  </span>
                </h2>
                <p className='text-[#cfcfd8] text-base'>
                  See What’s happening with your courses and students.
                </p>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 lg:gap-4'>
                  <div>
                    <div className='p-[15px] mt-[15px] bg-[#f2f1f9] rounded-[4px]'>
                      <span className='uppercase block text-[#4c4a68] text-[14px] mb-1 font-medium'>
                        COURSES
                      </span>
                      <h4 className='text-[#6560f0] mb-0 font-extrabold text-[24px]'>
                        {myCourse?.data?.length > 0
                          ? zeroPad(totalCourse)
                          : '0'}
                      </h4>
                    </div>
                  </div>
                  <div>
                    <div className='p-[15px] mt-[15px] bg-[#f2f1f9] rounded-[4px]'>
                      <span className='uppercase block text-[#4c4a68] text-[14px] mb-1 font-medium'>
                        CERTIFICATES
                      </span>
                      <h4 className='text-[#06b48a] mb-0 font-extrabold text-[24px]'>
                        01
                      </h4>
                    </div>
                  </div>
                  <div>
                    <div className='p-[15px] mt-[15px] bg-[#f2f1f9] rounded-[4px]'>
                      <span className='uppercase block text-[#4c4a68] text-[14px] mb-1 font-medium'>
                        SCORE
                      </span>
                      <h4 className='text-[#ef2929] mb-0 font-extrabold text-[24px]'>
                        4.8
                      </h4>
                    </div>
                  </div>
                  <div>
                    <div className='p-[15px] mt-[15px] bg-[#f2f1f9] rounded-[4px]'>
                      <span className='uppercase block text-[#4c4a68] text-[14px] mb-1 font-medium'>
                        HRS LEARNED
                      </span>
                      <h4 className='text-[#1fb1e6] mb-0 font-extrabold text-[24px]'>
                        822
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className='md:col-start-3 flex justify-center items-center'>
                <img
                  src={welcome}
                  loading='lazy'
                  alt='welcome'
                  className='object-cover h-[100%] w-[100%]'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Analytics />
    </section>
  );
};

export default DBHeader;
