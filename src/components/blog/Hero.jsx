import React from "react";
import mail from "../..//assets/rectangle35.svg";

const Hero = () => {
  return (
    <div className="md:p-24">
      <div className=" mt-20">
        <h1 className="text-3xl text-[#3778B8] mb-6">Techsyiq Blog</h1>
        <p>
          Read about our students, their success stories, and experience at
          Techsyiq.
        </p>
        <div className="flex">
          <div className="border-r-2 border-[#3778B8] h-16 mt-4 mr-4 hidden md:block justify-center"></div>
          <div className="flex md:flex-row flex-col justify-center md:justify-start h-9 mt-8">
            <button className="bg-[#3778B8] rounded-full w-32 text-[#FFF] mr-4">
              All articles
            </button>
            <button className="bg-[#D8E6F3] w-40 rounded-full">
              Success stories
            </button>
            <button className="bg-[#D8E6F3] w-40 md:ml-6 rounded-full">
              Student experience
            </button>
            <button className="bg-[#D8E6F3] w-40 md:ml-6 rounded-full">
              Guides
            </button>
          </div>
        </div>
      </div>

      <div className="mt-20 flex md:flex-row flex-col">
        <div className="w-[100%] p-9 md:p-0">
          <img src={mail} alt="" />
        </div>
        <div className="p-9 md:p-0">
          <div className="flex">
            <p className="mr-2 text-[#3778B8]">News</p>
            <p className="border-r-2 border-[#000] h-5"></p>
            <p className="ml-2">June 23, 2022</p>
          </div>
          <div>
            <h2 className="text-2xl">
              Techsyiq wins Tech School of the year award.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit magna
              tortor bibendum lacus at morbi risus lectus. Pellentesque tortor
              facilisis volutpat sagittis ultricies scelerisque sollicitudin
              quis. Lorem sodales vivamus at potenti pretium hendrerit. Sem
              vestibulum, ultricies lacus, nibh arcu, vel duis sed. Tempus, id
              sed viverra nunc diam maecenas molestie. Enim egestas malesuada in
              eu id feugiat eget amet, maecenas. Morbi eu mauris, et sed amet ut
              aenean quam volutpat. Augue cras metus facilisis eget ornare
              tempus interdum sagittis pretium. Sed mauris ut in mi tellus
              venenatis porttitor sed id eget non et at neque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
