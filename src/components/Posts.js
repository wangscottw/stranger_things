import { useState, useEffect } from "react";
import { retrievePosts } from "../api";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PostsAndFilter from "./PostsAndFilter";
import "./css/Posts.css";

const Posts = ({
  isLoggedIn,
  searchPosts,
  setSearchPosts,
  posts,
  setPosts,
}) => {
  const navigate = useNavigate();
  const [filteredData, setFilteredData] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    if (isLoggedIn) {
      setCurrentUser(localStorage.getItem("username"));
    } else {
      setCurrentUser(null);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    retrievePosts()
      .then((object) => {
        setPosts(object.data.posts);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function searchItems(searchValue) {
    if (searchValue.length) {

      const data = posts.filter((item) => {
        return item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.description.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.author.username
            .toLowerCase()
            .includes(searchValue.toLowerCase()) || 
          item.price.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.location.toLowerCase().includes(searchValue.toLowerCase())
          ? true
          : false;
      });
  
      data.length > 0 ? setFilteredData(data) : setFilteredData([]);
    }
  }

  useEffect(() => {
    searchItems(searchPosts);
  }, [searchPosts]);

  function handleIndividualPost() {
    navigate("/PostsAndFilter");
  }
  return (
    <div className="postDiv">
      <div className="searchPosts">
        <h1 id="postTitle">Posts</h1>
        <input
          id="searchPostInput"
          name="search-posts"
          type="text"
          value={searchPosts}
          placeholder="Search Posts"
          onChange={(event) => {
            setSearchPosts(event.target.value);
          }}
        />
        {isLoggedIn ? (
          <h1 id="navLink">
            <NavLink to="/AddPosts" id="addPostsLink">
              ADD POST
            </NavLink>
          </h1>
        ) : null}
      </div>
      {filteredData.length > 0
        ? filteredData.map((element) => {
            return (
              <PostsAndFilter
                key={element._id}
                element={element}
                isLoggedIn={isLoggedIn}
                currentUser={currentUser}
                handleIndividualPost={handleIndividualPost}
                posts={filteredData}
                setPosts={setFilteredData}
              />
            );
          })
        : posts.map((element) => {
            return (
              <PostsAndFilter
                key={element._id}
                element={element}
                isLoggedIn={isLoggedIn}
                currentUser={currentUser}
                handleIndividualPost={handleIndividualPost}
                posts={posts}
                setPosts={setPosts}
              />
            );
          })}
    </div>
  );
};

export default Posts;
