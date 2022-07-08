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
  setWTD,
  _id,
}) => {

  function handleSubmit(event) {
    event.preventDefault();
    const token = localStorage.getItem("token");
    editPosts(token, titleAdd, descAdd, priceAdd, wTD === "checked", _id);
  }

  function handleChange(event) {
    event.preventDefault();
    setWTD((wTD === "checked") ? "unchecked" : "checked");
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
                value={titleAdd}
                onChange={(event) => {
                    setTitleAdd(event.target.value);
                }}
              />
            </div>
            <div>
              <input
                id="Description"
                placeholder="Description"
                value={descAdd}
                onChange={(event) => {
                    setDescAdd(event.target.value);
                }}
              />
            </div>
            <div>
              <input
                id="Price"
                placeholder="Price"
                value={priceAdd}
                onChange={(event) => {
                    setPriceAdd(event.target.value);
                }}
              />
            </div>
            <div>
              <input
                id="Location"
                placeholder="Location"
                value={locationAdd}
                onChange={(event) => {
                    setLocationAdd(event.target.value);
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
