import React from "react";
import { useState } from "react";


function Todo2({customAdd}) {
  
  const [todo , setTodo] = useState("");


  function handleSubmitTodo(){
    customAdd(todo);
    setTodo("");
  }
  

  return <div>
    <input type="text"  value={todo} onChange = {(e)=> setTodo(e.target.value)}/>
    <button onClick={handleSubmitTodo}>Add Todo</button>
  </div>;
}

export default Todo2;
