import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/Home.css";

const Home = ({ username, isLoggedIn }) => {
  let navigate = useNavigate();
  function handleSubmitProfile() {
    navigate("/Profile");
  }
  function handleSubmitLogin() {
    navigate("/Login");
  }
  return (
    <>
      <h1 className="welcomeTitle">Welcome to Stranger's Things</h1>
      {isLoggedIn ? (
        <>
          <h3 className="isLoggedIn">
            Logged in as <b className="homeUser">{username}</b>
          </h3>
          <button onClick={handleSubmitProfile} className="viewProfile">
            VIEW PROFILE
          </button>
        </>
      ) : (
        <button onClick={handleSubmitLogin} className="loginHome">
          LOGIN
        </button>
      )}
    </>
  );
};

export default Home;
