import Home from "./pages/Home";
import TechieMode from "./pages/TechieMode";
import { Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/techie-mode" element={<TechieMode />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
