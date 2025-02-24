
const TodoData = (props) => {

    const { todoList, deleteTodo } = props;


    const handleClickDelete = (id) => {
        deleteTodo(id);
    }


    return (
        <div className='todo-tasks'>
            {todoList.map((item, index) => {
                return (
                    <div className="todo-item" key={item.id}>
                        <div>{item.name}</div>
                        <button onClick={() => { handleClickDelete(item.id) }}>Delete</button>
                    </div>)
            })}

        </div>
    );
}

export default TodoData;