const TodoNew = (props) => {
    const { addNewTodo } = props;

    // addNewTodo("manh");
    const handleClick = () => {
        alert("click me");
    }
    const handleOnchange = (name) => {
        console.log("hihi", name);
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
        </div>
    );

}

export default TodoNew;