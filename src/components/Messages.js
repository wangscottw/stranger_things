import React, { useState } from 'react'
import { processMessages } from "../api";
import "./css/Messages.css"

const Messages = ({element_id}) => {
    const [messageContent, setMessageContent] = useState('')
    function handleSubmit(event){
        event.preventDefault()
        const token = localStorage.getItem('token')
        processMessages(token, element_id, messageContent)
    }
    return (
        <form onSubmit={handleSubmit} id='formInput'>
            <label> 
            <b>Send a message </b>
                <input id='messageInput'
                placeholder='Type Message Here'
                type='text'
                value={messageContent}
                onChange={(event) => {
                    setMessageContent(event.target.value);
                }}
                />
            </label>
            <button type="Submit" id='messageButton'><h3>Message</h3></button>
        </form>
    )
}

export default Messages