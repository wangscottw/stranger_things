import React from "react";
import EditUserPosts from "./EditUserPosts";
import DeleteUserPosts from "./DeleteUserPosts";
import Messages from "./Messages";
import "./css/PostsAndFilter.css";

const PostsAndFilter = ({
  element,
  currentUser,
  isLoggedIn,
  posts,
  setPosts,
}) => {
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
          <DeleteUserPosts element_id={element._id} posts={posts}/>
        </div>
      ) : null}
    </div>
  );
};

export default PostsAndFilter;
