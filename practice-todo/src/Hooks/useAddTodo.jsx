import React from "react";
import { useState } from "react";

function useAddTodo() {

  const [todos , setTodos] = useState([])

  function handleAddTodo(newTodo){
    setTodos([...todos , newTodo]);
  }

  return [todos , handleAddTodo]
}

export default useAddTodo;
