import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdBoard.css';

const AdBoard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://itesseract.com.bd/master/api/v1/adviser-team'
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const teamMembers = data.data;

  return (
    <div className='Ad_Boarder_bg'>
      <div className='py-16'>
        <div className='text-center '>
          <h1 className='text-[#1bb57b] font-semibold mb-4 md:text-4xl text-3xl'>
            Advisory Board
          </h1>
          <p className='text-gray-400'>
            আইটেসারেক্ট টেকনোলিজস স্কোয়াড একটি বহুমুখী পেশাদার দল।
          </p>
        </div>
        <div className='py-6'>
          <div className=''>
            <div className='container px-6 mx-auto'>
              <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-10 md:grid-cols-2 xl:grid-cols-4'>
                {teamMembers?.map((teamMember) => (
                  <div key={teamMember?.id} className='space-y-3'>
                    <div className='cursor-pointer' title={teamMember?.name}>
                      <img
                        loading='lazy'
                        className='rounded-lg hover:-translate-y-2 duration-200 ease-in-out shadow-lg w-full object-cover'
                        src={
                          `https://itesseract.com.bd/master/` +
                          teamMember?.image
                        }
                        alt={teamMember?.name}
                      />
                      <div className='text-center'>
                        <h1 className='text-2xl font-bold mt-3 hover:text-[#1bb57b]'>
                          {teamMember?.name}
                        </h1>
                        <p className='text-gray-400'>
                          {teamMember?.designation}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdBoard;
