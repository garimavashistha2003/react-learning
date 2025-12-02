import React, { useEffect } from "react";
import Todo2 from "../Components2.jsx/Todo2";
import useTodos from "../Hooks/useTodos";

function Todos2() {

  const {todos ,handleAddTodo , handleDeleteTodo} = useTodos();


  return <div>
    <Todo2 customAdd = {handleAddTodo}/>
    <ul>
      {todos.map((item,index) => (
        <li key = {index}> 
        <input type="text" value={item}/>
        <button onClick = {() =>  handleDeleteTodo(index)}>Delete</button>
        </li>
      ))}
    </ul>


  </div>;
}

export default Todos2;




// | Action            | Parent Renders | Child Renders   |
// | ----------------- | -------------- | --------------- |
// | Initial load      | 1              | 1               |
// | User typing       | 0              | 1 (2nd render)  |
// | Child setTodo("") | 0              | 1 (3rd render)  |
// | Parent setTodos() | 1              | +1 (4th render) |
// | **TOTAL**         | **2**          | **4**           |
