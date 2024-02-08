import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Skeletonloader from '../Team/Skeletonloader';
import './AdBoard.css';

const AdBoard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://itesseract.com.bd/master/api/v1/adviser-team'
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const teamMembers = data.data;

  return (
    <section className='Ad_Boarder_bg py-16'>
      <div className='container p-6 mx-auto'>
        <div className='section-header'>
          <h2>
            আমাদের
            <span className='title-gradient'> উপদেষ্টা বোর্ড সদস্য</span>
          </h2>
          <p>আইটেসারেক্ট টেকনোলিজস স্কোয়াড একটি বহুমুখী পেশাদার দল।</p>
        </div>
        <div className='grid grid-cols-1 gap-5 xl:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4'>
          {loading ? (
            <Skeletonloader />
          ) : (
            <>
              {teamMembers?.map((teamMember) => (
                <div key={teamMember?.id} className='space-y-2'>
                  <div
                    className='w-full bg-white rounded-lg p-6 flex flex-col justify-center cursor-pointer items-center border-[1px] border-[#E5E7EB]'
                    title={teamMember?.name}
                  >
                    <div className='mb-5'>
                      <img
                        loading='lazy'
                        className='object-center object-cover rounded-full h-40 w-40'
                        src={
                          `https://itesseract.com.bd/master/` +
                          teamMember?.image
                        }
                        alt={teamMember?.name}
                      />
                    </div>
                    <div className='text-center'>
                      <h1 className='text-[17px] font-bold hover:text-[#1bb57b]'>
                        {teamMember?.name}
                      </h1>
                      <p className='text-gray-400'>{teamMember?.designation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default AdBoard;
