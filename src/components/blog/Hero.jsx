import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="p-24 mt-20">
        <h1 className="text-3xl text-[#3778B8] mb-6">Techsyiq Blog</h1>
        <p>
          Read about our students, their success stories, and experience at
          Techsyiq.
        </p>
        <div className="flex">
          <div className="border-r-2 border-[#3778B8] h-16 mt-4 mr-4 "></div>
          <div className="flex h-9 mt-8">
            <button className="bg-[#3778B8] rounded-full w-32 text-[#FFF] mr-4">
              All articles
            </button>
            <button className="bg-[#D8E6F3] w-40 rounded-full">
              Success stories
            </button>
            <button className="bg-[#D8E6F3] w-40 ml-6 rounded-full">
              Student experience
            </button>
            <button className="bg-[#D8E6F3] w-40 ml-6 rounded-full">
              Guides
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
