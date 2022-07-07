import React, {useState, useEffect, Fragment} from "react";
import {
  Routes,
  Route,
  useNavigate,
  BrowserRouter,
  Link,
} from "react-router-dom";
import { Login, Register, Posts, Home, Profile, Logout, Header } from "./";


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div>
      <Header isLoggedIn={isLoggedIn}/>
      <Routes>       
        <Route path="/logout" element={<Logout isLoggedIn={isLoggedIn}/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/profile" element={<Profile />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
