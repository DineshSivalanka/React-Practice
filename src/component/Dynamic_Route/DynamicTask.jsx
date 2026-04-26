import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Products from './Products';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import ProductDetail from './ProductDetail';
import NewFile from './NewFile';
import { Link } from 'react-router-dom';
const DynamicTask = () => {
    const router=createBrowserRouter(
        [
            {
                path:"/",
                element:<div>
                    <Navbar/>
                    <Home/>
                </div>
            },
            {
                path:"/Products",
                element:<div>
                    <Navbar/>
                    <Products/>
                </div>
            },
            {
                path:"/Products/:id",
                element:<div>
                    <Navbar/>
                    <ProductDetail/>
                </div>
            },
            {
                path:"/About",
                element:<div>
                    <Navbar/>
                    <About/>
                </div>
            },
            {
                path:"*",
                element:<div>
                    <Link to="/"><button>Go to home </button></Link>
                </div>
            }
        ]
    );
  return (
    <RouterProvider router={router}/>
  )
}

export default DynamicTask