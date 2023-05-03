import React from "react";
import Hero from "../components/blog/Hero";
import Questions from "../components/blog/Questions";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/TechieMod/Footer";
import HomeFooter from "../components/HomeFooter";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Newsletter />
      <Questions />
      <HomeFooter />
    </div>
  );
};

export default Blog;
