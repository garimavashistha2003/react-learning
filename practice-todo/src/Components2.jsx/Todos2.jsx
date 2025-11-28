import React from "react";
import Todo2 from "../Components2.jsx/Todo2";
import useAddTodo from "../Hooks/useAddTodo";

function Todos2() {

  const [todos ,handleAddTodo] = useAddTodo();

  return <div>
    <Todo2 customAdd = {handleAddTodo}/>
    <ul>
      {todos.map((item,index) => (
        <li key = {index}> 
        <input type="text" value={item}/>
        </li>
      ))}
    </ul>


  </div>;
}

export default Todos2;
