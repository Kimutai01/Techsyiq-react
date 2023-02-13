import React from "react";
import ill from "../assets/illustration.svg";
import illustration from "../assets/illustration2.svg";

const Why = () => {
  return (
    <div className="pt-20">
      <h1 className="text-black text-4xl md:text-7xl overflow-hidden mb-10">
        Why us?
      </h1>
      {/*cards with image and a paragraph 3 per row*/}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 shadow-lg px-8 pb-10">
        <div className="">
          <img src={ill} alt="" />
          <h2 className="text-[#3778B8] text-2xl mt-4 text-start">
            Flipped classrooms
          </h2>
          <p className="text-start">
            Study theory at home and focus on practice in live classes, where
            you’ll be guided by one of our expert tutors.
          </p>
        </div>

        <div>
          <img src={illustration} alt="" />
          <h2 className="text-[#3778B8] text-2xl mt-4 text-start">
            Flipped classrooms
          </h2>
          <p className="text-start">
            Study theory at home and focus on practice in live classes, where
            you’ll be guided by one of our expert tutors.
          </p>
        </div>

        <div>
          <img src={illustration} alt="" />
          <h2 className="text-[#3778B8] text-2xl mt-4 text-start">
            Flipped classrooms
          </h2>
          <p className="text-start">
            Study theory at home and focus on practice in live classes, where
            you’ll be guided by one of our expert tutors.
          </p>
        </div>

        <div>
          <img src={illustration} alt="" />
          <h2 className="text-[#3778B8] text-2xl mt-4 text-start">
            Flipped classrooms
          </h2>
          <p className="text-start">
            Study theory at home and focus on practice in live classes, where
            you’ll be guided by one of our expert tutors.
          </p>
        </div>

        <div>
          <img src={illustration} alt="" />
          <h2 className="text-[#3778B8] text-2xl mt-4 text-start">
            Flipped classrooms
          </h2>
          <p className="text-start">
            Study theory at home and focus on practice in live classes, where
            you’ll be guided by one of our expert tutors.
          </p>
        </div>

        <div>
          <img src={illustration} alt="" />
          <h2 className="text-[#3778B8] text-2xl mt-4 text-start">
            Flipped classrooms
          </h2>
          <p className="text-start">
            Study theory at home and focus on practice in live classes, where
            you’ll be guided by one of our expert tutors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Why;
