import React from "react";
import { NavLink } from "react-router-dom";
import "./css/Header.css";

// This is where all of our NavLinks reside in our nav-bar at the top of the screen. They route to the specific URL page that contains the information they are looking for.

const Header = ({ isLoggedIn }) => {
  return (
    <div id="nav-bar">
      <h1>Stranger's Things</h1>
      {isLoggedIn ? (
        <>
          <NavLink to="/" className="navBarLinks">
            Home
          </NavLink>
          <NavLink to="/posts" className="navBarLinks">
            Posts
          </NavLink>
          <NavLink to="/profile" className="navBarLinks">
            Profile
          </NavLink>
          <NavLink to="/logout" className="navBarLinks">
            Logout
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to="/" className="navBarLinks">
            Home
          </NavLink>
          <NavLink to="/posts" className="navBarLinks">
            Posts
          </NavLink>
          <NavLink to="/login" className="navBarLinks">
            Login
          </NavLink>
          <NavLink to="/register" className="navBarLinks">
            Register
          </NavLink>
        </>
      )}
    </div>
  );
};

export default Header;
