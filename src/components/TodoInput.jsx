import React from "react";

import { useState } from "react";

const TodoInput = () => {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit() {
    console.log("Key pressed");
  }
  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleSubmit();
    }
  }
  return (
    <div className="todo-input-form">
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Add a new todo..."
          className="todo-input"
        />

        <button
          className="add-btn"
          onClick={handleSubmit}
          disabled={!inputValue.trim()}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
