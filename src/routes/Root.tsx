import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/Home";

export default function Root() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
