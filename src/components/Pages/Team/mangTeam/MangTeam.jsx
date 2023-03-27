import React from 'react';
import './MangTeam.css';

const MangTeam = () => {

     const teamMembers = [
       {
         id: "01",
         name: "Abdul Hamid",
         img: `https://i.ibb.co/crxbtj2/abdulhamid.png`,
         title: "CEO",
       },
       {
         id: "02",
         name: "Amit Ghosh",
         img: "https://i.ibb.co/q0Cj1Bf/amit.png",
         title: "Founder & CTO",
       },
       {
         id: "03",
         name: "Uday",
         img: "https://i.ibb.co/C2GCnxh/uday.png",
         title: "Lead, Innovation & Operations",
       },
       {
         id: "04",
         name: "Kashafaddouza Chowdhury",
         img: "https://i.ibb.co/44QBhzc/sujon.png",
         title: "Lead, Finance & Admin",
       },
     ];

    return (
      <div className='mangment_Boarder_bg'>
        <div className='py-16'>
          <div className='text-center '>
            <h1 className='text-[#1bb57b] font-semibold mb-4 md:text-4xl text-3xl'>
              ম্যানেজমেন্ট টীম
            </h1>
            <p className='text-gray-400'>
              আইটেসারেক্ট টেকনোলিজস ম্যানেজমেন্ট টীম
            </p>
          </div>
          <div className='py-6'>
            <section className=''>
              <div className='container px-6 mx-auto'>
                <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-10 md:grid-cols-2 xl:grid-cols-4'>
                  {teamMembers?.map((teamMember, index) => (
                    <>
                      <div key={teamMember.id} className='space-y-3'>
                        <div className='cursor-pointer'>
                          <img
                            className='rounded-lg hover:-translate-y-2 duration-200 ease-in-out  shadow-lg w-full object-cover'
                            src={teamMember.img}
                            alt=''
                          />
                          <div className='text-center'>
                            <h1 className='text-2xl font-bold mt-3 hover:text-[#1bb57b]'>
                              {teamMember?.name}
                            </h1>
                            <p className='text-gray-400'>{teamMember?.title}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
};

export default MangTeam;