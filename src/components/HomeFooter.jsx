import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const HomeFooter = () => {
  return (
    <section className=" mt-10 pb-10">
      <div className="flex justify-between mx-16">
        <div className="flex flex-col">
          <p className="text-[#3778B8] text-2xl font-bold">TECHSYCIQ</p>

          <div>
            <p>Techsyiq School</p>
            <p>Juja, Kenya</p>
          </div>

          <div className="flex gap-4 mt-8">
            <p>©Techsyiq School 2022</p>
            <p>Privacy Policy </p>
            <p>Terms and Conditions</p>
          </div>
        </div>
        <div className="flex flex-col">
          <p>Back to the top</p>

          <div>
            <p>+254 701 234 567</p>
            <p>info@techsyiq.com</p>
          </div>
          <div className="flex gap-4 mt-8">
            <p>
              <BsTwitter />
            </p>
            <p>
              <RiInstagramFill />
            </p>
            <p>
              <FaLinkedinIn />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFooter;
