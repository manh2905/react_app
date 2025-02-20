const TodoNew = (props) => {
    const { addNewTodo } = props;

    // addNewTodo("manh");
    return (
        <div className='todo-add'>
            <input type="text" />
            <button>ADD</button>
        </div>
    );

}

export default TodoNew;