import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import course01 from '../../../Images/course-01.jpg';
import course02 from '../../../Images/course-02.jpg';
import DBLoader from '../../DBLoader/DBLoader';

const DBMyCourse = () => {
  const [myCourse, setMyCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Retrieve token from localStorage
    const getInfo = JSON.parse(localStorage.getItem('userInfo'));
    const token = getInfo?.token; // Assuming the token is stored inside `userInfo`

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

  console.log(myCourse.data);

  const courses = [
    {
      course_id: '01',
      course: 'কম্পিউটার প্রোগ্রামিং ফান্ডামেন্টাল',
      courseBanner: course01,
    },
    {
      course_id: '02',
      course: 'মোবাইল অ্যাপ্লিকেশন ও ওয়েবসাইট ডেভেলপমেন্ট',
      courseBanner: course02,
    },
  ];

  return (
    <section className='dashboard-section'>
      <div className='dashboard-box'>
        <div className='box-header flex justify-between items-center'>
          <div className='box-title relative '>আমার কোর্সসমূহ</div>
        </div>
        <div className='p-[1.25rem]'>
          <div className='grid grid-cols-1 gap-x-4 lg:grid-cols-3 lg:gap-x-6'>
            {myCourse?.data?.map((course) => (
              <div key={course?.course_id} className='rounded-lg bg-[#f5f5f5]'>
                <div>
                  <img
                    className='rounded-t-lg'
                    src={course01}
                    loading='lazy'
                    alt={course?.course?.course_name}
                  />
                </div>
                <div className='p-3'>
                  <h2 className='font-semibold mb-3 text-[16px] md:text-[18px] lg:text-[20px]'>
                    {course?.course?.course_name}
                  </h2>
                  <Link
                    to='/dashboard/my-courses/mycoursevidoes'
                    state={{ allCourses: course?.course}}
                  >
                    <button className='btn-buy mb-0 rounded-md bg-[#1CAB55] p-3 whitespace-nowrap text-base font-semibold text-white md:w-full  '>
                      কোর্স এগিয়ে যাই
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DBMyCourse;
