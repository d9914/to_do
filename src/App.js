import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]); // Declare a state variable to store the list of todos
  const [inputValue, setInputValue] = useState(""); // Declare a state variable to store the input value

  function handleAddTodo() {
    // Add the new todo to the list
    setTodos([...todos, inputValue]);
    setInputValue(""); // Clear the input field
  }

  function handleDeleteTodo(index) {
    // Create a copy of the todos list
    const newTodos = [...todos];
    // Remove the todo item at the specified index
    newTodos.splice(index, 1);
    // Update the todos list
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <input
        type="text"
        value={inputValue} // Set the value of the input field to the value of the state variable
        onChange={(event) => setInputValue(event.target.value)} // Update the state variable when the input value changes
      />
      <div>
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <hr></hr>
      <ul>
        {todos.map((todo, index) => (
          <li class="list">
            {todo}
            <button class="complete" onClick={() => handleDeleteTodo(index)}>
              Complete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
