import React from "react";
import { BsDot } from "react-icons/bs";

const Hero = () => {
  return (
    <div>
      <section className="flex  justify-between">
        <div className="flex flex-col ml-10 ">
          <p className="text-gray-400 text-sm">Beginner Level | Remote</p>

          <h1 className="text-4xl text-[#C83898] ">Techie Mode</h1>
          <div className="grid grid-cols-2 gap-10 text-[#7A7A7A]">
            <ul className="list-disc">
              <li className="flex">
                <BsDot className="text-3xl pb-2" />
                Live Classes
              </li>
              <li className="flex">
                <BsDot className="text-3xl pb-2" />
                Upto 15 students per class
              </li>
            </ul>
            <ul>
              <li className="flex">
                <BsDot className="text-3xl pb-2" />8 weeks
              </li>
              <li className="flex">
                <BsDot className="text-3xl pb-2" />
                Course materials and classes are in english
              </li>
            </ul>
          </div>
          <button className="mt-10 bg-[#C83898] w-36 text-center text-white rounded-3xl py-2 px-4">
            <span>Apply Now</span>
          </button>
        </div>
        <div>Hey</div>
      </section>
    </div>
  );
};

export default Hero;
