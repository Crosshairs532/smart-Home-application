import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/Root/Root';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import About from './components/About/About';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/Contact/Contact';
import Authprovider from './AuthProvider/Authprovider';
// import Allphone from './components/allphone/Allphone';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [

      {
        path: '/',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      }
      ,
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/testimonial',
        element: <Testimonial></Testimonial>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }

    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router}></RouterProvider>
    </Authprovider>
  </React.StrictMode>,
)
