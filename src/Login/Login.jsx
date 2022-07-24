import React from "react";
import "./login.css";
import { useState, useContext } from "react";
import { login } from "../authContext/apiCalls";
import { AuthContext } from "../authContext/AuthContext";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);
  const formSubmitHandler = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };
  return (
    <div className="login">
      <div className="text">Login</div>
      <form className="userInput">
        <input
          type="email"
          className="username"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="signInButton">
          <button className="button" onClick={formSubmitHandler}>
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
