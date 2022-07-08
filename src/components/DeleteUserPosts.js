import React from 'react'
import { deletePosts } from "../api";

const DeleteUserPosts = ({_id}) => {
    function handleSubmit(event){
        event.preventDefault()
        const token = localStorage.getItem('token')
        deletePosts(token, _id)
    }
    return (
        <form onSubmit={handleSubmit}>
            <button type="Submit">DELETE</button>
        </form>
    )
}

export default DeleteUserPosts
