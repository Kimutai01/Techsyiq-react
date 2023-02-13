import React from "react";
import { BsDot } from "react-icons/bs";

const CourseOutline = () => {
  return (
    <div className="mt-16">
      <h1 className="text-4xl text-center">Course Outline</h1>
      <section className="flex justify-center flex-col items-center">
        <div className="shadow-xl w-[70%] rounded-2xl py-2 my-4  shadow-gray-300 flex justify-between">
          <div className="flex flex-col ml-10 ">
            <p>HTML & CSS</p>
            <p className="text-[#C83898] flex">
              60 hours <BsDot className="text-[#C83898] text-3xl pb-2" /> 24
              topics
            </p>
          </div>
          <div className="text-[#C83898] text-4xl mr-10">+</div>
        </div>

        <div className="shadow-xl w-[70%] rounded-2xl py-2 my-4  shadow-gray-300 flex justify-between">
          <div className="flex flex-col ml-10 ">
            <p>Javacript</p>
            <p className="text-[#C83898] flex">
              40 hours <BsDot className="text-[#C83898] text-3xl pb-2" /> 15 topics
            </p>
          </div>
          <div className="text-[#C83898] text-4xl mr-10">+</div>
        </div>
        <div className="shadow-xl w-[70%] rounded-2xl py-2 my-4  shadow-gray-300 flex justify-between">
          <div className="flex flex-col ml-10 ">
            <p>Front-End frameworks and plugin</p>
            <p className="text-[#C83898] flex">
            28 hours <BsDot className="text-[#C83898] text-3xl pb-2" /> 9 topics
            </p>
          </div>
          <div className="text-[#C83898] text-4xl mr-10">+</div>
        </div>
      </section>
    </div>
  );
};

export default CourseOutline;
