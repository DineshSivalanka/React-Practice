import React from 'react'
import Home from './Home'
import Login from './Login'
import Navbar from './Navbar';
import About from './About'
import { Link } from 'react-router-dom';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import ForwardBackward from './ForwardBackward';
const UseNavigationApp = () => {
    const router=createBrowserRouter([
        {
            path:"/",
            element:<div>
                <Navbar/>
                <ForwardBackward/>
                <Home/>
            </div>
        },
        {
            path:"/about",
            element:<div>
                <Navbar/>
                <ForwardBackward/>
                <About/>
            </div>
        },
        {
            path:"/login",
            element:<div>
                <Navbar/>
                <ForwardBackward/>
                <Login/>
            </div>
        },
        {
            path:"*",
            element:<div>
                <h2>Page not found</h2>
                <Link to="/"><><button>Go to Home</button></></Link>
            </div>
        }
    ])
  return (
    <RouterProvider router={router}/>
  )
}

export default UseNavigationApp