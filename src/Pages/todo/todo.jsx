import React, { useState } from 'react'
import TaskFrom from '../../components/TaskFrom'
import TodoList from '../../components/TodoList';

export default function Todo() {
  const [todos, setTodos] =  useState([]);

  const addTask = (text) =>{
      setTodos([...todos, {text, completed:false}])
  }

  const removeTask = (index) =>{

  }



  return (
    <div>
      <h1>Todo List</h1>
       <TaskFrom addTask={addTask}/>
       <TodoList todos={todos}/>
    </div>
  )
}
