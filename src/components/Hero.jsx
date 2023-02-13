import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import hero from "../assets/hero.svg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="absolute top-28 left-0">
      <div className="grid md:grid-cols-2 md:gap-4 md:pl-12">
        <div className="flex flex-col items-start">
          <h1
            className="text-[#4D4E4E] flex flex-col m-0 items-start text-4xl md:text-7xl"
            style={{ lineHeight: "100px" }}
          >
            Web development <span className="text-[#3778B8]">Bootcamp</span>
          </h1>

          <p className="sub">
            From Africa’s leading technology and innovation hub, Kenya, we are
            planting the seeds for the next breed of techies, and with it a
            robust, thriving community of learning, sharing, having fun, and
            nurturing software developers. We welcome everyone!
          </p>

          <div>
            {/* A horizontal line before a span that has words alongside each other*/}
            <div className="flex">
              <div
                className=" w-12 bg-[#F79F28] mt-3"
                style={{ height: "1.5px" }}
              ></div>
              <span className="text-[#F79F28]">
                <Typewriter
                  options={{
                    strings: ["PSST,FULLY REMOTE"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
          </div>

          <div className="flex items-center mt-4">
            <button className="bg-[#3778B8] text-white px-4 py-2 rounded-full">
              Apply
            </button>
            <button className="bg-[#D4F6FF4D] text-[#3778B8] px-4 py-2 rounded-full ml-4">
              Book a call
            </button>
          </div>
        </div>

        <div className="md:pl-20 mt-10 ">
          <img
            src={hero}
            alt="hero image"
            className="md:rounded-l-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
