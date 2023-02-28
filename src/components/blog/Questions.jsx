import React, { useState } from "react";

const Questions = () => {
  const [isFirstDivOpen, setIsFirstDivOpen] = useState(false);
  const [isSecondDivOpen, setIsSecondDivOpen] = useState(false);
  const [isThirdDivOpen, setIsThirdDivOpen] = useState(false);

  const handleToggleFirstDiv = () => {
    setIsFirstDivOpen(!isFirstDivOpen);
  };

  const handleToggleSecondDiv = () => {
    setIsSecondDivOpen(!isSecondDivOpen);
  };

  const handleToggleThirdDiv = () => {
    setIsThirdDivOpen(!isThirdDivOpen);
  };

  return (
    <div className="mt-16">
      <h1 className="text-4xl text-center">Course Outline</h1>
      <section className="flex justify-center flex-col items-center">
        <div className="toggle-container shadow-xl w-3/4 rounded-2xl py-2 my-4 shadow-gray-300 flex justify-between">
          <div className="flex flex-col ml-10 w-[70%]">
            <p>You dedicate so much time to HTML and CSS. Why?</p>
            <p className={isFirstDivOpen ? "" : "hidden"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              auctor consectetur aliquam.
            </p>
          </div>
          <div
            className="toggle-button text-[#C83898] text-4xl mr-10 transition-transform"
            onClick={handleToggleFirstDiv}
          >
            {isFirstDivOpen ? "-" : "+"}
          </div>
        </div>
        <div className="toggle-container shadow-xl w-[70%] rounded-2xl py-2 my-4  shadow-gray-300 flex justify-between">
          <div className="flex pt-3 flex-col ml-10 ">
            <p>Are your courses competitive?</p>
            <p className={isSecondDivOpen ? "" : "hidden"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              auctor consectetur aliquam.
            </p>
          </div>
          <div
            className="toggle-button text-[#C83898] text-4xl mr-10 transition-transform"
            onClick={handleToggleSecondDiv}
          >
            {isSecondDivOpen ? "-" : "+"}
          </div>
        </div>

        <div className="toggle-container shadow-xl w-[70%] rounded-2xl py-2 my-4  shadow-gray-300 flex justify-between">
          <div className="flex flex-col pt-3 ml-10 ">
            <p>Why don’t you teach Angular?</p>
            <p className={isThirdDivOpen ? "" : "hidden"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              auctor consectetur aliquam.
            </p>
          </div>
          <div
            className="toggle-button text-[#C83898] text-4xl mr-10 transition-transform"
            onClick={handleToggleThirdDiv}
          >
            {isThirdDivOpen ? "-" : "+"}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Questions;
