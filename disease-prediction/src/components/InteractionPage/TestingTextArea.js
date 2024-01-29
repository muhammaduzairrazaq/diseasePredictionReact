import React, { useState } from "react";

const AutoResizingTextarea = () => {
  const [textareaValue, setTextareaValue] = useState("");
  const [textareaHeight, setTextareaHeight] = useState(40); // Initial height

  const handleInput = (event) => {
    const { value, scrollHeight, clientHeight } = event.target;
    setTextareaValue(value);
    const newHeight = Math.max(scrollHeight, clientHeight);
    setTextareaHeight(newHeight);
  };

  return (
    <textarea
      //   value={textareaValue}
      style={{
        height: `${textareaHeight}px`,
        overflow: "hidden", // Hide the scrollbar
      }}
      onInput={handleInput}
      placeholder="Enter text..."
    />
  );
};

export default AutoResizingTextarea;
