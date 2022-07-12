import React from "react";
import { deletePosts } from "../api";
import "./css/DeleteUserPosts.css";

const DeleteUserPosts = ({ element_id, posts }) => {
  async function handleSubmit(event) {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const deletePost = await deletePosts(token, element_id);
    console.log(deletePost)
    const newObj = posts.filter((postObj) => {
    if (postObj._id === deletePost.data.post._id){
      return false 
      } else {return true}
      
    })
    setPosts([...newObj])
  }
  return (
    <form onSubmit={handleSubmit}>
      <button type="Submit" id="deleteButton">
        DELETE
      </button>
    </form>
  );
};

export default DeleteUserPosts;
