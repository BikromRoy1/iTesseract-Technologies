import React from 'react';
import Videos from '../Videos/Videos';

const CourseVidoes = () => {
  return (
    <section id='videosCurriculum'>
      <div className=' p-6 container mx-auto'>
        <div className='flex flex-col gap-4 md:flex-row md:gap-12 md:pt-10'>
          <div className='md:max-w-[calc(100%_-_448px)] mx-md:order-2'>
            <Videos></Videos>
          </div>
          <div className=' w-full md:mb-10 md:max-w-[400px] mx-md:order-1'>
            <h2>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ex
              enim placeat recusandae error porro id nobis laudantium, eius
              eligendi ipsum tempora modi odio facere illo quisquam ratione
              accusamus? Consectetur, voluptates? Quasi molestias nihil sequi
              possimus velit, eaque omnis earum vero, excepturi aspernatur
              dolore perspiciatis? Perferendis ratione iste aliquid nobis vel
              qui ipsam provident. Atque soluta excepturi nostrum minus
              perferendis deleniti amet hic!
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseVidoes;
