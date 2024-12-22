import React from 'react';
import { useLoaderData } from 'react-router-dom';
import playIcons from '../../../../Images/icons/play_icon_2 1.svg';
import ProductBanner from '../../../../Images/prouct-page.jpg';
import Breadcrumb from '../../../Breadcrumb/Breadcrumb';
import ContactFrom from '../../ContactUS/ContactFrom/ContactFrom';
import './ProductDetails.css';

import { apiUrl } from '../../../../config/config';
import VideosModal from '../../CourseDetails/VideosModal/VideosModal';

const ProductDetails = () => {
  const product = useLoaderData();
  const singleProduct = product.data;

  // Your YouTube embed URL
  const url = singleProduct?.video;

  // Extract the part after 'embed/' and before the question mark
  const extractVideoId = (embedUrl) => {
    const embedPart = embedUrl?.split('embed/')[1];
    if (embedPart) {
      return embedPart?.split('?')[0];
    }
    return null;
  };

  const videoId = extractVideoId(url);

  return (
    <section>
      <Breadcrumb
        title='প্রোডাক্টস বিস্তারিত'
        subTitle='আমাদের প্রোডাক্টস'
        slgs='/product'
        img={ProductBanner}
      ></Breadcrumb>
      <div className='container mx-auto mt-10 mb-10 '>
        <div className='section-header'>
          <h2 className='title-gradient'>{singleProduct?.name}</h2>
        </div>

        <div className='container mx-auto px-4'>
          <div className='lg:flex lg:items-start lg:space-x-8'>
            {/* Image gallery */}
            <div className='lg:w-2/5'>
              <img
                src={`${apiUrl}/` + singleProduct?.image}
                alt={singleProduct?.name}
                className='w-full rounded-lg mb-4 CourseDetails-card border-[#1bb57b]  border-b-2'
              />
            </div>

            {/* Product info */}
            <div className='lg:w-3/5'>
              <div className=' mt-8 lg:mt-0 CourseDetails-card border-[#1bb57b]  border-b-2'>
                <small className='uppercase text-[#1bb57b] text-[15px] font-medium'>
                  {singleProduct?.name}
                </small>
                <h3 className=' text-[#124265] text-2xl font-bold mt-3 mb-3'>
                  {singleProduct?.title}
                </h3>
                <h3 className='font-bold text-[#124265] text-[16px] md:text-[18px] leading-[28px] pb-[5px]'>
                  বর্ণনা:{' '}
                </h3>
                <small
                  className='text-gray-500 text-justify text-[16px]'
                  dangerouslySetInnerHTML={{
                    __html: singleProduct?.description,
                  }}
                >
                  {/* {singleProduct.description} */}
                </small>
              </div>
              <div className=' mt-6 CourseDetails-card border-[#1bb57b] border-b-2'>
                <h3 className='font-bold text-[#124265] text-[16px] md:text-[18px] leading-[28px] pb-[5px]'>
                  পণ্য ভিডিও:{' '}
                </h3>
                <div className='course-videos relative'>
                  <label className='glightbox'>
                    <img
                      src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                      className='w-full h-80 object-cover rounded-[6px]'
                      alt='course-Banner'
                      loading='lazy'
                    />
                  </label>
                  <div className='playing-icons'>
                    <label
                      htmlFor='my-modal-videos'
                      className='glightbox cursor-pointer'
                    >
                      <img
                        className='w-[70px] h-[70px]'
                        src={playIcons}
                        loading='lazy'
                        alt='playIcons'
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VideosModal promotional_video={url} />
      <ContactFrom title='প্রোডাক্টস সম্পর্কিত যেকোনো তথ্যের জন্য যোগাযোগ করুন'></ContactFrom>
    </section>
  );
};

export default ProductDetails;
