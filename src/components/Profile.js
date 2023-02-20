import React, { useEffect, useState } from "react";
import { getProfile } from "../api";
import { NavLink } from "react-router-dom";
import "./css/Profile.css";

const username = localStorage.getItem("username");

// Allows users who are logged in to see what messages they have. Built in functionality (work in progress) to send a message back to those users who have already sent you a message. This route is only available when you login.

const Profile = () => {
  let token = "";
  const [myInfo, setMyInfo] = useState({});
  useEffect(() => {
    token = localStorage.getItem("token");
    async function getMyInfo() {
      const myReturnedInfo = await getProfile(token);
      setMyInfo(myReturnedInfo);
    }
    getMyInfo();
  }, []);

// Shows messages to be viewed that were from the user and to the user.

  return (
    <>
      <div className="messagesToMe">
        <div className="usernameDiv">
          <h1 className="username">
            Welcome <b className="userName">{username}</b>
          </h1>
        </div>

        <h1 className="messages">Messages to me:</h1>
        {myInfo.posts
          ? myInfo.posts.map(({ title, _id, messages }) => {
              return (
                <div key={_id} className="profileMessages">
                  <div>
                    {messages.map(({ content, fromUser }) => {
                      console.log(messages)
                      return (
                        <div className="toMessages">
                          <h3>From: {fromUser.username}</h3>
                          <h3>{content}</h3>
                          <h3>
                            <NavLink to={`/posts/${_id}`} className="navlink">
                              <b>(VIEW MY POST)</b> {title}
                            </NavLink>
                          </h3>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
          : null}
      </div>
      <div className="messagesFromMe">
        <h1 className="messages" id="messagesFM">
          Messages from me:
        </h1>
        {myInfo.messages
          ? myInfo.messages.map(({ content, post }) => {
              return (
                <div className="fromMessages">
                  <h3>(From Me)</h3>
                  <h3>{content}</h3>
                  <h3>
                            <NavLink to={`/posts/${post._id}`} className="navlink">
                              <b>(MESSAGE AGAIN)</b> {post.title}
                            </NavLink>
                          </h3>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};

export default Profile;
