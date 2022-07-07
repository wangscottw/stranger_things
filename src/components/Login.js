import React, {useState} from 'react'
import { loginPerson } from '../api'
import {
    Routes,
    Route,
    useNavigate,
    BrowserRouter,
    Link,
  } from "react-router-dom";
import App from './App'

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
            username
            <input
            name='username'
            type='text'
            value={username}
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