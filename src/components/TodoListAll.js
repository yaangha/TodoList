import TodoItem from "./TodoItem";

function TodoListAll ({ todos, onRemove, onToggle }) {
    return (
        <>
            {todos.map((todo) => (
                <TodoItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
            ))}
        </>
    );
}

export default TodoListAll;