import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <Link to="/"><button>Login</button></Link>
      <Link to="/home"><button>Home</button></Link>
      <Link to="/products"><button>Products</button></Link>
      
    </div>
  )
}

export default Navbar