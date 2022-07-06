import React from 'react'
import { NavLink } from 'react-router-dom';

import "./Header.css"


const Header = () => {
return (
    <div id="nav-bar">
        <h1>Stranger's Things</h1>
        <NavLink to= "/">Home</NavLink>
        <NavLink to= "/posts">Posts</NavLink>
        <NavLink to= "/profile">Profile</NavLink>
        <NavLink to= "/login">Login</NavLink>
        <NavLink to= "/register">Register</NavLink>
        <NavLink to= "/logout">Logout</NavLink>
    </div>
)
}

export default Header
