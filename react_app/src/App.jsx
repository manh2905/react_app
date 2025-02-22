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

  const manh = "Manh";
  const age = 25;
  const data = {
    address: "Hanoi",
    country: "VN"
  }

  const addNewTodo = (name) => {
    alert(`call me  ${name}`)
  }

  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo list</div>
        <TodoNew
          addNewTodo={addNewTodo} />
        <TodoData
          name={manh}
          age={age}
          data={data}
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