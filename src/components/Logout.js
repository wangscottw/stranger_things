import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./css/Logout.css";

// Logout button that will sign you out of the API as well as clear the local storage of both username and token so that a new user can sign in.

const Logout = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  function handleUserLogout() {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/");
  }

  const username = localStorage.getItem("username");

// Simple return to give you options to log out or return to one of the "main" (home or posts) pages if you didn't wish to logout.

  return (
    <>
      <h1 className="logoutTitle">Are you sure you want to log out of:</h1>
      <h2 className="logoutUser">{username}?</h2>
      <NavLink to="/" className="returnHome">
        Return Home
      </NavLink>
      <NavLink to="/Posts" className="returnPosts">
        Return to Posts
      </NavLink>
      <button onClick={handleUserLogout} className="logoutButton">
        Logout
      </button>
    </>
  );
};

export default Logout;
