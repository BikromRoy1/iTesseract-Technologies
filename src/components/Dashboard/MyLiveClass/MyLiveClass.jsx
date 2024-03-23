import React from 'react';

const MyLiveClass = () => {
  return (
    <section className='dashboard-section'>
      <div className='dashboard-box'>
        <div className='box-header flex justify-between items-center'>
          <div className='box-title relative '>লাইভ ক্লাস</div>
        </div>
        <div className='p-[1.25rem]'>
          <div className='text-center'>
            <p className='font-medium text-base'>আজ তোমার কোনো ক্লাস নেই</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyLiveClass;
