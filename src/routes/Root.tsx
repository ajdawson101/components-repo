import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Advice from "../pages/Advice";

export default function Root() {
  return (
    <Router>
      <Routes>
        <Route path="/get-advice" element={<Advice />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
