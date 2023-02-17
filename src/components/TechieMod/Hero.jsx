import React from "react";
import { BsDot } from "react-icons/bs";

import group from "../Group-63.png";

const Hero = () => {
  return (
    <div className="mt-20">
      <section className="flex flex-col gap-4  md:flex-row justify-between">
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

        <div className="mr-10">
          <img src={group} alt="group" width={450} height={500} />
        </div>
      </section>

      <section className="text-white py-16 mt-8 px-8 w-full bg-[#C83898] ">
        Take your first steps in front-end development. Our course has a
        project-based approach, so you will create your own project from scratch
        during the HTML/CSS, JavaScript, and Vue.js framework modules. Gain
        knowledge to master the profession independently and learn to speak the
        tech community's and developers' language.
      </section>
    </div>
  );
};

export default Hero;
