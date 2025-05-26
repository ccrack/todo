import React from "react";

export default function TodoItem({ todo }) {
  return (
    <li key={todo.index}>
      <span>
          {todo.text}
      </span>
      <button>X</button>
    </li>
  );
}
