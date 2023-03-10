import React from "react";

const Stats = () => {
  return (
    <div className="flex md:flex-row flex-col items-center  md:justify-around py-20">
      <div className="">
        <p className="text-[#3778B8] text-7xl font-bold">200+</p>
        <p className="text-[#7A7A7A]">employed alumni</p>
      </div>
      <div className="mt-10">
        <p className="text-[#3778B8] text-7xl font-bold">3</p>
        <p className="text-[#7A7A7A]">Cohorts graduated</p>
      </div>
      <div className="mt-10">
        <p className="text-[#3778B8] text-7xl font-bold">100%</p>
        <p className="text-[#7A7A7A]">Employment rate</p>
      </div>
    </div>
  );
};

export default Stats;
