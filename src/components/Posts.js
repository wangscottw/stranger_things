import { useState, useEffect } from 'react'
import { retrievePosts } from '../api'

const Posts = () => {
useEffect(() => {
        retrievePosts()
        .then ((posts) => {
            console.log(posts)
        })
        .catch ((error) => {});
    }, [])

    return (
        <div>Hi</div>
    )
}

export default Posts