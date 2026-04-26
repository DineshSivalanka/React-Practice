import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Products from './pages/Products';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './Navbar';
import Shop from './pages/Shop';
import ProductDetail from './ProductDetail';
import NewFile from './NewFile';
import Men from './Men pages/Men';
import Women from './Women Pages/Women';
import MenProductDetails from './Men pages/MenProductDetails';
import WomenProductDetails from './Women Pages/WomenProductDetails';
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
            },
            {
                path:"/shop",
                element:<div>
                    <Navbar/>
                    <Shop/>
                </div>,
                children:[
                    {
                        path:"men",
                        element:<Men/>
                    },
                    {
                        path:"women",
                        element:<Women/>
                    },
                    {
                        path:"men/:id",
                        element:<div>
                        <Navbar/>
                        <MenProductDetails/>
                        </div>
                    },
                    {
                        path:"women/:id",
                        element:<div>
                        <Navbar/>
                        <WomenProductDetails/>
                        </div>
                    },
                ]
            },
            
        ]
    );
  return (
    <RouterProvider router={router}/>
  )
}

export default DynamicTask