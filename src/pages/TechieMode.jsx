import React from "react";
import Hero from "../components/TechieMod/Hero";
import CourseFor from "../components/TechieMod/CourseFor";
import JobDescription from "../components/TechieMod/JobDescription";
import CourseOutline from "../components/TechieMod/CourseOutline";
import Tutors from "../components/TechieMod/Tutors";
const TechieMode = () => {
  return (
    <div>
      <Hero />
      <CourseFor />
      <JobDescription />
      <CourseOutline />
      <Tutors />
    </div>
  );
};

export default TechieMode;
