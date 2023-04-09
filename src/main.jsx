import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Statistics from './Pages/Statistics/Statistics';
import Blog from './Pages/Blog/Blog';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
  },
    
      {
        path: "stats",
        element: <Statistics></Statistics>
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },
     
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
