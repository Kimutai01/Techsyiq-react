import React from "react";
import circle from "../circle.png";
const JobDescription = () => {
  return (
    <div>
      <h1 className="text-4xl mt-10 ml-10">
        What job descriptions will fit you?
      </h1>
      <section className="bg-[#C83898] h-[80vh] rounded-2xl mx-16 mt-8">
        <div className="flex  pt-10">
          <img
            src={circle}
            className="ml-10"
            alt="circle"
            width={100}
            height={100}
          />
          <div className="flex flex-col ml-10 text-3xl text-white pt-2 ">
            <p>Role:</p>
            <p>Junior front-end developer</p>
          </div>
        </div>
       <p  className="border border-b-white  mt-6 mx-4 "/>

       <h1 className="text-4xl text-white mt-10 ml-10">
        Skills
       </h1>
       <section className="flex text-white justify-around mt-10">
        <div>
            Hrey
        </div>
        <div>
            Hrey
        </div>
        <div>
            Hrey
        </div>



       </section>

      
      </section>
    </div>
  );
};

export default JobDescription;
