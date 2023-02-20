import React, { useState } from "react";
import { addPostings } from "../api";
import { useNavigate } from "react-router-dom";
import "./css/AddPosts.css";

// This code is here to add a post to the "directory" of posts.

const AddPosts = () => {
  const [titleAdd, setTitleAdd] = useState("");
  const [descAdd, setDescAdd] = useState("");
  const [priceAdd, setPriceAdd] = useState("");
  const [locationAdd, setLocationAdd] = useState("");
  const [wTD, setWTD] = useState(false);
  const navigate = useNavigate();

// Handle submit is used to execute functions that pertain to adding a post. We have it to where you navigate to the posts page after you have made the add post API call (addPostings function)

  async function handleSubmit(event) {
    event.preventDefault();
    const token = localStorage.getItem("token");
    await addPostings(
      token,
      titleAdd,
      descAdd,
      priceAdd,
      locationAdd,
      wTD
    );
    navigate("/posts");
  }

// Returning divs that have variable text in them to display the information we are looking for.

  return (
    <>
      <div className="titleAdd">Add a Posting</div>
      <form onSubmit={handleSubmit}>
        <div className="inputDiv">
          <input
            className="inputTitle"
            placeholder="Add Title"
            type="text"
            value={titleAdd}
            onChange={(event) => {
              setTitleAdd(event.target.value);
            }}
            required
          />

          <input
            className="inputDesc"
            placeholder="Add Description"
            type="text"
            value={descAdd}
            onChange={(event) => {
              setDescAdd(event.target.value);
            }}
            required
          />

          <input
            className="inputPrice"
            placeholder="Add Price"
            type="text"
            value={priceAdd}
            onChange={(event) => {
              setPriceAdd(event.target.value);
            }}
            required
          />

          <input
            className="inputLocation"
            placeholder="Add Location"
            type="text"
            value={locationAdd}
            onChange={(event) => {
              setLocationAdd(event.target.value);
            }}
            required
          />

          <label htmlFor="willDeliver" id="willDeliver">
            Willing to deliver?
            <input type="checkbox" id="willDeliver" onChange={() => {
              setWTD(!wTD)
            }}
            />
          </label>
        </div>
        <button type="submit" className="createButton">
          CREATE
        </button>
      </form>
    </>
  );
};

export default AddPosts;
