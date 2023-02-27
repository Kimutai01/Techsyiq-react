import Home from "./pages/Home";
import TechieMode from "./pages/TechieMode";
import { Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/techie-mode" element={<TechieMode />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}

export default App;
