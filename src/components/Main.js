import React, {useState} from 'react'

const Main =() => {
    
    const [username, setUsername] = useState ('')
    const [password, setPassword] = useState ('')


    return (
    



    <>
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
    </>
)
}

export default Main