import React, {useState, useEffect} from "react";
import {
  Routes,
  Route,
  useNavigate,
  BrowserRouter,
  Link,
} from "react-router-dom";
import {loginPerson} from '../api'
import { Login, Register, Posts, Home, Profile, Logout } from "./";


const App = () => {
   console.log(loginPerson())
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
