import { useState } from "react";

const Content = () => {

    const [displayText, setDisplayText] = useState("");

    const handleButtonClick = () => {
      const textarea = document.getElementById("myTextarea");
      setDisplayText(textarea.value);
    };

    return (
      <div className="form-area">
        <textarea id="myTextarea" rows="4" cols="50"></textarea>
        <button onClick={handleButtonClick} className="btn btn-warning">
          Submit
        </button>
        {displayText && <p>{displayText}</p>}
      </div>
    );
};

export default Content;