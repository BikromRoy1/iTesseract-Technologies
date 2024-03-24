import React from 'react';
import Score from './Score';

const Analytics = () => {
  return (
    <section className='p-6 pt-2'>
      <div className=''>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-3 lg:gap-6'>
          <div className='dashboard-box min-h-[250px]'>
            <div class='box-header'>
              <div class='box-title relative '>কোর্স স্কোর</div>
            </div>
            <div className='p-[1.25rem] pt-2'>
              <Score />
            </div>
          </div>
          <div className='min-h-[250px] dashboard-box lg:col-span-2'>
            <div class='box-header'>
              <div class='box-title relative '>অ্যাসাইনমেন্ট অ্যানালিটিক্স</div>
            </div>
            <div className='p-[1.25rem]'></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
