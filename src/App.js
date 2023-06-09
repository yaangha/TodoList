import { useRef, useState } from "react";
import TodoInsert from "./components/TodoInsert.js";
import TodoListAll from "./components/TodoListAll.js";
import mainStyle from "./styles/main.module.css";
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const nextId = useRef(0);
  const handleSubmit = (text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    }
    setTodos(todos.concat(todo));
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onToggle = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? {...todo, checked: !todo.checked} : todo;
      })
    );
  }

  return (
    <div className={mainStyle.main_box}>
      <h3>To Do List!</h3>
      <TodoInsert onSubmit={handleSubmit}/>
      <TodoListAll todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </div>
  );
}

export default App;
