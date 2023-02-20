import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Login,
  Register,
  Posts,
  Home,
  Profile,
  Logout,
  Header,
  AddPosts,
  EditUserPosts,
  DeleteUserPosts,
  SinglePostView
} from "./";

import "./css/App.css";

// Main hub for all prop threading. Some props were specific to their files but the props that needed to be at the top level to use in all documents are stored here.

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [searchPosts, setSearchPosts] = useState("");
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    const token = localStorage.getItem("token")
    const usernameReload = localStorage.getItem("username")
    if (token) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
    if (usernameReload) {
      setUsername(usernameReload)
    } else {
      setUsername("")
    }
  }, [])
// Returning routes to get to thread the props down to different levels of our website.

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} />
      <Routes>
        <Route
          path="/logout"
          element={<Logout setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/register"
          element={
            <Register
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              setIsLoggedIn={setIsLoggedIn}
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
            />
          }
        />
        <Route
          path="/posts"
          element={
            <Posts
              isLoggedIn={isLoggedIn}
              searchPosts={searchPosts}
              setSearchPosts={setSearchPosts}
              posts={posts}
              setPosts={setPosts}
            />
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route
          exact
          path="/"
          element={<Home username={username} isLoggedIn={isLoggedIn} />}
        />
        <Route path="/AddPosts" element={<AddPosts />} />
        <Route path="/EditUserPosts" element={<EditUserPosts />} />
        <Route path="/DeleteUserPosts" element={<DeleteUserPosts />} />
        <Route path="/posts/:id" element={<SinglePostView posts={posts} setPosts={setPosts} isLoggedIn={isLoggedIn} currentUser={username} />} />
      </Routes>
    </div>
  );
};

export default App;
