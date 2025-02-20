const TodoData = (props) => {

    console.log(props);
    const { name, age, data } = props;
    const { addres, country } = data;
    return (
        <div className='todo-tasks'>
            <div>my name is {addres} </div>
            <div>learn react</div>
            <div>play game</div>
        </div>
    );
}

export default TodoData;