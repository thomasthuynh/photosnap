import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Stories from "./pages/Stories";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Overlay from "./ui/Overlay";

import "./scss/_global.scss";
import "./scss/_typography.scss";

function App() {
  const [modalToggled, setModalToggled] = useState<boolean>(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="app">
      {modalToggled && <Overlay />}
      <Nav modalToggled={modalToggled} setModalToggled={setModalToggled} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
