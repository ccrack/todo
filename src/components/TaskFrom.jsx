import React, { useState } from 'react'

export default function TaskFrom({addTask}) {
    const [text, setText] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!text.trim())return;
        addTask(text);
        setText('')
    }
  return (
   <form onSubmit={handleSubmit}>
        <input value={text} onChange={e => setText(e.target.value)} placeholder='Enter new task'/>
        <button type='submit'>Add</button>
   </form>
  )
}
