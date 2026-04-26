import React from 'react'
import { Outlet,Link } from 'react-router-dom'
const Shop = () => {
  return ( 
    <div>
      <h2>Shop</h2>
      <div>
        <Link to="men"><button>Men</button></Link>
        <Link to="women"><button>women</button></Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default Shop