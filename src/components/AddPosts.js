import React, {useState, useEffect} from 'react'
import { addPostings } from '../api'

const AddPosts= () => {
    let token = '';
    const [myPost, setMyPost] = useState({})
    useEffect(() => {
        token = localStorage.getItem('token')
    async function addMyPost(){
        const myReturnedPost = await addPostings(token)
        setMyPost(myReturnedPost)
        console.log(myReturnedPost)
    }
    // addMyPost()
}, [])

return (
    <>
    <div>Title</div>
    <div>Description</div>
    <div>Price</div>
    <div>Location</div>
    <div>Willing to Deliver?</div>
    <button>CREATE</button>
    </>
)

}


export default AddPosts