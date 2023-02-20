import React from "react";
import { useNavigate } from "react-router-dom";
import { deletePosts, retrievePosts } from "../api";
import "./css/DeleteUserPosts.css";

// This component is specific to deleting a post. We have it re-render the page after a post has been deleted without needing to refresh the page.

const DeleteUserPosts = ({ element_id, setPosts, singlePostViewDelete }) => {
  let navigate = useNavigate();
  
  async function handleSubmit(event) {
    event.preventDefault();
    const token = localStorage.getItem("token");
    if (confirm("Do you want to delete this post?\nIf so, please click OK.\nOtherwise click Cancel.") === true) {
      await deletePosts(token, element_id);
      const allPosts = await retrievePosts();
      setPosts(allPosts.data.posts);
      if (singlePostViewDelete) {
        navigate("/posts")
      }
    }
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
