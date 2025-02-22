import { useState } from "react";

const TodoNew = (props) => {
    const { addNewTodo } = props;

    const [valIn, setValIn] = useState("")

    // addNewTodo("manh");
    const handleClick = () => {
        console.log(valIn);
        addNewTodo(valIn);
    }
    const handleOnchange = (name) => {
        setValIn(name);
    }
    return (
        <div className='todo-add'>
            <input type="text"
                onChange={(event) => handleOnchange(event.target.value)}
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