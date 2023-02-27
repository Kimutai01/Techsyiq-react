import React from "react";
import mail from "../assets/mail.svg";

const Newsletter = () => {
  return (
    <div className="p-16 flex md:flex-row flex-col-reverse bg-[#E1EBF4] ">
      <div className="mt-24">
        <h4 className="text-[#3778B8] text-3xl">Subscribe to our newsletter</h4>
        <p className="text-[#7A7A7A] my-6">
          Receive news, updates and new blog posts right on your mail. No spam,
          no junk, just what you need to stay in the know about what going on at
          Techsyiq.
        </p>

        <form>
          <input
            className="bg-[#CDE4F975] w-[100%] px-4 py-2 mb-4"
            type="email"
            placeholder="Your email"
          />
          <div className="flex">
            <input type="checkbox" />
            <p className="pl-2">
              By subscribing, you agree to our terms and conditions
            </p>
          </div>
          <button className="bg-[#3778B8] rounded-full w-[110px] py-2 mt-6">
            Subscribe
          </button>
        </form>
      </div>
      <div className="ml-10 mr-10">
        <img src={mail} alt="" />
      </div>
    </div>
  );
};

export default Newsletter;
