import React, {useState} from 'react'
import { loginPerson } from '../api'

const Login =() => {
    
    const [username, setUsername] = useState ('')
    const [password, setPassword] = useState ('')

async function handleSubmit(event) {
    event.preventDefault()
    const loginSuccess = await loginPerson(username, password)
    console.log(loginSuccess)
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