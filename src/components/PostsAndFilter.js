import React from "react";
import EditUserPosts from "./EditUserPosts";
import DeleteUserPosts from "./DeleteUserPosts";
import Messages from "./Messages";
import "./css/PostsAndFilter.css";

// This component allows for the actual content of each post to be displayed and updated when you edit or delete posts. This section will also allow only specific items (such as messages, editing capabilities, and deleting capabilities) to only be available to their respective users. Each div will have variable information that changes based on the inputs that are threaded through this component.

const PostsAndFilter = ({
  element,
  currentUser,
  isLoggedIn,
  posts,
  setPosts,
}) => {

// Returns the information back for each post, including when a search bar is narrowing down the results.

  return (
    <div className="posts">
      <h2 id="eachPostTitle">{element.title}</h2>
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
      {isLoggedIn && currentUser !== element.author.username ? (
        <>
          <Messages element_id={element._id} />
        </>
      ) : null}
      {currentUser === element.author.username && isLoggedIn ? (
        <div className="editAndDelete">
          <EditUserPosts
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
    </div>
  );
};

export default PostsAndFilter;
