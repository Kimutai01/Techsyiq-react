import "./App.css";
import Courses from "./components/Courses";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Why from "./components/Why";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Why />
      <Courses />
    </div>
  );
}

export default App;
