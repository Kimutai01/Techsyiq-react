import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Courses from "../components/Courses";
import Call from "../components/Call";
import Testimonials from "../components/Testimonials";
import Why from "../components/Why";
import Stats from "../components/Stats";
import Newsletter from "../components/Newsletter";
import Footer from "../components/TechieMod/Footer";
import HomeFooter from "../components/HomeFooter";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Why />
      <Courses />
      <Call />
      <Testimonials />
      <Stats />
      <Newsletter />
      <HomeFooter />
    </div>
  );
}

export default Home;
