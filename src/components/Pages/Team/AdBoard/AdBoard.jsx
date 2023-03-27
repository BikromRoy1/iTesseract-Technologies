import React from "react";
import "./AdBoard.css";

const AdBoard = () => {

  const teamMembers = [
    {
      id: "01",
      name: "Sazzad Hossain, Ph.D.",
      img: `https://i.ibb.co/rw8YvVV/sazzad-sir.jpg`,
      title: "Chief Advisor",
    },
    {
      id: "02",
      name: "Professor Vincent Chang, PhD",
      img: "https://i.ibb.co/m5YYBNM/Professor-Vincent-Chang.jpg",
      title: "Vice Chancellor",
    },
    {
      id: "03",
      name: "Dr. Lafifa Jamal",
      img: "https://i.ibb.co/Wv8M1r9/Dr-Lafifa-Jamal.jpg",
      title: "Professor",
    },
    {
      id: "04",
      name: "Prof. DR. DIP NANDI",
      img: "https://i.ibb.co/KsTjYYB/director-dip.png",
      title: "Professor",
    },
  ];


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
          <section className=''>
            <div className='container px-6 mx-auto'>
              <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-10 md:grid-cols-2 xl:grid-cols-4'>
                {teamMembers?.map((teamMember, index) => (
                  <>
                    <div key={teamMember.id} className='space-y-3'>
                      <div className='cursor-pointer'>
                        <img
                          loading='lazy'
                          className='rounded-lg hover:-translate-y-2 duration-200 ease-in-out shadow-lg w-full object-cover'
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

export default AdBoard;
