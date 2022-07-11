import React, { useEffect, useState } from "react";
import { getProfile } from "../api";
import { NavLink } from 'react-router-dom';

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
    <div>
      <h1>Welcome {username}</h1>
      <h2>Messages to me:</h2>
      {myInfo.posts
        ? myInfo.posts.map(({ title, _id, messages }) => {
            return (
              <div key={_id} className="profileMessages">
                <div>
                  {messages.map(({ content, fromUser }) => {
                    return (
                      <>
                        <h3>From: {fromUser.username}</h3>
                        <h3>{content}</h3>
                        <h3><NavLink to= "/"><b>(VIEW MY POST)</b> {title}</NavLink></h3>
                      </>
                    );
                  })}
                </div>
              </div>
            );
          })
        : null}
    </div>
    <div>
          <h1>Messages from me:</h1>
          {myInfo.messages
          ? myInfo.messages.map(({content, post}) => {
            return (<>
              <h3>(From Me)</h3>
              <h3>{content}</h3>
              <p> <NavLink to= "/"><b>(Message again)</b> {post.title}</NavLink></p>
            </>
            )
          })
        : null}
    </div>
    </>
  );
};

export default Profile;
