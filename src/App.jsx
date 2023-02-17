import "./App.css";
import Call from "./components/Call";
import Courses from "./components/Courses";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import Why from "./components/Why";

function App() {
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

export default App;
