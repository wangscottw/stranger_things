import { useState, useEffect } from 'react'
import { editPosts, retrievePosts } from '../api'
import { NavLink } from 'react-router-dom';
import EditUserPosts from './EditUserPosts';

const Posts = ({searchPosts, setSearchPosts, titleAdd, setTitleAdd, descAdd, setDescAdd, priceAdd, setPriceAdd, locationAdd, setLocationAdd, wTD, setWTD}) => {
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
                    {/* <button onSubmit={handleDelete}>Delete</button> */}
                    <button onClick={handleEdit}>Edit</button>
                </div>
            ) )}
        </div>
    )
}

export default Posts