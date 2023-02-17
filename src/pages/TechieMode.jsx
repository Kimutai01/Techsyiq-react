import React from "react";
import Hero from "../components/TechieMod/Hero";
import CourseFor from "../components/TechieMod/CourseFor";
import JobDescription from "../components/TechieMod/JobDescription";
import CourseOutline from "../components/TechieMod/CourseOutline";
import Tutors from "../components/TechieMod/Tutors";
import LearningProcess from "../components/TechieMod/LearningProcess";
import TuitonFees from "../components/TechieMod/TuitonFees";
import Faqs from "../components/TechieMod/Faqs";
import Footer from "../components/TechieMod/Footer";
const TechieMode = () => {
  return (
    <div>
      <Hero />
      <CourseFor />
      <JobDescription />
      <CourseOutline />
      <Tutors />
      <LearningProcess />
      <TuitonFees />
      <Faqs />
        <Footer />
    </div>
  );
};

export default TechieMode;
