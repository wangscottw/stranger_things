import React, { useEffect } from "react";
import { editPosts } from "../api";
import "./css/EditUserPosts.css"

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
  element_id,
}) => {

  function handleSubmit(event) {
    event.preventDefault();
    const token = localStorage.getItem("token");
    editPosts(token, titleAdd, descAdd, priceAdd, wTD === "checked", locationAdd, element_id);
  }

  useEffect(() => {
    
  })

  function handleChange(event) {
    event.preventDefault();
    setWTD((wTD === "checked") ? "unchecked" : "checked");
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
              <input className="inputEdit"
                id="Edit"
                placeholder="Edit Title"
                value={titleAdd}
                onChange={(event) => {
                    setTitleAdd(event.target.value);
                }}
              />
            </div>
            <div className="inputDiv">
              <input className="inputEdit"
                id="Description"
                placeholder="Edit Description"
                value={descAdd}
                onChange={(event) => {
                    setDescAdd(event.target.value);
                }}
              />
            </div>
            <div className="inputDiv">
              <input className="inputEdit"
                id="Price"
                placeholder="Edit Price"
                value={priceAdd}
                onChange={(event) => {
                    setPriceAdd(event.target.value);
                }}
              />
            </div>
            <div className="inputDiv">
              <input className="inputEdit"
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
            <button type="Submit" id='saveEdit'>SAVE EDIT</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditUserPosts;
