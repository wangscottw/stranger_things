import React from 'react'
import {
    useNavigate,
  } from "react-router-dom";

const Home = ({username, isLoggedIn}) => {
    const navigate= useNavigate()
    function handleSubmitProfile(){
        navigate('/Profile')
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
                <button>LOGIN</button>
            }
        </>
    
    
)
}

export default Home