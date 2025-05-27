import React, { useState } from "react";
import TaskFrom from "../../components/TaskFrom";
import TodoList from "../../components/TodoList";
import "./todo.css";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

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
    const filtered = todos.filter(todo =>
      filter === 'all'? true:
      filter === 'completed'? todo.completed:
      !todo.completed
    );

  return (
    <div>
      <section className="todo-container">
        <h1 className="todo-title">Todos List</h1>
        <TaskFrom addTask={addTask} />
        <TodoList
          todos={filtered}
          removeTask={removeTask}
          conpletedTask={conpletedTask}
        />
      </section>

      <label className="lb-show">Show:</label>
      <div className="btns-filter">
        <button className="btn btn-all" onClick={() => setFilter('all')}>All</button>
        <button className="btn btn-completed" onClick={() => setFilter('completed')}>Completed</button>
        <button className="btn btn-incomplete" onClick={() => setFilter('incomplete')}>Incomplete</button>
      </div>

    </div>
  );
}
