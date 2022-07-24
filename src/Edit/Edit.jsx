import React from "react";
import { useState, useContext } from "react";
import { login } from "../userContext/apiCalls";
import { AuthContext } from "../authContext/AuthContext";
import "./edit.css";
const Edit = () => {
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);
  const updateHandler = (e) => {
    e.preventDefault();
    login({ Email, Password, Username }, dispatch);
  };
  return (
    <div className="formElement">
      <form>
        <span className="edit">Edit</span>
        <input
          type="email"
          className="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="username"
          className="username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="update" onClick={updateHandler}>
          Update
        </button>
      </form>
    </div>
  );
};

export default Edit;
