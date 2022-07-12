import { useState, useEffect } from "react";
import { retrievePosts } from "../api";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PostsAndFilter from "./PostsAndFilter";
import "./css/Posts.css";

// This component handles a lot of data.

// It will component/prop thread to the edit post, delete post, and message user section of the filework and display certain items based on if you are signed in or not as well as if you are the owner of a post or not.

// This will also allow you to search for specific posts based on the content within each post, whether it be the title, the price, the description, the user or the location.

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

// This function will allow you to search through the posts and pull out only the posts that match your search criteria.

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

      data.length > 0 ? setFilteredData(data) : setFilteredData(null);
    }
  }

// This useEffect will continue to update the display whenever you are adding (or subtracting) characters from the input box.

  useEffect(() => {
    searchItems(searchPosts);
  }, [searchPosts]);

  function handleIndividualPost() {
    navigate("/PostsAndFilter");
  }

// Divs and inputs to layout a post section that lets you do specific things when you are a user, the owner of a post, or just simply view when you aren't logged in. This prop threads into the Posts and Filter component to allow for additional or less information to be displayed when you are searching for a specific post.

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
