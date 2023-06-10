import { useEffect, useRef, useState } from "react";
import insertStyle from "../styles/insert.module.css";
import {FaPencilAlt} from "react-icons/fa";

function TodoInsert(props) {
    const [content, setContent] = useState("");
    const ref = useRef();
    const handleChange = (event) => {
        setContent(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!content) return;
        props.onSubmit(content);
        setContent("");
    };

    return (
        <div>
            <form>
                <span className={props.isMobile ? insertStyle.span_mobile : insertStyle.span_box}>
                    <input value={content} onChange={handleChange} className={props.isMobile ? insertStyle.input_mobile : insertStyle.input_box} type="text" placeholder="plz, write here." autoFocus/>
                    <button className={insertStyle.add_button} type="submit" onClick={handleSubmit}><FaPencilAlt/></button>
                </span>
            </form>
        </div>
    );
}

export default TodoInsert;