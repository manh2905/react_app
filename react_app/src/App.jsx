import './components/todo/todo.css'
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import Reactimage from './assets/react.svg'
import { useState } from 'react';

const App = () => {

  const [todoList, setTodoList] = useState([
    { id: 1, name: "learn react" },
    { id: 2, name: "play game" }
  ])



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
    <>
      <div className="todo-container">
        <div className="todo-title">Todo list</div>
        <TodoNew
          addNewTodo={addNewTodo} />
        <TodoData
          todoList={todoList}
        />
        <div className="todo-image">
          <img src={Reactimage} className='logo' />
        </div>
      </div>
    </>
  )
}

export default App;