import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">ShopEase</h2>
      <ul className="nav-list">
        <li>
          <NavLink 
            className={({ isActive }) => (isActive ? "active" : "")} 
            to="/"
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink 
            className={({ isActive }) => (isActive ? "active" : "")} 
            to="/about"
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink 
            className={({ isActive }) => (isActive ? "active" : "")} 
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar