import React, { useState } from "react";
import Todo from "../Components/Todo";

function Todos() {
  //LIST OF TODOS
  const [todos, setTodos] = useState([]);

  //function to add todo

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  // functio to delete todo

  const handleDeleteTodo = (deleteIndex) => {
    setTodos(todos.filter((item, todoIndex) => todoIndex !== deleteIndex));
  };

  return (
    <div>
      <Todo addTodo={handleAddTodo} />

      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            <input
              key={index}
              type="text"
              value={item}
              //   onChange={(e) => e.target.value}
            />
            <button onClick={() => handleDeleteTodo(index)}>Delete </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
