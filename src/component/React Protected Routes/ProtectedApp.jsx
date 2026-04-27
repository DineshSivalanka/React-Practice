import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Home'
import Products from './Products';
import Login from './Login';
import Navbar from './Navbar'
import { useState } from 'react';
import ProtectedRoute from './ProtectedRoute';
const ProtectedApp = () => {

  const [Auth,setisAuth] = useState(false);
  
  const router=createBrowserRouter([
    {
      path:"/",
      element:<div>
        <Navbar/>
        <Login Auth={Auth} setisAuth={setisAuth}/>
      </div>
    },
    {
      path:"/products",
      element:<div>
        <Navbar/>
        <ProtectedRoute Auth={Auth}>
          <Products/>
        </ProtectedRoute>
      </div>
    },
    {
      path:"/home",
      element:<div>
        <Navbar/>
        <ProtectedRoute Auth={Auth}>
          <Home/>
        </ProtectedRoute>
      </div>
    },
    
  ]);
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default ProtectedApp