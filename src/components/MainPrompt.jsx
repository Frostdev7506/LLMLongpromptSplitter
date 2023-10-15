import React, { useState } from "react";
import "../css/MainPrompt.css";

const MainPrompt = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

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
        <label className="llm-type" htmlFor="llm-type">
          Choose LLM Type:
        </label>
        <select name="llm-type" id="llm-type" onChange={handleSelectChange}>
          <option value="">--Please choose an option--</option>
          <option value="openai">Chat GPT 3.5</option>
          <option value="bing">Bing Chat GPT 4</option>
          <option value="bard">Bard</option>
          <option value="custom">Custom</option>
        </select>
        {selectedOption === "custom" && (
          <>
            <label className="custom-input-label" htmlFor="custom-input">
              Custom Input:
            </label>
            <input className="custom-input" type="text" id="custom-input" />
          </>
        )}
        <button type="submit">Split</button>
      </div>
    </>
  );
};

export default MainPrompt;
