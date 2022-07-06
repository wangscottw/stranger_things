import React, {useState} from 'react'
import { loginPerson, registerPerson } from '../api'

const Main =() => {
    
    const [username, setUsername] = useState ('')
    const [password, setPassword] = useState ('')

async function handleSubmit(event) {
    event.preventDefault()
    // const backFromApi = await registerPerson(username, password)
    const loginSuccess = await loginPerson(username, password)
}

    return (
    



    <>
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

export default Main