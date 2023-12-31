import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import "./scss/_global.scss";
import "./scss/_typography.scss";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
