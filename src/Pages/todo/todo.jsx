import React, { useState } from "react";
import TaskFrom from "../../components/TaskFrom";
import TodoList from "../../components/TodoList";
import "./todo.css";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  /* add todo method */
  const addTask = (text) => {
    setTodos([...todos, { text, completed: false, id: Date.now()}]);
  };

  /* remove todo method*/
  const removeTask = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">Todos List</h1>
      <TaskFrom addTask={addTask} />
      <TodoList todos={todos} removeTask={removeTask}/>
    </div>
  );
}
