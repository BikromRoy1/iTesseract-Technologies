import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaWifi } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { MdOutlineTimer } from 'react-icons/md';
import { Link } from 'react-router-dom';
import courseOne from '../../../../Images/course-01.jpg';
import courseTwo from '../../../../Images/course-02.jpg';
import student from '../../../../Images/teacher/student-02.png';
import Services from '../Services/Services';
import './Kits.css';

const Kits = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://itesseract.com.bd/master/api/v1/products'
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const products = data.data;

  return (
    <section className='kits-course'>
      <div className='container px-6 py-10 mx-auto'>
        <div className='section-header'>
          <h2>
            প্রশিক্ষণের নিজস্ব{' '}
            <span className='title-gradient'>রোবটিক্স টুলস</span>
          </h2>
          <p>
            বাংলাদেশে প্রথম আমরাই তিনটি ধাপে নিজস্ব রোবটিক্স টুলস দিয়ে প্রশিক্ষণ
            দিচ্ছে আইটেসারেক্ট
          </p>
        </div>

        <div className='grid grid-cols-1 gap-8  xl:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
          <div className='single-card'>
            <div className='course-card'>
              <div className='course-card-img'>
                <img src={courseOne} loading='lazy' alt='university' />
                <div className='thumbnail-content'>
                  <span className='bg-[#ffbb2c] text-white rounded-[2px] inline-block px-[12px] font-semibold text-[15px] leading-[26px] m-[5px]'>
                    18% OFF
                  </span>
                </div>
              </div>
              <div className='course-card-body'>
                <div className='price-list flex items-center justify-between pb-[12px]'>
                  <div className='flex items-center'>
                    <h3 className='current-price primary-color font-bold text-[22px] tracking-[0.20000000298023224px]'>
                      ৳ ৩৪,৭০০
                    </h3>
                  </div>
                  <div className='flex items-center gap-2'>
                    <FaWifi className='text-[#4AB2FD] w-5 h-5' />
                    <h5 className='text-primary-color text-[17px] font-semibold'>
                      Online
                    </h5>
                  </div>
                </div>
                <h4 className='font-semibold text-[#124265] capitalize kits-title-2'>
                  আইপ্লে - বিশ্ববিদ্যালয় শিক্ষার্থীদের জন্য টুলস
                </h4>
                <div className='course-timing flex items-center gap-5 pb-4'>
                  <div className='flex items-center gap-2'>
                    <MdOutlineTimer className='text-[#1bb57b] w-5 h-5' />
                    <h4 className='font-semibold text-primary-color'>
                      3h 14m 20s
                    </h4>
                  </div>
                  <div className='flex items-center gap-2'>
                    <FiUsers className='text-[#4AB2FD] w-5 h-5' />
                    <h4 className='font-semibold text-primary-color'>
                      763 Students
                    </h4>
                  </div>
                  <div className='flex items-center gap-2'>
                    <IoDocumentTextOutline className='text-[#9333ea] w-5 h-5' />
                    <h4 className='font-semibold text-primary-color'>
                      4 Tests
                    </h4>
                  </div>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <img
                      src={student}
                      className='rounded-full w-10 h-10'
                      loading='lazy'
                      alt='icons'
                    />
                    <div>
                      <h2 className='font-semibold text-[17px] tracking-[0.20000000298023224px]'>
                        তাসনিম জামান
                      </h2>
                    </div>
                  </div>
                  <div>
                    <Link to='/'>
                      <button className='theme-primary-color-bg font-semibold px-3 py-1 text-white rounded-md flex items-center gap-1'>
                        এখান থেকে শিখুন{' '}
                        <svg
                          stroke='currentColor'
                          fill='currentColor'
                          strokeWidth='0'
                          viewBox='0 0 512 512'
                          height='18'
                          width='18'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill='none'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='48'
                            d='M268 112l144 144-144 144m124-144H100'
                          ></path>
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='single-card'>
            <div className='course-card'>
              <div className='course-card-img'>
                <img src={courseTwo} loading='lazy' alt='university' />
                <div className='thumbnail-content '>
                  <span className='bg-[#ffbb2c] text-white rounded-[2px] inline-block px-[12px] font-semibold text-[15px] leading-[26px] m-[5px]'>
                    40% OFF
                  </span>
                </div>
              </div>
              <div className='course-card-body'>
                <div className='price-list flex items-center justify-between pb-[12px]'>
                  <div className='flex items-center'>
                    <h3 className='current-price primary-color font-bold text-[22px] tracking-[0.20000000298023224px]'>
                      ৳ ৬০,৯০০
                    </h3>
                  </div>
                  <div className='flex items-center gap-2'>
                    <FaWifi className='text-[#4AB2FD] w-5 h-5' />
                    <h5 className='text-primary-color text-[17px] font-semibold'>
                      Offline
                    </h5>
                  </div>
                </div>
                <h4 className='font-semibold text-[#124265] capitalize kits-title'>
                  আইহিরো - উচ্চ মাধ্যমিক শিক্ষার্থীদের জন্য টুলস
                </h4>
                <div className='course-timing flex items-center gap-5 pb-4'>
                  <div className='flex items-center gap-2'>
                    <MdOutlineTimer className='text-[#1bb57b] w-5 h-5' />
                    <h4 className='font-semibold text-primary-color'>
                      5h 56m 20s
                    </h4>
                  </div>
                  <div className='flex items-center gap-2'>
                    <FiUsers className='text-[#4AB2FD] w-5 h-5' />
                    <h4 className='font-semibold text-primary-color'>
                      530 Students
                    </h4>
                  </div>
                  <div className='flex items-center gap-2'>
                    <IoDocumentTextOutline className='text-[#9333ea] w-5 h-5' />
                    <h4 className='font-semibold text-primary-color'>
                      6 Tests
                    </h4>
                  </div>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <img
                      src={student}
                      className='rounded-full w-10 h-10'
                      loading='lazy'
                      alt='icons'
                    />
                    <div>
                      <h2 className='font-semibold text-[17px] tracking-[0.20000000298023224px]'>
                        তাসনিম জামান
                      </h2>
                    </div>
                  </div>
                  <div>
                    <Link to='/'>
                      <button className='theme-primary-color-bg font-semibold px-3 py-1 text-white rounded-md flex items-center gap-1'>
                        এখান থেকে শিখুন{' '}
                        <svg
                          stroke='currentColor'
                          fill='currentColor'
                          strokeWidth='0'
                          viewBox='0 0 512 512'
                          height='18'
                          width='18'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill='none'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='48'
                            d='M268 112l144 144-144 144m124-144H100'
                          ></path>
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='single-card'>
            <div className='course-card'>
              <div className='course-card-img'>
                <img src={courseOne} loading='lazy' alt='university' />
                <div className='thumbnail-content'>
                  <span className='bg-[#ffbb2c] text-white rounded-[2px] inline-block px-[12px] font-semibold text-[15px] leading-[26px] m-[5px]'>
                    {' '}
                    90% OFF
                  </span>
                </div>
              </div>
              <div className='course-card-body'>
                <div className='price-list flex items-center justify-between pb-[12px]'>
                  <div className='flex items-center'>
                    <h3 className='current-price primary-color font-bold text-[22px] tracking-[0.20000000298023224px]'>
                      ৳ ৪৫,৭০০
                    </h3>
                  </div>
                  <div className='flex items-center gap-2'>
                    <FaWifi className='text-[#4AB2FD] w-5 h-5' />
                    <h5 className='text-primary-color text-[17px] font-semibold'>
                      Online
                    </h5>
                  </div>
                </div>
                <h4 className='font-semibold text-[#124265] capitalize kits-title'>
                  আইএডু - মাধ্যমিক শিক্ষার্থীদের জন্য টুলস
                </h4>
                <div className='course-timing flex items-center gap-5 pb-4'>
                  <div className='flex items-center gap-2'>
                    <MdOutlineTimer className='text-[#1bb57b] w-5 h-5' />
                    <h4 className='font-semibold text-primary-color'>
                      23h 55m 26s
                    </h4>
                  </div>
                  <div className='flex items-center gap-2'>
                    <FiUsers className='text-[#4AB2FD] w-5 h-5' />
                    <h4 className='font-semibold text-primary-color'>
                      120 Students
                    </h4>
                  </div>
                  <div className='flex items-center gap-2'>
                    <IoDocumentTextOutline className='text-[#9333ea] w-5 h-5' />
                    <h4 className='font-semibold text-primary-color'>
                      9 Tests
                    </h4>
                  </div>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <img
                      src={student}
                      className='rounded-full w-10 h-10'
                      loading='lazy'
                      alt='icons'
                    />
                    <div>
                      <h2 className='font-semibold text-[17px] tracking-[0.20000000298023224px]'>
                        তাসনিম জামান
                      </h2>
                    </div>
                  </div>
                  <div>
                    <Link to='/'>
                      <button className='theme-primary-color-bg font-semibold px-3 py-1 text-white rounded-md flex items-center gap-1'>
                        এখান থেকে শিখুন{' '}
                        <svg
                          stroke='currentColor'
                          fill='currentColor'
                          strokeWidth='0'
                          viewBox='0 0 512 512'
                          height='18'
                          width='18'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill='none'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='48'
                            d='M268 112l144 144-144 144m124-144H100'
                          ></path>
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className='grid  grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
          {products?.map((product) => (
            <div
              className='flex flex-col kits-box items-center  text-center bg-gray-100 rounded-lg'
              key={product?.id}
            >
              <img
                loading='lazy'
                className=' object-scale-down rounded-tr-lg rounded-tl-lg w-full h-56 pt-4'
                src={`https://itesseract.com.bd/master/` + product?.image}
                alt={product?.name}
              ></img>
              <div className='p-6'>
                <h1 className=' font-semibold text-[#124265] capitalize kits-title'>
                  {product?.name}
                </h1>

                <p className='kits-details'>
                  {' '}
                  {product?.description?.length > 10 ? (
                    product?.description?.slice(0, 182) + '.....'
                  ) : (
                    <p>not found</p>
                  )}
                </p>
                <Link to={`/${product?.id}`}>
                  <button className='theme-primary-color-bg px-4 py-1 mt-2 text-white rounded-md'>
                    এখান থেকে শিখুন
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div> */}
      </div>
      <Services></Services>
    </section>
  );
};

export default Kits;
