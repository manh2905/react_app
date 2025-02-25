import './components/todo/todo.css'
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import Reactimage from './assets/react.svg';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {

  return (
    <>

      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App;