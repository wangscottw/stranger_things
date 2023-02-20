import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { retrievePosts } from "../api";
import DeleteUserPosts from "./DeleteUserPosts";
import EditUserPosts from "./EditUserPosts";
import Messages from "./Messages";
import "./css/SinglePostView.css"

const SinglePostView = ({ posts, setPosts, isLoggedIn, currentUser }) => {
  const { id } = useParams();
  const [seePostOptions, setSeePostOptions] = useState(null);
  const singlePostViewDelete = true
  useEffect(() => {
    retrievePosts()
      .then((object) => {
        object.data.posts.map((post) => {
          if (post._id === id) {
            setPosts(post);
          }
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="posts">
      <NavLink to="/posts" id="goBack">Back to All Posts</NavLink>
      <h2 id="eachPostTitle">{posts.title}</h2>
      <p>
        <b>Description: </b>
        {posts.description}
      </p>
      <p>
        <b>Price: </b>
        {posts.price}
      </p>
      <p>
        <b>User: </b>
        {posts.author ? posts.author.username : ""}
      </p>
      <p>
        <b>Location: </b>
        {posts.location}
      </p>
      <p>
        <b>Willing to Deliver? </b>
        {posts.willDeliver ? "Yes" : "No"}
      </p>
      {isLoggedIn && posts.author && currentUser !== posts.author.username ? (
        <>
          <Messages element={posts} element_id={posts._id} />
        </>
      ) : null}
      <br />
      {isLoggedIn && seePostOptions ? (
        <div className="editAndDelete">
          <EditUserPosts
            element={posts}
            element_id={posts._id}
            posts={posts}
            setPosts={setPosts}
          />
          <DeleteUserPosts
            element_id={posts._id}
            posts={posts}
            setPosts={setPosts}
            singlePostViewDelete={singlePostViewDelete}
          />
        </div>
      ) : null}
      { seePostOptions === null && posts.author && currentUser === posts.author.username ? (
        <button
          onClick={() => {
            setSeePostOptions(posts._id);
          }}
          id="optionsOpen"
        >
          OPEN OPTIONS
        </button>
      ) : seePostOptions === posts._id && posts.author && currentUser === posts.author.username ? (
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

export default SinglePostView;
