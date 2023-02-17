import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Courses from "../components/Courses";
import Call from "../components/Call";
import Testimonials from "../components/Testimonials";
import Why from "../components/Why";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Why />
      <Courses />
      <Call />
      <Testimonials />
    </div>
  );
}

export default Home;
