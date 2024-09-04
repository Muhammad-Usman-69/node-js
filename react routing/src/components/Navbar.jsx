import React from 'react'
import { NavLink } from 'react-router-dom'
// this will move web page without loading

const Navbar = () => {
    return (
        <nav className='flex bg-[#161616] text-white p-4 list-none gap-3'>
            <li>
                <NavLink className={(e) => e.isActive ? "underline" : ""} to="/home">Home</NavLink>
            </li>
            <li>
                <NavLink className={(e) => e.isActive ? "underline" : ""} to="/about">About</NavLink>
            </li>
            <li>
                <NavLink className={(e) => e.isActive ? "underline" : ""} to="/contact">Contact Us</NavLink>
            </li>
            <li>
                <NavLink className={(e) => e.isActive ? "underline" : ""} to="/user/Usman">Learn about Usman</NavLink>
            </li>
        </nav>
    )
}

export default Navbar
