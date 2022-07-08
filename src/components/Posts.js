import { useState, useEffect } from 'react'
import { deletePosts, editPosts, retrievePosts } from '../api'
import { NavLink } from 'react-router-dom';
import EditUserPosts from './EditUserPosts';
import DeleteUserPosts from './DeleteUserPosts';
import Messages from './Messages'

const Posts = ({searchPosts, setSearchPosts, titleAdd, setTitleAdd, descAdd, setDescAdd, priceAdd, setPriceAdd, locationAdd, setLocationAdd, wTD, setWTD, messageContent, setMessageContent}) => {
const [posts, setPosts] = useState ([])
    useEffect(() => {
        retrievePosts()
    
        .then ((object) => {
            setPosts(object.data.posts)
        })
        .catch ((error) => {});
    }, [])
    console.log(posts)
    
function handleEdit(){
    let token = localStorage.getItem('token')
    editPosts(token)
}

function handleDelete(){
    let token = localStorage.getItem('token')
    deletePosts(token)
}


    return (
        <div>
            <div>
                <h1>Posts</h1>
                    <input 
                    name='search-posts'
                    type='text'
                    value= {searchPosts}
                    placeholder = 'Search Posts'
                    onChange = {(event) => {
                        setSearchPosts(event.target.value)
                    }}
                    /> 
                    <NavLink to= "/AddPosts">(ADD POST)</NavLink>
            </div>
            {posts.map(({title, description, price, location, _id, author, willDeliver}) => (
                <div key={_id} className='posts'>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p><b>Price: </b>{price}</p>
                    <h3>{author.username}</h3>
                    <p><b>Location: </b>{location}</p>
                    <p><b>Willing to Deliver? { willDeliver ? "Yes" : "No" }</b></p>
                    <EditUserPosts _id={_id} titleAdd={titleAdd} setTitleAdd={setTitleAdd} descAdd={descAdd} setDescAdd={setDescAdd} priceAdd={priceAdd} setPriceAdd={setPriceAdd} locationAdd={locationAdd} setLocationAdd={setLocationAdd} wTD={wTD} setWTD={setWTD}/>
                    <DeleteUserPosts _id={_id}/>
                    <Messages _id={_id} messageContent={messageContent} setMessageContent={setMessageContent}/>
                </div>
            ) )}
        </div>
    )
}

export default Posts
