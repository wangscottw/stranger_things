import { useState, useEffect } from "react";
import { deletePosts, editPosts, retrievePosts } from "../api";
import { NavLink } from "react-router-dom";
import EditUserPosts from "./EditUserPosts";
import DeleteUserPosts from "./DeleteUserPosts";
import Messages from "./Messages";
import { useNavigate } from "react-router-dom";

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
  messageContent,
  setMessageContent,
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
    // setSearchPosts(searchValue)
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
    navigate("/IndividualPost");
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
            // setSearchPosts(event.target.value)
            setSearchPosts(event.target.value);
          }}
        />
        {isLoggedIn ? <NavLink to="/AddPosts">(ADD POST)</NavLink> : null}
      </div>
      {
      filteredData.length > 0 ?
      filteredData.map(
        ({ title, description, price, location, _id, author, willDeliver }) => {
          return (
            <div key={_id} className="posts">
              <h2>{title}</h2>
              <p>{description}</p>
              <p>
                <b>Price: </b>
                {price}
              </p>
              <h3>{author.username}</h3>
              <p>
                <b>Location: </b>
                {location}
              </p>
              <p>
                <b>Willing to Deliver? {willDeliver ? "Yes" : "No"}</b>
              </p>
              {isLoggedIn ? (
                <>
                  <Messages
                    _id={_id}
                    messageContent={messageContent}
                    setMessageContent={setMessageContent}
                  />
                </>
              ) : null}
              {currentUser === author.username && isLoggedIn ? (
                <>
                  <button onClick={handleIndividualPost}>Manage Post</button>
                  <EditUserPosts
                    _id={_id}
                    titleAdd={titleAdd}
                    setTitleAdd={setTitleAdd}
                    descAdd={descAdd}
                    setDescAdd={setDescAdd}
                    priceAdd={priceAdd}
                    setPriceAdd={setPriceAdd}
                    locationAdd={locationAdd}
                    setLocationAdd={setLocationAdd}
                    wTD={wTD}
                    setWTD={setWTD}
                  />
                  <DeleteUserPosts _id={_id} />
                </>
              ) : null}
            </div>
          );
        }
      )
      :
      posts.map(
        ({ title, description, price, location, _id, author, willDeliver }) => {
          return (
            <div key={_id} className="posts">
              <h2>{title}</h2>
              <p>{description}</p>
              <p>
                <b>Price: </b>
                {price}
              </p>
              <h3>{author.username}</h3>
              <p>
                <b>Location: </b>
                {location}
              </p>
              <p>
                <b>Willing to Deliver? {willDeliver ? "Yes" : "No"}</b>
              </p>
              {isLoggedIn ? (
                <>
                  <Messages
                    _id={_id}
                    messageContent={messageContent}
                    setMessageContent={setMessageContent}
                  />
                </>
              ) : null}
              {currentUser === author.username && isLoggedIn ? (
                <>
                  <button onClick={handleIndividualPost}>Manage Post</button>
                  <EditUserPosts
                    _id={_id}
                    titleAdd={titleAdd}
                    setTitleAdd={setTitleAdd}
                    descAdd={descAdd}
                    setDescAdd={setDescAdd}
                    priceAdd={priceAdd}
                    setPriceAdd={setPriceAdd}
                    locationAdd={locationAdd}
                    setLocationAdd={setLocationAdd}
                    wTD={wTD}
                    setWTD={setWTD}
                  />
                  <DeleteUserPosts _id={_id} />
                </>
              ) : null}
            </div>
          );
        }
      )}
    </div>
  );
};

export default Posts;
