import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="newsContainer">
      <header>
        <h1 className="logo">W.</h1>
      </header>
      <ul className="navbar">
        <li className="list">
          <a className="link" href="/">
            Home
          </a>
        </li>
        <li className="list">
          <a className="link" href="/news">
            News
          </a>
        </li>
        <li className="list">
          <a className="link" href="/popular">
            Popular
          </a>
        </li>
        <li className="list">
          <a className="link" href="/trending">
            Trending
          </a>
        </li>
        <li className="list">
          <a className="link" href="/categories">
            Categories
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
