import { useState, useEffect } from "react";
import { deletePosts, editPosts, retrievePosts } from "../api";
import { NavLink } from "react-router-dom";
import EditUserPosts from "./EditUserPosts";
import DeleteUserPosts from "./DeleteUserPosts";
import Messages from "./Messages";
import { useNavigate } from "react-router-dom";
import PostsAndFilter from "./PostsAndFilter"

const Posts = ({
  isLoggedIn,
  searchPosts,
  setSearchPosts,
  titleAdd,
  setTitleAdd,
  descAdd,
  setDescAdd,
  priceAdd,
  setPriceAdd,
  locationAdd,
  setLocationAdd,
  wTD,
  setWTD,
}) => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
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
      .catch((error) => {});
  }, []);

  function searchItems(searchValue) {
    const data = posts.filter((item) => {
      return item.title.toLowerCase().includes(searchValue.toLowerCase())
        ? true
        : false;
    });

    data.length > 0 ? setFilteredData(data) : setFilteredData([]);
  }

useEffect (() => {
    searchItems(searchPosts)
}, [searchPosts])

  function handleIndividualPost() {
    navigate("/PostsAndFilter");
  }
  console.log(filteredData)
  return (
    <div>
      <div>
        <h1>Posts</h1>
        <input
          name="search-posts"
          type="text"
          value={searchPosts}
          placeholder="Search Posts"
          onChange={(event) => {
            setSearchPosts(event.target.value);
          }}
        />
        {isLoggedIn ? <NavLink to="/AddPosts">(ADD POST)</NavLink> : null}
      </div>
      {
      filteredData.length > 0 ?
      filteredData.map(
        (element) => {
          return (
            <PostsAndFilter key={element._id} element={element} isLoggedIn={isLoggedIn} currentUser={currentUser} handleIndividualPost={handleIndividualPost} titleAdd={titleAdd} setTitleAdd={setTitleAdd} descAdd={descAdd} setDescAdd={setDescAdd} priceAdd={priceAdd} setPriceAdd={setPriceAdd} locationAdd={locationAdd} setLocationAdd={setLocationAdd} wTD={wTD} setWTD={setWTD}/>
          );
        }
      )
      :
      posts.map(
        (element) => {
          return (
            <PostsAndFilter key={element._id} element={element} isLoggedIn={isLoggedIn} currentUser={currentUser} handleIndividualPost={handleIndividualPost} titleAdd={titleAdd} setTitleAdd={setTitleAdd} descAdd={descAdd} setDescAdd={setDescAdd} priceAdd={priceAdd} setPriceAdd={setPriceAdd} locationAdd={locationAdd} setLocationAdd={setLocationAdd} wTD={wTD} setWTD={setWTD}/>
          );
        }
      )}
    </div>
  );
};

export default Posts;
