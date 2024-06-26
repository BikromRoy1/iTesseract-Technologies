import React, { useEffect, useState } from "react";
import { BiChevronsRight } from "react-icons/bi";
import welcome from "../../../Images/icons/welcome.png";
import Analytics from "../Analytics/Analytics";
import "./DBHeader.css";

const DBHeader = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update the current date every second

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // Function to format the date in the desired format: "Month Day, Year"
  const formatDate = (date) => {
    const options = { month: "long", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <section className="pl-0 md:pl-7">
      <div className="p-6">
        <div className="page-header flex justify-between items-center pb-[1.25rem]">
          <h4 className="text-[1.125rem] font-semibold"> ড্যাশবোর্ড</h4>
          <ol className="flex items-center gap-2">
            <li className="flex items-center gap-2">
              <span className="text-[#1BB57B] font-medium">ড্যাশবোর্ড</span>{" "}
              <BiChevronsRight className="text-[#8c9097]" />
            </li>
            <li className="text-[15px] font-medium">ওভারভিউ</li>
          </ol>
        </div>
        <div className="welcome">
          <div className="pl-[15px] pr-[15px] lg:pl-[40px] lg:pr-[40px] py-5">
            <div className="grid gird-cols-1 md:grid-cols-3 grid-rows-1 gap-4">
              <div className="md:col-span-2 content">
                <span className="mb-[5px] text-[#cccce1] font-bold block tracking-wide text-sm lg:text-lg">
                  {formatDate(currentDate)}
                </span>
                <h2 className="mb-[2px] text-[20px] md:text-[30px] text-white font-semibold tracking-wider">
                  {" "}
                  Welcome Back, <span className="font-bold">Abdul Hamid!</span>
                </h2>
                <p className="text-[#cfcfd8] text-base">
                  See What’s happening with your courses and students.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 lg:gap-4">
                  <div>
                    <div className="p-[15px] mt-[15px] bg-[#f2f1f9] rounded-[4px]">
                      <span className="uppercase block text-[#4c4a68] text-[14px] mb-1 font-medium">
                        COURSES
                      </span>
                      <h4 className="text-[#6560f0] mb-0 font-extrabold text-[24px]">
                        23
                      </h4>
                    </div>
                  </div>
                  <div>
                    <div className="p-[15px] mt-[15px] bg-[#f2f1f9] rounded-[4px]">
                      <span className="uppercase block text-[#4c4a68] text-[14px] mb-1 font-medium">
                        CERTIFICATES
                      </span>
                      <h4 className="text-[#06b48a] mb-0 font-extrabold text-[24px]">
                        01
                      </h4>
                    </div>
                  </div>
                  <div>
                    <div className="p-[15px] mt-[15px] bg-[#f2f1f9] rounded-[4px]">
                      <span className="uppercase block text-[#4c4a68] text-[14px] mb-1 font-medium">
                        SCORE
                      </span>
                      <h4 className="text-[#ef2929] mb-0 font-extrabold text-[24px]">
                        4.8
                      </h4>
                    </div>
                  </div>
                  <div>
                    <div className="p-[15px] mt-[15px] bg-[#f2f1f9] rounded-[4px]">
                      <span className="uppercase block text-[#4c4a68] text-[14px] mb-1 font-medium">
                        HRS LEARNED
                      </span>
                      <h4 className="text-[#1fb1e6] mb-0 font-extrabold text-[24px]">
                        822
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-start-3 flex justify-center items-center">
                <img
                  src={welcome}
                  loading="lazy"
                  alt="welcome"
                  className="object-cover h-[100%] w-[100%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Analytics />
    </section>
  );
};

export default DBHeader;
