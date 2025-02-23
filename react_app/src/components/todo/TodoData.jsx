const TodoData = (props) => {

    const { todoList } = props;
    console.log(props);
    return (
        <div className='todo-tasks'>
            {todoList.map((item, index) => {
                return (
                    <div className="todo-item" key={item.id}>
                        <div>{item.name}</div>
                        <button>Delete</button>
                    </div>)
            })}

        </div>
    );
}

export default TodoData;