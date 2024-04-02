import { MediaPlayer, MediaProvider } from '@vidstack/react';
import React from 'react';
import Call from '../../../Images/vidoes/Call-of-Duty.mp4';

import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from '@vidstack/react/player/layouts/default';

const MyLiveClass = () => {
  const callImage = Call; 

  return (
    <section className='dashboard-section'>
      <div className='dashboard-box'>
        <div className='box-header flex justify-between items-center'>
          <div className='box-title relative '>লাইভ ক্লাস</div>
        </div>
        <div className='p-[1.25rem]'>
          {callImage ? (
            <div className='w-full h-full md:w-full md:h-full lg:w-[90vh] lg:h-full mx-auto'>
              <div className='pb-4'>
                <h2 className='font-semibold text-[16px] md:text-[18px] lg:text-[22px] tracking-wider'>
                  ঘরে বসে ক্যাডেট কলেজ ভর্তি প্রস্তুতি নাও|
                </h2>
              </div>
              <MediaPlayer
                playsInline
                autoplay
                crossorigin
                playsinline
                width='100%'
                height='100%'
                title='Sprite Fight'
                src={Call}
                streamType='live'
                minLiveDVRWindow={60}
                liveEdgeTolerance={10}
              >
                <MediaProvider />

                <DefaultVideoLayout
                  thumbnails='https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/storyboard.vtt'
                  icons={defaultLayoutIcons}
                />
              </MediaPlayer>
            </div>
          ) : (
            <div className='text-center'>
              <p className='font-medium text-base'>আজ তোমার কোনো ক্লাস নেই</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MyLiveClass;
