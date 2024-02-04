import school from '../../../../Images/icons/uni-01.png';
import university from '../../../../Images/icons/uni-02.png';
import collage from '../../../../Images/icons/uni-03.png';

import './Banner.css';

const NewBanner = () => {
  return (
    <section id='hero' className='flex items-center justify-center'>
      <div className='container mx-auto px-6 container-width'>
        <div className='text-center'>
          <div>
            <h1 className='mb-[8px] text-[23px] xl:text-[41px] sm:text-[27px] lg:text-[36px] md:text-[33px] lg:leading-[38px] leading-[30px] sm:leading-[33px] xl:leading-[47px] tracking-[0.20000000298023224px] font-bold text-textPrimaryColor pb-[8px]'>
              <span className='title-gradient__gradient'> প্রোগ্রামিং </span> ও
              <span className='title-gradient__gradient'> কোডিংয়ের</span>{' '}
              দুনিয়ায় <br /> আপনাকে স্বাগতম !
            </h1>
            <h2 className='text-secondary-color mx-auto xl:max-w-3xl mb-[20px] text-[15px] sm:text-[15px] md:text-[16px] lg-text-[18px]  xl:text-[18px] font-normal leading-[24px] sm:leading-[25px] md:leading-[26px]  xl:leading-[27px] tracking-[0.20000000298023224px]'>
              বাংলাদেশের অন্যতম সেরা ই-লার্নিং প্লাটফর্ম, কাজ করছে ৫ম শ্রেণী
              থেকে বিশ্ববিদ্যালয়ের শিক্ষার্থীদের জন্য দক্ষতা বৃদ্ধি করতে।
              আনন্দের ছলে মানসম্মত শিক্ষা নিশ্চিত করাই আমাদের লক্ষ্য।
            </h2>
            <div className='flex items-center gap-2 justify-center mb-10 flex-wrap'>
              <h4 className='flex items-center px-4 py-2 rounded-md font-semibold text-black text-[17px] mb-[11px] tracking-[0.20000000298023224px] banner-card-border'>
                <img
                  src={school}
                  loading='lazy'
                  className='w-7 h-7'
                  alt='icons'
                />
                <span className='ml-1'>বিশ্ববিদ্যালয়ের শিক্ষার্থী</span>
              </h4>
              <h4 className='flex items-center px-4 py-2 rounded-md font-semibold text-black text-[17px] mb-[11px] leading-[27px] tracking-[0.20000000298023224px] banner-card-border'>
                <img
                  src={university}
                  loading='lazy'
                  className='w-7 h-7'
                  alt='icons'
                />
                <span className='ml-1'>মাধ্যমিক শিক্ষার্থী</span>
              </h4>
              <h4 className='flex items-center text-black px-4 py-2 rounded-md font-semibold  text-[17px] mb-[11px] leading-[27px] tracking-[0.20000000298023224px] banner-card-border'>
                <img
                  src={collage}
                  loading='lazy'
                  className='w-7 h-7'
                  alt='icons'
                />
                <span className='ml-1'>উচ্চ মাধ্যমিক শিক্ষার্থী</span>
              </h4>
            </div>
          </div>

          <div className='text-center mx-auto flex justify-center '>
            <img
              src='https://i.ibb.co/09RvL7G/master-banner-1x.png'
              className='img-fluid animated hero-right-image  hidden md:block'
              alt='Hero-image'
              loading='lazy'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewBanner;
