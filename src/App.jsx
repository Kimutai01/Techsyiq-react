import "./App.css";
import Home from "./pages/Home";
import TechieMode from "./pages/TechieMode";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/techie-mode" element={<TechieMode />} />
    </Routes>
  );
}

export default App;
