import './todo.css'
import TodoData from './TodoData';
import TodoNew from './TodoNew';
import Reactimage from '../../assets/react.svg';
import { useState } from 'react';


const TodoApp = () => {
    const [todoList, setTodoList] = useState([

    ])

    const deleteTodo = (id) => {
        const newTodo = todoList.filter((item, index) => item.id !== id);
        setTodoList(newTodo);
    }


    const addNewTodo = (name) => {
        const newTodo = {
            id: randomIntFromInterval(1, 1000000),
            name: name
        }

        setTodoList([...todoList, newTodo]);
    }

    const randomIntFromInterval = (min, max) => { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    return (
        <div className="todo-container">
            <div className="todo-title">Todo list</div>
            <TodoNew
                addNewTodo={addNewTodo} />
            {
                todoList.length > 0 ?
                    <TodoData
                        todoList={todoList}
                        deleteTodo={deleteTodo}
                    />

                    :

                    <div className="todo-image">
                        <img src={Reactimage} className='logo' />
                    </div>
            }

        </div>
    )
}

export default TodoApp;