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
  const [titleAdd, setTitleAdd] = useState("");
  const [descAdd, setDescAdd] = useState("");
  const [priceAdd, setPriceAdd] = useState("");
  const [locationAdd, setLocationAdd] = useState("");
  const [wTD, setWTD] = useState("unchecked");

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
              titleAdd={titleAdd}
              setTitleAdd={setTitleAdd}
              descAdd={descAdd}
              setDescAdd={setDescAdd}
              priceAdd={priceAdd}
              setPriceAdd={setPriceAdd}
              locationAdd={locationAdd}
              setLocationAdd={setLocationAdd}
              wTD={wTD}
              setWTD={setWTD}
            />
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route
          exact
          path="/"
          element={<Home username={username} isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/AddPosts"
          element={
            <AddPosts
              titleAdd={titleAdd}
              setTitleAdd={setTitleAdd}
              descAdd={descAdd}
              setDescAdd={setDescAdd}
              priceAdd={priceAdd}
              setPriceAdd={setPriceAdd}
              locationAdd={locationAdd}
              setLocationAdd={setLocationAdd}
              wTD={wTD}
              setWTD={setWTD}
            />
          }
        />
        <Route
          path="/EditUserPosts"
          element={
            <EditUserPosts
              titleAdd={titleAdd}
              setTitleAdd={setTitleAdd}
              descAdd={descAdd}
              setDescAdd={setDescAdd}
              priceAdd={priceAdd}
              setPriceAdd={setPriceAdd}
              locationAdd={locationAdd}
              setLocationAdd={setLocationAdd}
              wTD={wTD}
              setWTD={setWTD}
            />
          }
        />
        <Route path="/DeleteUserPosts" element={<DeleteUserPosts />} />
      </Routes>
    </div>
  );
};

export default App;
