import { useRef, useState } from "react";
import TodoInsert from "./components/TodoInsert.js";
import TodoListAll from "./components/TodoListAll.js";
import mainStyle from "./styles/main.module.css";
import './App.css';
import Calendar from "./components/Calendar.js";
import { useMediaQuery } from "react-responsive";


function App() {
  const isMobile = useMediaQuery({ query:"(max-width:768px)" }); // 768px 이하이면 ture, 이상이면 false

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
    <div className={isMobile ? mainStyle.main_mobile : mainStyle.main_box}>
      <Calendar/>
      <h3>📍 To Do List</h3>
      <TodoInsert onSubmit={handleSubmit} isMobile={isMobile}/>
      <TodoListAll todos={todos} onRemove={onRemove} onToggle={onToggle} isMobile={isMobile}/>
    </div>
  );
}

export default App;
