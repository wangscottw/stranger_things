import React from 'react'
import { processMessages } from "../api";

const Messages = ({_id, messageContent, setMessageContent}) => {
    function handleSubmit(event){
        event.preventDefault()
        const token = localStorage.getItem('token')
        processMessages(token, _id, messageContent)
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