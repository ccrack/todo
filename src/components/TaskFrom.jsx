import React, { useState } from 'react'
import './TaskFrom.css'

export default function TaskFrom({addTask}) {
    const [text, setText] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!text.trim())return;
        addTask(text);
        setText('')
    }
  return (
   <form className='search-form' onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder='Enter new task'/>
        <button type='submit'>Add</button>
   </form>
  )
}
