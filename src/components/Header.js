import React from 'react'
import { NavLink } from 'react-router-dom';
import "./css/Header.css"


const Header = ({ isLoggedIn }) => {
return (
    <div id="nav-bar">
        <h1>Stranger's Things</h1>
            {
                isLoggedIn ?
                <>
                    <NavLink to= "/" className='navBarLinks'>Home</NavLink>
                    <NavLink to= "/posts" className='navBarLinks'>Posts</NavLink>
                    <NavLink to= "/profile" className='navBarLinks'>Profile</NavLink>
                    <NavLink to= "/logout" className='navBarLinks'>Logout</NavLink>
                </>
                :
                <>
                    <NavLink to= "/" className='navBarLinks'>Home</NavLink>
                    <NavLink to= "/posts" className='navBarLinks'>Posts</NavLink>
                    <NavLink to= "/login" className='navBarLinks'>Login</NavLink>
                    <NavLink to= "/register" className='navBarLinks'>Register</NavLink>
                </>
            }
    </div>
)
}

export default Header
