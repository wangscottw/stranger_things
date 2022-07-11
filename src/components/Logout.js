import React from 'react'
import {
    NavLink,
    useNavigate,
  } from "react-router-dom";
  import "./css/Logout.css"


const Logout = ({setIsLoggedIn}) => {
    const navigate= useNavigate()
    function handleUserLogout(){
        setIsLoggedIn(false)
       localStorage.removeItem("token");
       localStorage.removeItem("username");
       navigate('/')
    }

function handleUserHome () {
    const navigate = useNavigate()
    navigate('/')
}

function handleUserPosts () {
    const navigate= useNavigate()
    navigate('/Posts')
}

const username = localStorage.getItem('username')

return (
    <>
        <h1>Are you sure you want to log out of:</h1>
        <h2>{username}?</h2>
        <NavLink to = '/'>Return Home</NavLink>
        <NavLink to = '/Posts'>Return to Posts</NavLink>
        <button onClick={handleUserLogout}>Logout</button>
    </>
)
}

export default Logout