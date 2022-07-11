import React from "react";
import EditUserPosts from "./EditUserPosts";
import DeleteUserPosts from "./DeleteUserPosts";
import Messages from "./Messages";

const PostsAndFilter = ({
  element,
  currentUser,
  handleIndividualPost,
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
      <h2>{element.title}</h2>
      <p>{element.description}</p>
      <p>
        <b>Price: </b>
        {element.price}
      </p>
      <h3>{element.author.username}</h3>
      <p>
        <b>Location: </b>
        {element.location}
      </p>
      <p>
        <b>Willing to Deliver? {element.willDeliver ? "Yes" : "No"}</b>
      </p>
      {isLoggedIn ? (
        <>
          <Messages element_id={element._id} />
        </>
      ) : null}
      {currentUser === element.author.username && isLoggedIn ? (
        <>
          <button onClick={handleIndividualPost}>Manage Post</button>
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
        </>
      ) : null}
    </div>
  );
};

export default PostsAndFilter;
