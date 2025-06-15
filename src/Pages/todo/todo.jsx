import React from "react";
import TaskFormContainer from "../../containers/TaskFormContainer"
import TodoList from "../../components/TodoList";
import "./todo.css";

export default function Todo({
  todos,
  addTask,
  removeTask,
  conpletedTask,
  setFilter,
}) {
  return (
    <div>
      <section className="todo-container">
        <h1 className="todo-title">Todos List</h1>
        <TaskFormContainer
          addTask={addTask} 
        />
        <TodoList
          todos={todos}
          removeTask={removeTask}
          conpletedTask={conpletedTask}
        />
      </section>

      <label className="lb-show">Show:</label>
      <div className="btns-filter">
        <button className="btn btn-all" onClick={() => setFilter("all")}>
          All
        </button>
        <button
          className="btn btn-completed"
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
        <button
          className="btn btn-incomplete"
          onClick={() => setFilter("incomplete")}
        >
          Incomplete
        </button>
      </div>
    </div>
  );
}
