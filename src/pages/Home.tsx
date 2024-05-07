import { Link, BrowserRouter as Router } from "react-router-dom";
import "../App.css";

export default function Home() {
  return (
    <>
      <Link className="button" to={"/get-advice"}>
        Enter
      </Link>
    </>
  );
}
