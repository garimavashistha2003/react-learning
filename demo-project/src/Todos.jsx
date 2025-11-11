import React, { useState } from 'react'
import Todo from './Todo';

function Todos() {
    const [todos , setTodos] = useState([]); // list of todos


    //addd todo
    const handleAdd = (newTodo) => {
        if(newTodo.trim() === "") return;
        setTodos([...todos , newTodo])
    }


    //delete todo 
    const handleDelete = (todoIndex)=>{
        setTodos(todos.filter((item,index) => index != todoIndex))

    }
  return (
    <div>
        <Todo onAdd={handleAdd}/>
        <ul>
            {todos.map((item,index)=>(
                <li key={index}>
                    <input type="text" name="" id="" value={item} />
                    <button onClick= {()=> handleDelete(index)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Todos