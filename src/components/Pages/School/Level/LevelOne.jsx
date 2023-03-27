import React from 'react';

const LevelOne = ({
  clock,
  graph,
  cour,
  title,
  details,
  level,
  time,
  clockText,
  graphText,
  courText
}) => {
  return (
    <div>
      <section className="p-4 lg:p-8 ">
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col overflow-hidden gap-10 lg:flex-row">
            <div>
              <h2 className="text-4xl font-bold">{level}</h2>
              <p className=" mt-2 dark:text-gray-500">{time}</p>
            </div>
            <div className="flex flex-col  flex-1">
              <h3 className="text-2xl font-bold mb-4">{title}</h3>
              <p className=" dark:text-gray-500 mb-4 text-justify">{details}</p>
              <div className="flex items-center gap-3 mb-2">
                <img src={clock} alt="" />
                <h2 className="font-semibold">
                 {clockText}
                </h2>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <img width="23px" src={cour} alt="" />
                <h2 className="font-semibold">
                 {courText}
                </h2>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <img width="23px" src={graph} alt="" />
                <h2 className="font-semibold">
                 {graphText}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LevelOne;