import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import "./index.css";
import Home from './components/Home/Home.jsx';
import Form from './components/SingIn/Form.jsx';
import ContaData from './components/SingIn/ContaDataCreator';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Form />,
  },
  {
    path: "/conta",
    element: <ContaData />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
