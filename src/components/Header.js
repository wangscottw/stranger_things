import React from 'react'
import { NavLink } from 'react-router-dom';
import {tokenFromStorage} from '../api'

import "./Header.css"


const Header = ({ isLoggedIn }) => {
    console.log(isLoggedIn)
return (
    <div id="nav-bar">
        <h1>Stranger's Things</h1>
            {
                isLoggedIn ?
                <>
                    <NavLink to= "/">Home</NavLink>
                    <NavLink to= "/posts">Posts</NavLink>
                    <NavLink to= "/profile">Profile</NavLink>
                    <NavLink to= "/logout">Logout</NavLink>
                </>
                :
                <>
                    <NavLink to= "/">Home</NavLink>
                    <NavLink to= "/login">Login</NavLink>
                    <NavLink to= "/register">Register</NavLink>
                </>
            }
            {/* <NavLink to= "/">Home</NavLink>
            <NavLink to= "/posts">Posts</NavLink>
            <NavLink to= "/profile">Profile</NavLink>
            <NavLink to= "/logout">Logout</NavLink>
            <NavLink to= "/login">Login</NavLink>
            <NavLink to= "/register">Register</NavLink> */}
    </div>
)
}

export default Header
