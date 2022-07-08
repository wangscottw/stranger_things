import React, {useState, useEffect} from 'react'
import { addPostings } from '../api'
import {
    useNavigate,
  } from "react-router-dom";

const AddPosts= ({titleAdd, setTitleAdd, descAdd, setDescAdd, priceAdd, setPriceAdd}) => {

    const navigate = useNavigate()
    const [wTD, setWTD] = useState("unchecked");

    function handleSubmit (event) {
        event.preventDefault()
        const token = localStorage.getItem('token')
        addPostings (token, titleAdd, descAdd, priceAdd, wTD === "checked")
    }
    function handleCB (event) {
        event.preventDefault()
        setWTD((wTD === "checked") ? "unchecked" : "checked")
    }
    function handleCreateSubmit () {
        navigate('/Posts')
    }
return (
    <>
    <form onSubmit={handleSubmit}>
    <label>Title
        <input
        placeholder = "Title"
        type='text'
        value={titleAdd}
        onChange={(event)=> {
            setTitleAdd(event.target.value)
        }}
        />
    </label>
    <label> Description
        <input
        placeholder = "Description"
        type='text'
        value={descAdd}
        onChange={(event)=> {
            setDescAdd(event.target.value)
        }}
        />
    </label>
    <label> Price
        <input
        placeholder = "Price"
        type='text'
        value={priceAdd}
        onChange={(event)=> {
            setPriceAdd(event.target.value)
        }}
        />
    </label>
    <form>
    <label htmlFor='willDeliver'> Willing to deliver?
        <input
        type='checkbox'
        id='willDeliver'
        name='willDeliver'
        onChange={handleCB}
        />
    </label>
    </form>
    <button type='submit' onClick={handleCreateSubmit}>CREATE</button>
    </form>
    </>
)

}


export default AddPosts