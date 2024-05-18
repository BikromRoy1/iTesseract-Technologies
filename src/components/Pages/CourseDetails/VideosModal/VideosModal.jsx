import React from 'react';

const VideosModal = ({ promotional_video }) => {
  return (
    <div>
      <input type='checkbox' id='my-modal-videos' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box relative'>
          <label
            htmlFor='my-modal-videos'
            className='btn btn-sm btn-circle border-0 bg-[#f5c310] absolute right-2 top-2'
          >
            ✕
          </label>
          <h3 className='text-lg font-bold'>
            কীভাবে আপনার বাচ্চাদের কোডিং{' '}
            <span className='text-[#1bb57b]'>রোবোটিক্স দিয়ে</span>
          </h3>
          <hr />
          <div className='pt-3'>
            <iframe
              width='100%'
              height='240px'
              src={promotional_video}
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerpolicy='strict-origin-when-cross-origin'
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosModal;
