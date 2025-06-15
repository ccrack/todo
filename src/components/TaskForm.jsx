import React from 'react'
import './TaskForm.css'

export default function TaskForm({text, handleChange, handleSubmit}) {
  return (
   <form className='search-form' onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} placeholder='Enter new task'/>
        <button type='submit'>Add</button>
   </form>
  )
}
