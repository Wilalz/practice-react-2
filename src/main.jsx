import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";


// pages
import { Home } from './components/C16-router/pages/Home'
import { RickAndMorty } from './components/C14-peticiones/RickAndMorty'
import { UserApi } from './components/C16-router/pages/UserApi'
import { Posts } from './components/C16-router/pages/Posts'
import { Post } from './components/C16-router/pages/Post'
import { ErrorPage } from './components/C16-router/pages/ErrorPage'
import { ReactRouter } from './components/C16-router/pages/ReactRouter'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      
      {
        path: "rickandmorty",
        element: <RickAndMorty />,
      },
      {
        path: "userapi",
        element: <UserApi />,
      },
      {
        path: "posts",
        element: <Posts />,
      },
      {
        path: "posts/:id",
        element: <Post />,
      },
      {
        path: "reactrouter",
        element: <ReactRouter />,
      },
    
    ]
  },
  
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
