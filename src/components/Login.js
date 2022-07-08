import React from 'react'
import { loginPerson } from '../api'
import {
    useNavigate,
  } from "react-router-dom";

const Login =({setIsLoggedIn, username, setUsername, password, setPassword}) => {
    const navigate= useNavigate()
async function handleSubmit(event) {
    event.preventDefault()
    await loginPerson(username, password)
    setIsLoggedIn(true)
    navigate('/Profile')
}
    return (<>
    <div>Login</div>
    <form onSubmit={handleSubmit}>
        <label>
            Username
            <input
            name='username'
            type='text'
            value={username}
            placeholder='Enter Username Here'
            onChange={(event)=>{
                setUsername(event.target.value)
            }}
            />
        </label>

        <label>
            Password
            <input
            name='password'
            type='text'
            value={password}
            placeholder='Enter Password Here'
            onChange={(event)=>{
                setPassword(event.target.value)
            }}
            />
        </label>
        <button type='submit'>Login</button>

        </form>
    </>
)
}

export default Login