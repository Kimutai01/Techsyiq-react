import React from "react";
import callimg from "../assets/call.svg";

const Call = () => {
  return (
    <div className="flex flex-col items-center md:flex-row">
      <div>
        <img src={callimg} alt="" className="hidden md:block" />
      </div>
      <div className="md:ml-20 p-10 md:p-0">
        <h2 className="text-4xl mb-4">Not sure where you fit?</h2>
        <p>
          Talk to our educational advisors who will help you select the right
          course, prepare for admission, or just advise you on your next career
          goal.
        </p>
        <button className="bg-[#3778B8] text-white px-4 py-2 rounded-full mt-4">
          Book a call
        </button>
      </div>
    </div>
  );
};

export default Call;
