import React from "react";
import "../css/Footer.css";

const footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <h4></h4>
        </div>
        <div className="row">
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="text-center">
        <p className="copyright">
          &copy; 2023
          <span className="copyright-name"> LLMLongPromptSplitter</span>
        </p>
      </div>
    </footer>
  );
};

export default footer;
