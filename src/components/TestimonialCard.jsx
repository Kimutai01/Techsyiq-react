import React from "react";
import joseph from "../assets/joseph.svg";

const TestimonialCard = ({ name, message, title, image }) => {
  return (
    <div>
      <img src={image} alt="" />
      <p>{message}</p>
      <h1>{name}</h1>
    </div>
  );
};

export default TestimonialCard;
