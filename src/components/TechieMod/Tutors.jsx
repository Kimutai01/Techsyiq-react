import React from "react";
import vector from "../Vector.png";
import vector2 from "../Vector-1.png";
import vector3 from "../Vector-2.png";
import image4 from "../image-4.png";
const Tutors = () => {
  return (
    <div className="bg-[#C83798]/20 mt-16 md:h-[100vh] h-full">
      <section className="pt-10 ml-8 flex ">
        <img
          src={vector}
          alt="vector"
          className="mx-2"
          width={100}
          height={100}
        />
        <img
          src={vector2}
          alt="vector"
          className="mx-2"
          width={100}
          height={100}
        />
        <img
          src={vector3}
          alt="vector"
          className="mx-2"
          width={100}
          height={100}
        />
      </section>

      <div className="flex md:flex-row flex-col  mt-10">
        <div className="md:w-1/2">
          <img
            src={image4}
            alt="image4"
            width={600}
            height={600}
            className="rounded-r-full"
          />
        </div>
        <div className="md:w-1/2 pt-20">
          <h1 className="text-4xl">Our Tutors</h1>
          <p className="py-6 md:py-0 text-md text-[#7A7A7A] mt-10">
            All tutors pass multiple interviews to ensure aligning values, as
            well as impeccable soft and technical skills. The final step is a
            demo class where they teach a topic to other teachers. Our team of
            methodologists supports and trains them continuously. This is the
            place where industry experts become great teachers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tutors;
