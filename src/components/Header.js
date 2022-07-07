import React from 'react'
import { NavLink } from 'react-router-dom';

import "./Header.css"


const Header = ({ userToken, setCurrentUser }) => {
    console.log(userToken)
return (
    <div id="nav-bar">
        <h1>Stranger's Things</h1>
            {
                !userToken ?
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
