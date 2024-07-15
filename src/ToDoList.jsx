import { useState } from "react";

const ToDoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", done: false },
    { id: 2, text: "Learn Firebase", done: false },
    { id: 3, text: "Learn GraphQL", done: false }
  ]);

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo = { id: todos.length + 1, text: inputValue, done: false };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  return (
    <div>
      <h1>My To Do List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() =>
                setTodos(
                  todos.map((t) =>
                    t.id === todo.id ? { ...t, done: !t.done } : t
                  )
                )
              }
            />
            {todo.text}
            <button
              onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
