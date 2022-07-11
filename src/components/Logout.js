import React from 'react'
import {
    useNavigate,
  } from "react-router-dom";


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
        <button onClick={handleUserLogout}>Logout</button>
        <button onClick={handleUserHome}>Return Home</button>
        <button onClick={handleUserPosts}>Return to Posts</button>
    </>
)
}

export default Logout