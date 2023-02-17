import React from "react";
import image5 from "../image-5.png";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <section className="bg-[#C83898] mt-10 pb-20">
        <div className="flex justify-around pt-10">
          <div className="w-1/2 md:ml-20 ml-4 text-white">
            <h1 className=" md:text-4xl text-2xl text-white">Make the right decision</h1>
            <p className="my-4">
              You're clicks away from embarking on an exciting and life-changing
              path.
            </p>

            <button className="border-white border-2 mt-10  px-4 py-2 text-white rounded-3xl ">
              Apply Now
            </button>
          </div>
          <div className="w-1/2">
            <img
              src={image5}
              alt=""
              className="rounded-b-full shadow-2xl shadow-pink-200"
            />
          </div>
        </div>
      </section>
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
    </div>
  );
};

export default Footer;
