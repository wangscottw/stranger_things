import React, { useState } from "react";
import EditUserPosts from "./EditUserPosts";
import DeleteUserPosts from "./DeleteUserPosts";
import Messages from "./Messages";
import "./css/PostsAndFilter.css";
import { NavLink } from "react-router-dom";

// This component allows for the actual content of each post to be displayed and updated when you edit or delete posts. This section will also allow only specific items (such as messages, editing capabilities, and deleting capabilities) to only be available to their respective users. Each div will have variable information that changes based on the inputs that are threaded through this component.

const PostsAndFilter = ({
  element,
  currentUser,
  isLoggedIn,
  posts,
  setPosts,
}) => {
  const [seePostOptions, setSeePostOptions] = useState(null);
  // Returns the information back for each post, including when a search bar is narrowing down the results.

  return (
    <div className="posts">
      <h2 id="eachPostTitle"><NavLink to={`/posts/${element._id}`} id="eachPostTitle">{element.title}</NavLink></h2>
      <p>
        <b>Description: </b>
        {element.description}
      </p>
      <p>
        <b>Price: </b>
        {element.price}
      </p>
      <p>
        <b>User: </b>
        {element.author.username}
      </p>
      <p>
        <b>Location: </b>
        {element.location}
      </p>
      <p>
        <b>Willing to Deliver? </b>
        {element.willDeliver ? "Yes" : "No"}
      </p>
      {currentUser === element.author.username &&
      isLoggedIn &&
      seePostOptions ? (
        <div className="editAndDelete">
          <EditUserPosts
            element={element}
            element_id={element._id}
            posts={posts}
            setPosts={setPosts}
          />
          <DeleteUserPosts
            element_id={element._id}
            posts={posts}
            setPosts={setPosts}
          />
        </div>
      ) : null}
      {currentUser === element.author.username &&
      isLoggedIn &&
      seePostOptions === null ? (
        <button
          onClick={() => {
            setSeePostOptions(element._id);
          }}
          id="optionsOpen"
        >
          OPEN OPTIONS
        </button>
      ) : seePostOptions === element._id &&
        currentUser === element.author.username &&
        isLoggedIn ? (
        <button
          onClick={() => {
            setSeePostOptions(null);
          }}
          id="optionsClose"
        >
          CLOSE OPTIONS
        </button>
      ) : null}
    </div>
  );
};

export default PostsAndFilter;
