import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NewsPage from "../pages/NewsPage";
import AndyMessenger from "../pages/CommentsSection";
import CommentsSection from "../pages/CommentsSection";

export default function Root() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/message" element={<CommentsSection />} />
      </Routes>
    </Router>
  );
}
