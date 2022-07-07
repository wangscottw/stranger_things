import React, {useState, useEffect, Fragment} from "react";
import {
  Routes,
  Route,
  useNavigate,
  BrowserRouter,
  Link,
} from "react-router-dom";
import { Login, Register, Posts, Home, Profile, Logout } from "./";


const App = () => {
  return (
    <div>
      <Routes>       
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/profile" element={<Profile />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
