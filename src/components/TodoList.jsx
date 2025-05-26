import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todos}) {
  return (
    <ul>
        {todos.map((todo, index) =>(
            <TodoItem todo={todo} key={index}/>
        ) )}
    </ul>
  )
}
