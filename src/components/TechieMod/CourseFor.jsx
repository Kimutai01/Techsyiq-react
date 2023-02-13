import React from "react";
import Frame1 from "../Frame-1.png";
import Frame2 from "../Frame-2.png";
import Frame3 from "../Frame-3.png";
const CourseFor = () => {
  return (
    <>
      <h1 className="text-4xl mt-10 ml-10">Who is this course for?</h1>

      <section className="flex justify-center ml-20 mt-8">
        <div>
          <img src={Frame1} alt="Frame1" width={300} height={300} />
          <h1>You are starting or switching a career</h1>
          <p className="text-gray-400 text-sm w-[70%]">
            You'd like to enter the tech world, and front-end development suits
            your needs the best. Or you'd like to switch to development from
            another tech profession to understand where to start and get some
            relevant knowledge.
          </p>
        </div>

        <div>
          <img src={Frame2} alt="Frame1" width={300} height={300} />
          <h1 className="w-[80%]">
            You've run into a dead-end with self-education
          </h1>
          <p className="text-gray-400 text-sm w-[70%]">
            You may have tried web layout, and you're following trends in
            development. But you'd like to gather your knowledge, advance your
            skills, and get feedback from industry experts.
          </p>
        </div>
        <div>
          <img src={Frame3} alt="Frame1" width={300} height={300} />
          <h1>You're a PM, a BA, or a product owner</h1>
          <p className="text-gray-400 text-sm w-[70%]">
            You're already working in IT and aiming to understand developers
            better. Furthermore, you want to speak your colleagues' language,
            gain technical knowledge to back up your decisions, and comprehend
            the code.
          </p>
        </div>
      </section>
    </>
  );
};

export default CourseFor;
