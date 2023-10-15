import React from "react";
import "../css/MainPrompt.css";

const MainPrompt = () => {
  return (
    <>
      <div className="main-prompt">
        <label className="main-prompt-textarea-label" htmlFor="main-prompt">
          Paste Your Prompt
        </label>
        <textarea
          name="MainPrompt"
          className="main-prompt-textarea"
          id=""
          cols="50"
          rows="20"
        ></textarea>
      </div>
    </>
  );
};

export default MainPrompt;
