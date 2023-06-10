import TodoItem from "./TodoItem";

function TodoListAll ({ todos, onRemove, onToggle, isMobile }) {
    return (
        <>
            {todos.map((todo) => (
                <TodoItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} isMobile={isMobile} />
            ))}
        </>
    );
}

export default TodoListAll;