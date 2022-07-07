import { useState, useEffect } from 'react'
import { retrievePosts } from '../api'

const Posts = () => {
const [posts, setPosts] = useState ([])
    useEffect(() => {
        retrievePosts()
    
        .then ((object) => {
            setPosts(object.data.posts)
        })
        .catch ((error) => {});
    }, [])
    console.log(posts)
    
    return (
        <div>
            {posts.map(({title, description, price, location, _id, author}) => (
                <div key={_id} className='posts'>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p><b>Price: </b>{price}</p>
                    <h3>{author.username}</h3>
                    <p><b>Location: </b>{location}</p>
                </div>
            ) )}
        </div>
    )
}

export default Posts