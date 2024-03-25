import React from 'react';
import course01 from '../../../Images/course-01.jpg';
import course02 from '../../../Images/course-02.jpg';
import { Link } from 'react-router-dom';

const DBMyCourse = () => {
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
            {courses.map((course) => (
              <div key={course.course_id} className='rounded-lg bg-[#f5f5f5]'>
                <div>
                  <img
                    className='rounded-t-lg'
                    src={course.courseBanner}
                    loading='lazy'
                    alt={course.course}
                  />
                </div>
                <div className='p-3'>
                  <h2 className='font-semibold mb-3 text-[16px] md:text-[18px] lg:text-[20px]'>
                    {course.course}
                  </h2>
                  <Link to='/dashboard/my-courses/mycoursevidoes'>
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
