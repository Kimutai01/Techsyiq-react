import React from "react";

const Courses = () => {
  return (
    <div className="pl-20 pr-20 pb-20">
      <h1 className="text-5xl mb-6">Our courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="shadow-md p-4 rounded-lg">
          <img src="" alt="" />
          <div className="flex align-center mb-4">
            <div className="border-r-2 border-[#C83898] h-7 mt-4 mr-4 "></div>
            <h2 class="text-[#C83898] text-2xl mt-4 text-start relative">
              Techie mode
            </h2>
          </div>
          <p className="text-start">
            This is the basic module for a person who has little to no skills in
            the tech world. The main aim is to introduce anyone to the tech
            industry and prepare them thoroughly for a Software Engineering
            career.
          </p>
        </div>

        <div className="shadow-md p-4 rounded-lg">
          <img src="" alt="" />
          <div className="flex align-center mb-4">
            <div className="border-r-2 border-[#F79F28] h-7 mt-4 mr-4 "></div>
            <h2 class="text-[#F79F28] text-2xl mt-4 text-start relative">
              Techie mode
            </h2>
          </div>
          <p className="text-start">
            This is the basic module for a person who has little to no skills in
            the tech world. The main aim is to introduce anyone to the tech
            industry and prepare them thoroughly for a Software Engineering
            career.
          </p>
        </div>

        <div className="shadow-md p-4 rounded-lg">
          <img src="" alt="" />
          <div className="flex align-center mb-4">
            <div className="border-r-2 border-[#3778B8] h-7 mt-4 mr-4 "></div>
            <h2 class="text-[#3778B8] text-2xl mt-4 text-start relative">
              Techie mode
            </h2>
          </div>
          <p className="text-start">
            This is the basic module for a person who has little to no skills in
            the tech world. The main aim is to introduce anyone to the tech
            industry and prepare them thoroughly for a Software Engineering
            career.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Courses;
