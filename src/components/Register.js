import React from 'react'
import { registerPerson } from '../api'

const Register =({setUsername, setPassword, username, password}) => {

async function handleSubmit(event) {
    event.preventDefault()
    await registerPerson(username, password)
}

    return (<>
    <div>Register</div>
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
    </>)
}

export default Register