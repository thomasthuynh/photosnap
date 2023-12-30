import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import "./scss/_global.scss";
import "./scss/_typography.scss";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
