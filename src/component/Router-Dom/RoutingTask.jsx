import React from 'react'
import Home from './Home';
import About from './About';
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Contact from './Contact';
import Newfile from './Newfile';
import Navbar from './Navbar';
const RoutingTask = () => {
    const router=createBrowserRouter([
        {
            path:"/",
            element:<div>
                <Navbar/>
                <Home/>
            </div>
        },
        {
            path:"/about",
            element:<div>
                <Navbar/>
                <About/>
            </div>
        },
        {
            path:"/Contact",
            element:<div>
                <Navbar/>
                <Contact/>
            </div>
        },
        {
            path:"*",
            element:<div>
                <Newfile/>
            </div>
        }
    ]);
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  )
}

export default RoutingTask