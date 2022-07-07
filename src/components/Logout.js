import React from 'react'
import {
    Routes,
    Route,
    useNavigate,
    BrowserRouter,
    Link,
  } from "react-router-dom";


const Logout = ({setIsLoggedIn}) => {
    const navigate= useNavigate()
    function handleUserLogout(){
        setIsLoggedIn(false)
       localStorage.removeItem("token");
       navigate('/')
    }
return (
    <button onClick={handleUserLogout}>Logout</button>
)
}

export default Logout