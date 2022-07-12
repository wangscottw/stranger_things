import React, { useState, useEffect } from "react";
import { editPosts, retrievePosts } from "../api";
import "./css/EditUserPosts.css";

// This component handles all of the editing of the posts. We set it up to where you could only see this component if you were logged in and looking at your own posts. Edits and updates the post real time without needing to refresh the page.

const EditUserPosts = ({ element_id, posts, setPosts }) => {
  const [titleAdd, setTitleAdd] = useState("");
  const [descAdd, setDescAdd] = useState("");
  const [priceAdd, setPriceAdd] = useState("");
  const [locationAdd, setLocationAdd] = useState("");
  const [wTD, setWTD] = useState("unchecked");

// handleSubmit function for all of the information that needs to be sent to the API to be sent through the information filled out in the form/inputs.

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
      if (postObj._id === newPost.data.post._id) {
        return false;
      } else {
        return true;
      }
    });
    setPosts([newPost.data.post, ...newObj]);
  }

// Similar to how the AddPosts.js handleCB function worked, this just makes sure to update the verbiage on whether someone is willing to deliver based on whether the box is checked or not.

  function handleChange(event) {
    event.preventDefault();
    setWTD(wTD === "checked" ? "unchecked" : "checked");
  }

// Returning all of the divs/inputs necessary to make a nice form for user to add a posting.

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
