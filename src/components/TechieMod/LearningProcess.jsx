import React from "react";
import rectangle27 from "../Rectangle-27.png";
import group54 from "../group-54.png";
const LearningProcess = () => {
  return (
    <div className="mt-20 ">
      <h1 className="text-4xl ml-20">Learning Process</h1>
      <p className="ml-20 mt-4 w-[50%] text-[#7A7A7A]">
        We use the flipped classroom, which means you study theory on your own
        and practice it in class with the teacher's guidance and classmates'
        support.
      </p>

      <section className="relative bg-[#3778B8]/20 mt-16 h-[100vh] mx-20 rounded-2xl">
        <div className="flex justify-around pt-10">
          <div className="w-1/2 pl-10">
            <img src={rectangle27} alt="rectangle27" width={400} height={600} />
          </div>

          <div className="w-1/2 pt-20">
            <h1>Theory</h1>
            <h1 className="text-[#C83798] text-4xl">70 hours +</h1>
            <p className="w-[80%] mt-4 text-[#7A7A7A]">
              Before every live class, you will get access to an expertly
              crafted set of theoretical resources (videos, external links, and
              terminology). In class, your tutor will explain anything you may
              have found difficult during preparation.
            </p>

            <h1>Live Classes</h1>
            <h1 className="text-[#C83798] text-4xl">126 hours </h1>
            <p className="w-[80%] mt-4 text-[#7A7A7A]">
              In live classes, you will have homework discussions with your
              teacher, complete practical assignments, and work on group and
              individual projects.
            </p>
          </div>
        </div>
        <img
          src={group54}
          alt="group54"
          className="absolute -bottom-24 left-12"
        />
      </section>

      <div className="mt-20 ml-20">
        <h1 className="text-4xl">Career Support</h1>
        <p className="w-[50%] mt-4 text-[#7A7A7A]">
          We'll assist you with writing your first CV, make sure you nail your
          interviews, and help you navigate the job market. Our goal is to get
          you started in the tech industry, not just pass a course.
        </p>
      </div>
    </div>
  );
};

export default LearningProcess;
