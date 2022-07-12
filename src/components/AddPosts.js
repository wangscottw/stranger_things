import React, { useState } from "react";
import { addPostings } from "../api";
import { useNavigate } from "react-router-dom";
import "./css/AddPosts.css";

const AddPosts = () => {
  const [titleAdd, setTitleAdd] = useState("");
  const [descAdd, setDescAdd] = useState("");
  const [priceAdd, setPriceAdd] = useState("");
  const [locationAdd, setLocationAdd] = useState("");
  const [wTD, setWTD] = useState("unchecked");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const token = localStorage.getItem("token");
    addPostings(
      token,
      titleAdd,
      descAdd,
      priceAdd,
      locationAdd,
      wTD === "checked"
    );
    navigate("/posts");
  }
  function handleCB(event) {
    event.preventDefault();
    setWTD(wTD === "checked" ? "unchecked" : "checked");
  }

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
          />

          <input
            className="inputDesc"
            placeholder="Add Description"
            type="text"
            value={descAdd}
            onChange={(event) => {
              setDescAdd(event.target.value);
            }}
          />

          <input
            className="inputPrice"
            placeholder="Add Price"
            type="text"
            value={priceAdd}
            onChange={(event) => {
              setPriceAdd(event.target.value);
            }}
          />

          <input
            className="inputLocation"
            placeholder="Add Location"
            type="text"
            value={locationAdd}
            onChange={(event) => {
              setLocationAdd(event.target.value);
            }}
          />

          <label htmlFor="willDeliver" id="willDeliver">
            Willing to deliver?
            <input type="checkbox" id="willDeliver" onChange={handleCB} />
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
