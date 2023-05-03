import React from "react";
import joseph from "../assets/joseph.svg";

const TestimonialCard = ({ name, message, title, image }) => {
  return (
    <div className="h-[500px]">
      <img
        src={image}
        alt=""
        className="h-[500px] w-[200px] rounded-2xl text-[#000]"
      />
      <h1>{name}</h1>
      <p>{message}</p>
    </div>
  );
};

export default TestimonialCard;
