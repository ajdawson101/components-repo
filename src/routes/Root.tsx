import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CommentsSection from "../pages/CommentsSection";
import Home from "../pages/Home";
import NewsPage from "../pages/NewsPage";
import ToDo from "../pages/ToDo";

export default function Root() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/message" element={<CommentsSection />} />
        <Route path="todo" element={<ToDo />} />
      </Routes>
    </Router>
  );
}
