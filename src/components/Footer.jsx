import React from "react";
import "../css/Footer.css";

const footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6"></div>
        </div>
      </div>
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
