import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import UserPage from './pages/user';
import BookPage from './pages/book';
import './styles/global.css'
import TodoApp from './components/todo/TodoApp';
import ErrorPage from './pages/eror';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <TodoApp />
      },
      {
        path: "/users",
        element: <UserPage />
      },
      {
        path: "/books",
        element: <BookPage />
      },
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
