import React from 'react'
import TodoItem from './TodoItem'
import './TodoList.css'

export default function TodoList({todos, removeTask, conpletedTask}) {
  return (
    <ul className='todo-list-container'>
        {todos.map((todo, index) =>(
            <TodoItem todo={todo} key={index} removeTask={removeTask} conpletedTask={conpletedTask} />
        ) )}
    </ul>
  )
}
