import { useState } from "react";

const TodoNew = (props) => {
    const { addNewTodo } = props;

    const [valIn, setValIn] = useState("")

    // addNewTodo("manh");
    const handleClick = () => {
        if (valIn != "") {

            addNewTodo(valIn);
            setValIn("");
        }
    }
    const handleOnchange = (name) => {
        setValIn(name);
    }
    return (
        <div className='todo-add'>
            <input type="text"
                onChange={(event) => handleOnchange(event.target.value)}
                value={valIn}
            />
            <button
                style={{ cursor: "pointer" }}
                onClick={handleClick}
            >ADD</button>
            <div> input is = {valIn} </div>
        </div>
    );

}

export default TodoNew;