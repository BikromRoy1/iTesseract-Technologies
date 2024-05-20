import React from 'react';
import './TagLine.css';

const TagLine = ({ mainCourse }) => {
  const { course_skill } = mainCourse.course;
  const newArray = course_skill.split(',');

  const colorCodes = [
    { bgColor: 'bg-[#d7f5fc]', textColor: 'text-[#03c3ec]' },
    { bgColor: 'bg-[#fff2d6]', textColor: 'text-[#ffab00]' },
    { bgColor: 'bg-[#ffeef3]', textColor: 'text-[#f8285a]' },
    { bgColor: 'bg-[#1b84ff1a]', textColor: 'text-[#1b84ff]' },
    { bgColor: 'bg-[#e7e7ff]', textColor: 'text-[#696cff]' },
  ];

  return (
    <div className='TagLine-card'>
      <h3>দক্ষতাগুলি পাবেন</h3>

      <div className='TagLine'>
        {newArray.map((item, index) => (
          <h5
            key={index}
            className={`${colorCodes[index % colorCodes.length].bgColor} ${
              colorCodes[index % colorCodes.length].textColor
            }`}
          >
            #{item}
          </h5>
        ))}
      </div>
    </div>
  );
};

export default TagLine;
