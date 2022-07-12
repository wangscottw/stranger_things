import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./css/Logout.css";

const Logout = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  function handleUserLogout() {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/");
  }

  const username = localStorage.getItem("username");

  return (
    <>
      <h1 className="logoutTitle">Are you sure you want to log out of:</h1>
      <h2 className="logoutUser">{username}?</h2>
      <NavLink to="/" className="returnHome">
        -Return Home-
      </NavLink>
      <NavLink to="/Posts" className="returnPosts">
        -Return to Posts-
      </NavLink>
      <button onClick={handleUserLogout} className="logoutButton">
        Logout
      </button>
    </>
  );
};

export default Logout;
