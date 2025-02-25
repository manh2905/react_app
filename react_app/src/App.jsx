import './components/todo/todo.css'
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import Reactimage from './assets/react.svg';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {

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
    <>

      <Header />
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
      <Outlet />
      <Footer />
    </>
  )
}

export default App;