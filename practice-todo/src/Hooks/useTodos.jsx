import React, { useEffect } from "react";
import { useState } from "react";

function useTodos() {


//list of todos state 
  const [todos , setTodos] = useState(()=>{

    return JSON.parse(localStorage.getItem("todos")) || [];

  })

  useEffect(()=>{

    console.log("effect runs ")
    localStorage.setItem("todos",JSON.stringify(todos) , )

  }, [todos])



  // function for add todo 
  function handleAddTodo(newTodo){
    if(newTodo.trim() === "") return;
    setTodos([...todos , newTodo]);
  }

  //function for delete todo 

  function handleDeleteTodo(deleteIndex){
    setTodos(todos.filter((item,todoIndex) => (
      todoIndex !== deleteIndex
    )))

  }

  return {todos , handleAddTodo , handleDeleteTodo}
}

export default useTodos;
