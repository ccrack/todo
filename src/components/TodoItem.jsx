import React from "react";
import "./TodoItem.css";

export default function TodoItem({ todo, removeTask, conpletedTask }) {
  return (
    <li className="list-item" key={todo.id}>
      <span onClick={()=>{conpletedTask(todo.id)}} style={{textDecoration: todo.completed ? 'line-through': 'none', cursor:'pointer'}}>
        {todo.text}
      </span>
      <button
        className="btn-delete"
        onClick={(e) => {
          e.preventDefault();
          removeTask(todo.id);
        }}
      >
        X
      </button>
    </li>
  );
}
