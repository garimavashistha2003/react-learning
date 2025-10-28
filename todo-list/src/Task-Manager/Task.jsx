import React, { useState } from 'react'

function Task({onAddTask}) {
    const [text , setText] = useState('');
  return (
    <div>
        <input type="text" value={text} onChange={(e)=> setText(e.target.value)} />
        <button onClick = {()=> onAddTask(text) }>Add</button>
    </div>
  )
}

export default Task