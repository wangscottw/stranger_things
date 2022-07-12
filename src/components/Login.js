import React from "react";
import { loginPerson } from "../api";
import { useNavigate, NavLink } from "react-router-dom";
import "./css/Login.css";

const Login = ({
  setIsLoggedIn,
  username,
  setUsername,
  password,
  setPassword,
}) => {
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    await loginPerson(username, password);
    setIsLoggedIn(true);
    navigate("/Profile");
  }
  return (
    <>
      <div className="loginTitle">Login to Stranger's Things</div>
      <form onSubmit={handleSubmit}>
        <label className="userLabel">
          Username
          <br></br>
          <input
            className="userInput"
            name="username"
            type="text"
            value={username}
            placeholder="Enter Username Here"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </label>
        <br></br>
        <label className="passLabel">
          Password
          <br></br>
          <input
            className="passInput"
            name="password"
            type="text"
            value={password}
            placeholder="Enter Password Here"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </label>
        <br></br>
        <button type="submit" id="loginButton">
          Login
        </button>
      </form>
      <div className="registerText">
        Don't Have An Account? Register{" "}
        <NavLink to="/Register" className="registerHere">
          Here.
        </NavLink>
      </div>
    </>
  );
};

export default Login;
