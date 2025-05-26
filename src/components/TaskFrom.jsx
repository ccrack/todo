import React, { useState } from 'react'

export default function TaskFrom() {
    const [text, setText] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
    }
  return (
   <form onSubmit={handleSubmit}>
        <input value={text} onChange={e => setText(e.target.value)} placeholder='Enter new task'/>
        <button type='submit'>Add</button>
   </form>
  )
}
