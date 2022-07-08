import React from "react";
import { editPosts } from "../api";

const EditUserPosts = ({
  titleAdd,
  setTitleAdd,
  descAdd,
  setDescAdd,
  priceAdd,
  setPriceAdd,
  locationAdd,
  setLocationAdd,
  wTD,
  postId,
}) => {
  function handleSubmit(event) {
    event.preventDefault();
    const token = localStorage.getItem("token");
    editPosts(token, titleAdd, descAdd, priceAdd, wTD === "checked", postId);
  }
  return (
    <>
      <div id="RegisterBoxCenter">
        <div id="RegisterBox">
          <div>
            <h1>Edit New Post</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                id="Title"
                placeholder="Title"
                value={titleInput}
                onChange={(event) => {
                  setTitleInput(event.target.value);
                }}
              />
            </div>
            <div>
              <input
                id="Description"
                placeholder="Description"
                value={descriptionInput}
                onChange={(event) => {
                  setDescriptionInput(event.target.value);
                }}
              />
            </div>
            <div>
              <input
                id="Price"
                placeholder="Price"
                value={priceInput}
                onChange={(event) => {
                  setPriceInput(event.target.value);
                }}
              />
            </div>
            <div>
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
            <button type="Submit">SAVE</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditUserPosts;
