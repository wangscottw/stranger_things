import React, { useState } from 'react'
import { processMessages } from "../api";

const Messages = ({element_id}) => {
    const [messageContent, setMessageContent] = useState('')
    function handleSubmit(event){
        event.preventDefault()
        const token = localStorage.getItem('token')
        processMessages(token, element_id, messageContent)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Send a message
                <input
                placeholder='message'
                type='text'
                value={messageContent}
                onChange={(event) => {
                    setMessageContent(event.target.value);
                }}
                />
            </label>
            <button type="Submit">Message</button>
        </form>
    )
}

export default Messages