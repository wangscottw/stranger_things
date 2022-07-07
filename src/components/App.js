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
  const [username, setUsername] = useState ('')
  const [password, setPassword] = useState ('')
  const [searchPosts, setSearchPosts] = useState ('')
  return (
    <div>
      <Header isLoggedIn={isLoggedIn}/>
      <Routes>       
        <Route path="/logout" element={<Logout setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername} password={password} setPassword={setPassword}/>} />
        <Route path="/posts" element={<Posts searchPosts={searchPosts} setSearchPosts={setSearchPosts}/>} />
        <Route path="/profile" element={<Profile />} />
        <Route exact path="/" element={<Home username={username} isLoggedIn={isLoggedIn}/>} />
      </Routes>
    </div>
  );
};

export default App;
