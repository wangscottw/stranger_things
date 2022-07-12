import React, { useState, useEffect } from "react";
import { editPosts, retrievePosts } from "../api";
import "./css/EditUserPosts.css";

const EditUserPosts = ({ element_id, posts, setPosts }) => {
  const [titleAdd, setTitleAdd] = useState("");
  const [descAdd, setDescAdd] = useState("");
  const [priceAdd, setPriceAdd] = useState("");
  const [locationAdd, setLocationAdd] = useState("");
  const [wTD, setWTD] = useState("unchecked");

  async function handleSubmit(event) {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const newPost = await editPosts(
      token,
      titleAdd,
      descAdd,
      priceAdd,
      wTD === "checked",
      locationAdd,
      element_id
    );
    const newObj = posts.filter((postObj) => {
    if (postObj._id === newPost.data.post._id){
      return false 
      } else {return true}
      
    })
    setPosts([newPost.data.post, ...newObj])
  }

  function handleChange(event) {
    event.preventDefault();
    setWTD(wTD === "checked" ? "unchecked" : "checked");
  }
  return (
    <>
      <div id="RegisterBoxCenter">
        <div id="RegisterBox">
          <div>
            <h1 className="editPostHeading">Edit Post</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="inputDiv">
              <input
                className="inputEdit"
                id="Edit"
                placeholder="Edit Title"
                value={titleAdd}
                onChange={(event) => {
                  setTitleAdd(event.target.value);
                }}
              />
            </div>
            <div className="inputDiv">
              <input
                className="inputEdit"
                id="Description"
                placeholder="Edit Description"
                value={descAdd}
                onChange={(event) => {
                  setDescAdd(event.target.value);
                }}
              />
            </div>
            <div className="inputDiv">
              <input
                className="inputEdit"
                id="Price"
                placeholder="Edit Price"
                value={priceAdd}
                onChange={(event) => {
                  setPriceAdd(event.target.value);
                }}
              />
            </div>
            <div className="inputDiv">
              <input
                className="inputEdit"
                id="Location"
                placeholder="Edit Location"
                value={locationAdd}
                onChange={(event) => {
                  setLocationAdd(event.target.value);
                }}
              />
            </div>
            <div className="wtdCheckBox">
              <label htmlFor="willDeliver">
                <input
                  id="willDeliver"
                  type="checkbox"
                  name="willDeliver"
                  onChange={handleChange}
                />
                Willing to Deliver?
              </label>
            </div>
            <button type="Submit" id="saveEdit">
              SAVE EDIT
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditUserPosts;
