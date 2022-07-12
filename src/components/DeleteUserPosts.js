import React from 'react'
import { deletePosts } from "../api";
import "./css/DeleteUserPosts.css"

const DeleteUserPosts = ({element_id}) => {
    function handleSubmit(event){
        event.preventDefault()
        const token = localStorage.getItem('token')
        deletePosts(token, element_id)
    }
    return (
        <form onSubmit={handleSubmit}>
            <button type="Submit" id='deleteButton'>DELETE</button>
        </form>
    )
}

export default DeleteUserPosts
