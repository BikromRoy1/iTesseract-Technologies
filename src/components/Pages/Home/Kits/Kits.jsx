import React from 'react';
import Title from '../../../Common/Title/Title';
import iHero from '../../../../Images/mockup.png';
import Services from '../Services/Services';
import './Kits.css';
import { Link } from 'react-router-dom';

const Kits = () => {
  const datas = [
    {
      id: '01',
      img: 'https://i.ibb.co/VMnfH5V/i-Play-Mockup-updated.png',
      title: 'আইপ্লে - বিশ্ববিদ্যালয় টুলস',
      details:
        'প্রযুক্তিতে ক্যারিয়ার শুরু করার জন্য ইঞ্জিনিয়ারিং, রোবোটিক্স, ডেটা প্রসেসিং এবং ডেটা সায়েন্স এবং ইন্টারনেট অফ থিংস এবং চতুর্থ শিল্প বিপ্লব 4.0 দক্ষতার মৌলিক বিষয়গুলি শেখানো হবে ৷',
    },
    {
      id: '02',
      img: 'https://i.ibb.co/gyjTnmb/mockup.png',
      title: 'আইহিরো - উচ্চ মাধ্যমিক টুলস ',
      details:
        'আমাদের উচ্চ বিদ্যালয়ের শিক্ষামূলক সরঞ্জামগুলি থেকে আপনি যে পরিমাণ জ্ঞান অর্জন করতে পারেন তার কোনও সীমা নেই, আপনি একজন সম্পূর্ণ শিক্ষানবিস বা অভিজ্ঞ পেশাদার হোন না কেন আপনার দক্ষতা বৃদ্ধি করতে চাইছেন ৷',
    },
    {
      id: '03',
      img: 'https://i.ibb.co/DRVqWSC/i-Edu-mockup.png',
      title: 'আইএডু - মাধ্যমিক টুলস',
      details:
        'ব্যবহারিক ও হাতে কলমে প্রশিক্ষণ, ধাপে ধাপে সমাধান যা শিশুদের প্রোগ্রামিং, হার্ডওয়্যার এ জ্ঞান আহরণে সহায়তা করে। এই কোর্স শুরু করতে হলে কোন পূর্ববর্তী জ্ঞান বা অভিজ্ঞতার প্রয়োজন নেই খুব বেসিক থেকে কোর্সটি শুরু করা হবে।',
    },
  ];

  return (
    <section className=''>
      <div className='container px-6 py-10 mx-auto'>
        <Title
          title='প্রশিক্ষণের নিজস্ব'
          text='রোবটিক্স টুলস
'
          details='বাংলাদেশে প্রথম আমরাই তিনটি ধাপে নিজস্ব রোবটিক্স টুলস দিয়ে প্রশিক্ষণ দিচ্ছে আইটেসারেক্ট
।'
        ></Title>

        <div className='grid  grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
          {datas?.map((data) => (
            <>
              <div className='flex flex-col kits-box items-center  text-center bg-gray-100 rounded-lg'>
                <img
                  loading='lazy'
                  className=' object-scale-down rounded-tr-lg rounded-tl-lg w-full h-56'
                  src={data.img}
                  alt='avatar'
                ></img>
                <div className='p-6'>
                  <h1 className=' font-semibold text-[#124265] capitalize kits-title'>
                    {data.title}
                  </h1>

                  <p className='kits-details'>{data.details}</p>
                  <Link to='/product'>
                    <button className='theme-primary-color-bg px-4 py-1 mt-2 text-white rounded-md'>
                      এখান থেকে শিখুন
                    </button>
                  </Link>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <Services></Services>
    </section>
  );
};

export default Kits;
