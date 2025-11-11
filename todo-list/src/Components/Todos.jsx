import React, { use, useState } from 'react'
import Todo from "./Todo";

function Todos() {

    const [todos, setTodos] = useState([]);  // list of todos
    const [editingIndex , setEditingIndex] = useState(null); //handle index jhn change krna hai 
    const[editingText , setEditingText] = useState('')

    //for add todo 

    const handleAddTodo = (newTodo) => {
        if(newTodo.trim() === "")return;
        setTodos([...todos , newTodo])
    };

    //for delete todo

    const handleDeleteTodo = (todoIndex) => {
        setTodos(todos.filter((item, index) => index !== todoIndex));
    };

    //for edit todo 
    const handleEditTodo= (todoIndex) =>{
        setEditingIndex(todoIndex);
        setEditingText(todos[todoIndex]);

    }
    //for save todo

    const handleSaveTodo = (todoIndex) => {

        const updatedTodos = [...todos];
        updatedTodos[todoIndex] = editingText;
        setTodos(updatedTodos);
        setEditingIndex(null);
        // setEditingText('');

    }

  return (

    <>
    <h1>Todo List</h1>
    <Todo onAdd={handleAddTodo }/> 

    {/* displayinh todos */}
    <ul>

        {todos.map((item , index) => (
            <li key={index}>
                {editingIndex === index ?(
                    <>
                    <input 
                    type="text" 
                    value={editingText} 
                    onChange={(e) => setEditingText(e.target.value)}/>
                    <button onClick={()=> {handleSaveTodo(index)}}>Save</button>
                    <button onClick={() => {setEditingIndex(null)}}>Cancel</button>
                    </>
                ) : (
                    <>
                <input type="text" value={item} /> { }
                 <button onClick ={() => handleDeleteTodo(index)}>Delete</button> { ' '}
                 <button onClick ={() => handleEditTodo(index)}>Edit</button> { ' '}
                    </>
                )}
                 {/* {item} { ' '} */}   
            </li>    
        ))}

        

    </ul>
</>
  )
}

export default Todos