import React from "react";
import "../css/Navbar.css";
const NavBar = () => {
  return (
    <nav>
      <div className="logo">LLMLongPromptSplitter</div>
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
