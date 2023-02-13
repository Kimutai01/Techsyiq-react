import React from "react";
import circle from "../circle.png";
import { BsDot } from "react-icons/bs";
const JobDescription = () => {
  return (
    <div>
      <h1 className="text-4xl mt-10 ml-10">
        What job descriptions will fit you?
      </h1>
      <section className="bg-[#C83898]  pt-6 pb-12 rounded-2xl mx-16 mt-8">
        <div className="flex  pt-10">
          <img
            src={circle}
            className="ml-10"
            alt="circle"
            width={100}
            height={100}
          />
          <div className="flex flex-col ml-10 text-3xl text-white pt-2 ">
            <p>Role:</p>
            <p>Junior front-end developer</p>
          </div>
        </div>
        <p className="border border-b-white  mt-6 mx-4 " />

        <h1 className="text-4xl text-white mt-10 ml-10">Skills</h1>
        <section className="flex text-white justify-around mt-10">
          <ul>
            <li className="flex">
              <BsDot className="text-3xl pb-2" />
              Knowledge of HTML and skills of semantic markup
            </li>
            <li className="flex">
              <BsDot className="text-3xl pb-2 " />
              Experience in creating CSS animations, transformations and using
              other styles
            </li>
            <li className="flex">
              <BsDot className="text-3xl pb-2" />
              Skills in using pre- and post-processors
            </li>
            <li className="flex">
              <BsDot className="text-3xl pb-2" />
              Skills of working with basic JavaScript tools
            </li>
            <li className="flex">
              <BsDot className="text-3xl pb-2" />
              Experience working with web servers
            </li>
          </ul>
          <ul>
            <li className="flex">
              <BsDot className="text-3xl pb-2" />
              Experience with Git and GitHub
            </li>
            <li className="flex">
              <BsDot className="text-3xl pb-2 " />
              Understanding of BEM methodology
            </li>
            <li className="flex">
              <BsDot className="text-3xl pb-2" />
              Experience with Figma
            </li>
            <li className="flex">
              <BsDot className="text-3xl pb-2" />
              Ability to work with console and DevTools, check the code for
              errors, perform debugging
            </li>
            <li className="flex">
              <BsDot className="text-3xl pb-2" />
              Knowledge of the logic of client-server architecture when building
              applications
            </li>
          </ul>
          <ul>
            <li className="flex">
              <BsDot className="text-3xl pb-2" />
              Skills in applying CSS-styles and visual effects to the layout
            </li>
            <li className="flex">
              <BsDot className="text-3xl pb-2 " />
              Experience creating responsive websites
            </li>
            <li className="flex">
              <BsDot className="text-3xl pb-2" />
              Experience using JavaScript (primitives, objects, arrays,
              functions)
            </li>
            <li className="flex">
              <BsDot className="text-3xl pb-2" />
              Experience with manipulating the DOM tree
            </li>
            <li className="flex">
              <BsDot className="text-3xl pb-2" />
              Experience in creating web applications with Vue.js
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
};

export default JobDescription;
