import React from "react";
import Hero from "../components/about/Hero";
import Team from "../components/about/Team";
import Navbar from "../components/Navbar";
import Faqs from "../components/TechieMod/Faqs";
import Footer from "../components/TechieMod/Footer";
import LearningProcess from "../components/TechieMod/LearningProcess";
import Tutors from "../components/TechieMod/Tutors";
import HomeFooter from "../components/HomeFooter";

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Team />
      <Tutors />
      <LearningProcess />
      <Faqs />
      <HomeFooter />
    </div>
  );
};

export default About;
