import React from "react";
import { BsDot } from "react-icons/bs";

const Faqs = () => {
  return (
    <div className="mt-16">
      <h1 className="text-4xl text-center">FAQs </h1>
      <section className="flex justify-center flex-col items-center mt-20">
        <div className="shadow-xl w-[70%] rounded-2xl py-4 my-4  shadow-gray-300 flex justify-between">
          <div className="flex flex-col ml-10 text-[#7A7A7A] ">
            <p>You dedicate so much time to HTML and CSS. Why?</p>
          </div>
          <div className="text-[#C83898] text-4xl mr-10">+</div>
        </div>

        <div className="shadow-xl w-[70%] rounded-2xl py-4 my-4  shadow-gray-300 flex justify-between">
          <div className="flex flex-col ml-10 text-[#7A7A7A]  ">
            <p>Are your courses competitive?</p>
          </div>
          <div className="text-[#C83898] text-4xl mr-10">+</div>
        </div>
        <div className="shadow-xl w-[70%] rounded-2xl py-4 my-4  shadow-gray-300 flex justify-between">
          <div className="flex flex-col ml-10  text-[#7A7A7A] ">
            <p>Do you guarantee employment after the course</p>
          </div>
          <div className="text-[#C83898] text-4xl mr-10">+</div>
        </div>
        <div className="shadow-xl w-[70%] rounded-2xl py-4 my-4  shadow-gray-300 flex justify-between">
          <div className="flex flex-col ml-10 text-[#7A7A7A]  ">
            <p>Why don't you teach Angular?</p>
          </div>
          <div className="text-[#C83898] text-4xl mr-10">+</div>
        </div>
      </section>
    </div>
  );
};

export default Faqs;
