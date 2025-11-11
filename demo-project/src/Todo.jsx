import React from 'react'
import { useState } from "react"

function Todo({onAdd}) {
      const [todo , setTodo] = useState('');
    
      function handleAddTodo(){
        onAdd(todo);
        setTodo("");
      }
    return (
        <div>
            <h1>Todo</h1>
            <input type="text" onChange={(e)=> setTodo(e.target.value)} value = {todo}/>
            <button onClick={handleAddTodo}>Add</button>
        </div>
    
      )
}

export default Todo