import React, { useState } from "react";
import Todo from "../Pages/todo/Todo";

export default function TodoContainer() {
  const [todos, setTodos] = useState([
    {
      text: "Call Direct Auto Insurance to request coverage change",
      completed: false,
      id: "20399400",
    },
    {
      text: "Check if my car loan requires full coverage",
      completed: false,
      id: "03998538",
    },
    {
      text: "Fix bug in payment processing module",
      completed: false,
      id: "29850345",
    },
  ]);
  const [filter, setFilter] = useState("all");

  /* add todo method */
  const addTask = (text) => {
    setTodos([...todos, { text, completed: false, id: Date.now() }]);
  };

  /* remove todo method*/
  const removeTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  /*conpleted todo method */
  const conpletedTask = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  /*filtered method */
  const filtered = todos.filter((todo) =>
    filter === "all"
      ? true
      : filter === "completed"
      ? todo.completed
      : !todo.completed
  );
  return (
    <Todo
      todos={filtered}
      addTask={addTask}
      removeTask={removeTask}
      conpletedTask={conpletedTask}
      setFilter={setFilter}
    />
  );
}
