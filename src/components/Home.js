import React from 'react'
import {
    useNavigate,
  } from "react-router-dom";

const Home = ({username, isLoggedIn}) => {
    let navigate= useNavigate()
    function handleSubmitProfile(){
        navigate('/Profile')
    }
    function handleSubmitLogin(){
        navigate('/Login')
    }
return (
    
        <>
            <h1>Welcome to Stranger's Things</h1>
            {
               isLoggedIn ?
                <>
                <h3>Logged in as {username}</h3>
                <button onClick={handleSubmitProfile}>VIEW PROFILE</button>
                </>
                :
                <button onClick={handleSubmitLogin}>LOGIN</button>
            }
        </>
    
    
)
}

export default Home