import React from "react";
import "./TodoItem.css";

export default function TodoItem({ todo, removeTask }) {
  return (
    <li className="list-item" key={todo.id}>
      <span>{todo.text}</span>
      <button className="btn-delete" onClick={() =>{removeTask(todo.id)}}>X</button>
    </li>
  );
}
