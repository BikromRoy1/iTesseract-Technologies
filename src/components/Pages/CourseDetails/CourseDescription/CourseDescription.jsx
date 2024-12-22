import React from 'react';
import './CourseDescription.css';

const CourseDescription = ({ mainCourse }) => {
  const { course_description, course_learn_goal } = mainCourse.course;

  // remove HTML Tags
  function removeHTMLTags(htmlString) {
    const parser = new DOMParser();
    const parsedDocument = parser.parseFromString(htmlString, 'text/html');
    return parsedDocument.body.textContent || '';
  }

  const plainText = removeHTMLTags(course_description);
  const GoalPlainText = removeHTMLTags(course_learn_goal);
  return (
    <div className='CourseDescription-card bg-white mb-[1.6rem]'>
      <div className='videos-title'>
        <h3 className='w-full'>কোর্স ওভারভিউ</h3>
      </div>
      <div className='course-content'>
        <h4 className='font-bold text-[#124265] text-[16px] md:text-[20px] leading-[28px] pb-[10px]'>
          এই কোর্স সম্পর্কে
        </h4>
        <p
          className='pb-4 text-[16px] leading-[26px] text-gray-500'
          dangerouslySetInnerHTML={{ __html: course_description }}
        >
          {/* {plainText} */}
        </p>
      </div>

      <div className='course-Learn-part'>
        <h4 className='font-bold text-[#124265] text-[16px] md:text-[20px] leading-[28px] pb-[10px] pt-4'>
          আপনি কি শিখবেন?
        </h4>
        <p
          className='pb-4 text-[16px] leading-[26px] text-gray-500'
          dangerouslySetInnerHTML={{ __html: course_learn_goal }}
        ></p>
        {/* <ul className='grid gap-3 md:grid-cols-1 lg:grid-cols-1'>
          <li className='flex items-center space-x-2'>
            <span
              className='text-[16px] font-medium'
              dangerouslySetInnerHTML={{ __html: course_learn_goal }}
            >
              {GoalPlainText}
            </span>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default CourseDescription;
