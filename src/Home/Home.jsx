import React from "react";
import Fetch from "./Fetch";
import { useHistory } from "react-router-dom";
import "./home.css";
const Home = () => {
  const history = useHistory();
  const editHandler = (e) => {
    e.preventDefault();
    history.push("/update");
  };
  return (
    <>
      <div className="heading">
        <span className="enteredText">To-Do List</span>
        <button className="editCredentials" onClick={editHandler}>
          Edit Credentials
        </button>
      </div>
      <Fetch />
    </>
  );
};

export default Home;
