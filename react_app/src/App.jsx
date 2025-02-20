import './components/todo/todo.css'
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import Reactimage from './assets/react.svg'

const App = () => {

  const manh = "Manh";
  const age = 25;
  const data = {
    addres: "Hanoi",
    country: "VN"
  }

  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo list</div>
        <TodoNew />
        <TodoData
          name={manh}
          age={age}
          data={data}
        />
        <div className="todo-image">
          <img src={Reactimage} className='logo' />
        </div>
      </div>
    </>
  )
}

export default App;