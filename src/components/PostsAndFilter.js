import React from "react";
import EditUserPosts from "./EditUserPosts";
import DeleteUserPosts from "./DeleteUserPosts";
import Messages from "./Messages";
import "./css/PostsAndFilter.css";

const PostsAndFilter = ({
  element,
  currentUser,
  isLoggedIn,
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
          <DeleteUserPosts element_id={element._id} />
        </div>
      ) : null}
    </div>
  );
};

export default PostsAndFilter;
