import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Stories from "./pages/Stories"
import Features from "./pages/Features";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import "./scss/_global.scss";
import "./scss/_typography.scss";

function App() {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/features" element={<Features />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
