import React from 'react';
import izoom from './company/izoom.png';
import peoplentech from './company/peoplentechLLC.png';
import smart from './company/smart-technologies_1676976913.png';

const Partner = () => {
  return (
    <section className='bg-white '>
      <div className='container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8'>
        <div className='flex flex-wrap justify-center items-center lg:justify-between'>
          <h2 className='font-bold text-2xl footer-color'>
            গর্বিত পার্টনার সমূহঃ
          </h2>
          <div>
            <img
              loading='lazy'
              title='আইজুম
'
              className='mx-10 my-3 md:mx-12 lg:m-0'
              src={izoom}
              alt='izoom'
            />
          </div>
          <div>
            <img
              loading='lazy'
              title='স্মার্ট একাডেমি
'
              className='mx-10 my-3 md:mx-12 lg:m-0'
              src={smart}
              alt='smart'
            />
          </div>
          <div>
            <img
              loading='lazy'
              title='পিপলএনটেক
'
              className='mx-10 my-3 md:mx-12 lg:m-0'
              src={peoplentech}
              alt='peoplentech'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
