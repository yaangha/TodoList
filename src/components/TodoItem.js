import itemStyle from "../styles/item.module.css";
import {FaRegCheckCircle, FaTrash} from "react-icons/fa";

function TodoItem({ todo, onRemove, onToggle }) {
    const {id, text, checked} = todo;

    return (
        <div className={itemStyle.main_box}>
            <div onClick={() => onToggle(id)} className={itemStyle.done_button} style={{ color: checked ? "gray" : null }}>
                <FaRegCheckCircle/>
            </div> {/* Done Button */}
            <div className={itemStyle.text_box} style={{ textDecoration: checked ? "line-through" : null, color: checked ? "gray" : null }}>
                {todo.text}
            </div>
            <div onClick={() => onRemove(id)} className={itemStyle.delete_button}>
                <FaTrash/>
            </div> {/* Delete Button */}
        </div>
    );
}

export default TodoItem;