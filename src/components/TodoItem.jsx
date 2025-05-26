import React from "react";
import './TodoItem.css'

export default function TodoItem({ todo }) {
  return (
    <li key={todo.index}>
      <span>
          {todo.text}
      </span>
      <button className="btn-delete">X</button>
    </li>
  );
}
