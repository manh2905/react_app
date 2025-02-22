const TodoData = (props) => {


    const { name, age, data } = props;
    const { addres, country } = data;
    console.log(props);
    return (
        <div className='todo-tasks'>
            <div>my name is {addres} </div>
            <div>learn react</div>
            <div>play game</div>
            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>
    );
}

export default TodoData;