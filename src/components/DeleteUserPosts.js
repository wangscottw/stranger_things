import React from "react";
import { deletePosts, retrievePosts } from "../api";
import "./css/DeleteUserPosts.css";

// This component is specific to deleting a post. We have it re-render the page after a post has been deleted without needing to refresh the page.

const DeleteUserPosts = ({ element_id, setPosts }) => {
  async function handleSubmit(event) {
    event.preventDefault();
    const token = localStorage.getItem("token");
    await deletePosts(token, element_id);
    const allPosts = await retrievePosts();
    setPosts(allPosts.data.posts);
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
