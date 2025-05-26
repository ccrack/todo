import React, { useState } from 'react'
import TaskFrom from '../../components/TaskFrom'
import TodoList from '../../components/TodoList';
import './todo.css'

export default function Todo() {
  const [todos, setTodos] =  useState([]);

  const addTask = (text) =>{
      setTodos([...todos, {text, completed:false}])
  }

  const removeTask = (index) =>{

  }



  return (
    <div className='todo-container'>
      <h1 className='todo-title'>Todos List</h1>
       <TaskFrom addTask={addTask}/>
       <TodoList todos={todos}/>
    </div>
  )
}
