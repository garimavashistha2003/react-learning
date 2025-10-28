
import React, { useState } from 'react'

export default function AddTodo({onAdd}){

    const [todo , setTodo] = useState(' ');

    const handleSubmit = () =>{
        onAdd(todo);
        setTodo("");

    }

   
    return(
        <>
            
            <input
            value={todo}
            type="text" 
            onChange={(e) =>setTodo(e.target.value)}

            /> { ' '}
            <button onClick={handleSubmit}>Add Todo</button>
        </>
    )
}