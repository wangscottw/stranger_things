import React from "react";
import { registerPerson } from "../api";
import { NavLink, useNavigate } from "react-router-dom";
import "./css/Register.css";

const Register = ({ setUsername, setPassword, username, password }) => {
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    await registerPerson(username, password);
    navigate("/Posts");
  }

  return (
    <>
      <div className="loginTitle">Register Your Account</div>
      <form onSubmit={handleSubmit}>
        <label className="userLabel">
          Username
          <input
            className="userInput"
            placeholder="Username"
            name="username"
            type="text"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </label>

        <label className="passLabel">
          Password
          <input
            className="passInput"
            placeholder="Password"
            name="password"
            type="text"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </label>
        <button type="submit" id="registerButton">
          Register
        </button>
        <div className="registerText">
          Already Have An Account? Login{" "}
          <NavLink to="/Login" className="loginHere">
            Here.
          </NavLink>
        </div>
      </form>
    </>
  );
};

export default Register;
