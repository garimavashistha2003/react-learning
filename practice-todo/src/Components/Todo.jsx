import React, { useState } from "react";

function Todo({ addTodo }) {
  const [todo, setTodo] = useState("");
  function handleSubmitTodo() {
    addTodo(todo); //data sent to parent through function argumrnt
    setTodo(""); // add k badh input field  khali ho jayega
  }
  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleSubmitTodo}>Add Todo </button>
    </div>
  );
}

export default Todo;

// ✔ Parent → Child : function भेजते हैं
// ✔ Child → Parent : वही function call करते हैं और argument के रूप में data भेजते हैं
