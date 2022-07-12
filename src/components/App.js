import React, { useState } from "react";
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
} from "./";

import "./css/App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [searchPosts, setSearchPosts] = useState("");
  const [posts, setPosts] = useState([]);

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
      </Routes>
    </div>
  );
};

export default App;
