import { useState } from "react";
function TodoLayout() {
  const [todoList, setTodoList] = useState([]);
  const [todoText, setTodoText] = useState("");

  const addTodo = () => {
    setTodoList((prev) => {
      return [...prev, todoText];
    });
    setTodoText("");
  };

  const handleInput = (e) => {
    setTodoText(e.target.value);
  };

  return (
    <div>
      <h1>Todo</h1>
      <input
        value={todoText}
        type="text"
        placeholder="Todo for today"
        onChange={handleInput}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todoList.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default TodoLayout;
