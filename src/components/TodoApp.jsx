import React, { useState } from "react";
import TodoInput from "./TodoInput";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <h1>Todo list</h1>
          <p className="subtitle">
            {todos.length} {todos.length === 1 ? "task" : "tasks"}
          </p>
        </header>

        {/* TodoInput */}
        <TodoInput />
      </div>
    </div>
  );
};

export default TodoApp;
