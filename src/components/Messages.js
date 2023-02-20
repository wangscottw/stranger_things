import React, { useState } from "react";
import { processMessages } from "../api";
import "./css/Messages.css";

// Allows for users to send messages to other users to inquire more about their product. Messages will show up in the profile section (more about this feature in the profile.js)

const Messages = ({ element, element_id }) => {
  const [messageContent, setMessageContent] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    const token = localStorage.getItem("token");
    if (confirm(`Do you want to send this message to ${element.author.username}?\nIf so, please click OK.\nOtherwise click Cancel.`) === true) {
      processMessages(token, element_id, messageContent);
      setMessageContent("");
    }
  }

// This component is attached to each post when you are logged in and will not show up if you are not logged in. Takes whatever you type into the input and sends that string to the user who's post you are sending to.

  return (
    <form onSubmit={handleSubmit} id="formInput">
      <label>
        <b>Send a message </b>
        <input
          id="messageInput"
          placeholder="Type Message Here"
          type="text"
          value={messageContent}
          onChange={(event) => {
            setMessageContent(event.target.value);
          }}
        />
      </label>
      <button type="Submit" id="messageButton">
        <b>Message</b>
      </button>
    </form>
  );
};

export default Messages;
