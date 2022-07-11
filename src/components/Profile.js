import React, { useEffect, useState } from "react";
import { getProfile } from "../api";
import { NavLink } from 'react-router-dom';
import "./css/Profile.css"

const username = localStorage.getItem('username')

const Profile = (props) => {
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
  console.log(myInfo);

  return (
    <>
    <div className="messagesToMe">
      
      <div className="usernameDiv">
        <h1 className="username">Welcome {username}</h1>
      </div>
      
      <h1 className="messages">Messages to me:</h1>
      {myInfo.posts
        ? myInfo.posts.map(({ title, _id, messages }) => {
            return (
              <div key={_id} className="profileMessages">
                <div>
                  {messages.map(({ content, fromUser }) => {
                    return (
                      <div className="toMessages">
                        <h3>From: {fromUser.username}</h3>
                        <h3>{content}</h3>
                        <h3><NavLink to= "/" className="navlink"><b>(VIEW MY POST)</b> {title}</NavLink></h3>
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
          <h1 className="messages" id="messagesFM">Messages from me:</h1>
          {myInfo.messages
          ? myInfo.messages.map(({content, post}) => {
            return (
            <div className="fromMessages">
              <h3>(From Me)</h3>
              <h3>{content}</h3>
              <h3> <NavLink to= "/" className="navlink"><b>(Message again)</b> {post.title}</NavLink></h3>
            </div>
            )
          })
        : null}
    </div>
    </>
  );
};

export default Profile;
